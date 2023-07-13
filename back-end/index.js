const express = require('express');
const connect = require("./connect");
const routerAuth = require("./routes/auth")
const cors = require("cors");
const cookieParser = require('cookie-parser');
const routerVM = require("./routes/VM");

// Créer une instance de l'application Express
const app = express();
app.use(express.json());
//connection à la base de donnée
connect.db.connect((error)=>{
    if(error){
        return console.log(error);
    }
    console.log("database connected")
})
app.use(cors({
    origin: "http://localhost:3000",
    credentials: true
}));
// Route racineg
app.get('/', (req, res) => {
  res.send('Bienvenue sur mon projet Node.js !');
});

// route pour la création d'un compte
app.use(cookieParser());
app.use("/api/auth", routerAuth);
app.use("/api/VM", routerVM);

// Démarrer le serveur
const port = 5005;
app.listen(port, () => {
  console.log(`Le serveur écoute sur le port ${port}`);
});
