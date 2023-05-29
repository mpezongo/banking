const { exec } = require('child_process');
const jwt = require("jsonwebtoken");
const connect = require("../connect");

exports.Create = (req, res) => {

  // res.setHeader('Content-Type', 'text/event-stream');
  // res.setHeader('Cache-Control', 'no-cache');
  // res.setHeader('Connection', 'keep-alive');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
  // res.setHeader('Access-Control-Allow-Credentials', 'true');
  const token = req.cookies.accessToken;

  if(!token) return res.status(403).json("Veillez vous connecter d'abord");
  jwt.verify(token, "banking", (err, userInfo) => {
      const { vm_name, vm_image, vm_flavor } = req.body;
      let vm_ram = 0;
      let vm_rom = 0;
      if (vm_flavor == 'm1.xl'){
        vm_ram = 512;
        vm_rom = 5;
      } else if (vm_flavor == 'm1.xxl'){
        vm_ram = 1;
        vm_rom = 10;
      }else if (vm_flavor == 'm1.xxxl'){
        vm_ram = 2;
        vm_rom = 15;
      }else if (vm_flavor == 'm1.xxxxl'){
        vm_ram = 4;
        vm_rom = 20;
      }
      if(err) return res.status(403).json("Token is not valid");
      const sql = "SELECT * FROM vm WHERE vm_name = ?";
      connect.db.query(sql, [vm_name], (error, data) => {
        if (error) return res.status(500).json(error);
        if (data.length) return res.status(409).json("Cette machine existe déjà");
        exec(`microstack launch ${vm_image} --flavor ${vm_flavor} -n ${vm_name}`, (error, stdout, stderr) => {
            if (error) {
              console.error(`Une erreur s'est produite: ${error}`);
              return;
            }else{
              console.log(`${stdout}`);
              setTimeout(() => {
                exec(`microstack.openstack server show -f value -c addresses ${vm_name} | awk -F'[,]' '{print $2}'`, (error, stdout, stderr) => {
                  if (error) {
                    console.log(`Une erreur s'est produite: ${error}`);
                  } else {
                    const sql = "INSERT INTO vm (`vm_name`, `vm_ram`, `vm_rom`, `vm_dist`, `id-client`, `vm_ip`) VALUE (?);"
                    const values = [
                      vm_name,
                      vm_ram,
                      vm_rom,
                      vm_image,
                      userInfo.id,
                      stdout
                    ];
                    connect.db.query(sql, [values], (erro, data) => {
                      if (error) return res.status(500).json(error);
                      return res.status(200).json({message:"La machine a été créée avec succès"});
                    })
                    console.log(`Voici l'adresse IP: ${stdout}`);
                  }
                });
              }, 10000);
    
            }})
      })

  // req.setTimeout(0); // Désactiver le timeout de la requête
  })
  // console.log(vm_flavor);
}

exports.getVM = (req, res) => {
  const token = req.cookies.accessToken;

  if (!token) return res.status(401).json("Not logged in!");

  jwt.verify(token, "banking", (err, userInfo) => {
      if (err) return res.status(403).json("Token is not valid!");
      const q = "SELECT * FROM vm WHERE `id-client` = ?"

     connect.db.query(q, userInfo.id, (err, data) => {
      if (err) return console.log(err);
      return res.status(200).json(data);
      });
  });
}