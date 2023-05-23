const connect = require("../connect");
const crypto = require('crypto');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.register = (req, res)=>{
    //check if user already exist
    console.log
    const { nom, prenom, email, adresse, tel, password, confirmPassword} = req.body;
    if (password !== confirmPassword){
        return res.status(409).json("Password does not match");
    }
    const command = "SELECT * FROM client WHERE email = ?";
    connect.db.query(command, [email], (error, data) => {
        if (error) return res.status(500).json(error);
        if (data.length) return res.status(409).json("This email already exist");
        const hashPassword = crypto.createHash('sha256').update(password).digest('hex');
        const command = "INSERT INTO client (`nom`, `prenom`, `email`, `adresse`, `tel`, `password`) VALUE (?);";
        const values = [nom, prenom, email, adresse, tel, hashPassword];
        connect.db.query(command, [values], (error, data) => {
            if (error) return res.status(500).json(error);
            return res.status(200).json({message:"Users has been created"});
        });
})
}


exports.login = (req, res)=>{
    const email = req.body.email;
    const command = "SELECT * FROM client WHERE email = ?";
    connect.db.query(command, [email], (error, data) => {
        if(error) return res.status(500).json(error);
        if(!data.length) return res.status(400).json("Email");
        const hash = crypto.createHash('sha256').update(req.body.password).digest('hex');
        if (hash !== data[0].password) return res.status(400).json("mot de passe incorrect");
        
        const token = jwt.sign({id:data[0].ID_Client}, "banking");
        const { password, ...other} = data[0];
        res.cookie("accessToken", token, {
            httpOnly: true,
            secure:false
        }).status(200).json(other);
    })
}


exports.logout = (req, res)=>{
    res.clearCookie("accessToken", {
        Secure:true,
        sameSite:"none"
    }).status(200).json("User has been logout");
}