// Initialisierung Express.js

const express = require ("express");
const app = express();
app.use(express.urlencoded({extended: true}));


// den Ordner public freigeben

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/images"));

// Initialisierung der Datenbank

const DATABASE = "user_verwaltung.db";
const db = require("better-sqlite3")(DATABASE);

// initialisierung ejs

app.engine(".ejs", require("ejs").__express);
app.set("view engine", "ejs");

// startet Webserver
app.listen(3000, function(){
    console.log ("server started on port 3000");
    // wäre möglich
});

// verknüpft die Anfrage /hello mit einer entsprechenden Antwort
app.get("/hello", function(req, res){
    res.send("Hello World");
});

app.get("/helloworld", function(req,res) {
    res.sendFile(__dirname + "/views/hello.html");
    
});

app.get("/startseite", function(req,res) {
    res.sendFile(__dirname + "/views/startseite.html");
    
});

app.get("/login", function(req,res) {
    res.render(__dirname + "/views/loginformular.ejs");
    
});
// GET Request benutzerliste 

//benutzerliste hinzufügen
// let benutzerliste = [
//     {user: "Alice", key: "§$Y45/912v"},
//     {user: "Bob", key: "secret"},   
//     {user: "Carla", key: "123"},  
//     {user: "David", key: "divaD"}
// ];

app.get("/benutzerliste", function(req, res){
    const rows = db.prepare("SELECT * FROM user").all();
    console.log(rows);
    res.render("benutzerliste", {"user": rows});
});
// Loginformular get request
app.get("/loginformular", function(req, res){
    res.sendFile(__dirname + "/views/loginformular.ejs");
});

app.get("/registrierung", function(req, res){
    res.render("registrierung.ejs");
});

app.get("/anmelden", function(req, res){
    res.redirect("/login")
});


// Post-Request

app.post("/loginformular", function(req, res){
    const benutzer = req.body.benutzer; // auch möglich = req["benutzername"]
    const password = req.body.password;
    

    //res.send(`Willkommen ${benutzername} ${passwort}`);
    if(anmeldungErfolgreich(benutzer,password)){
        res.render("loginErfolgreich", {"benutzername": benutzer} )
    }else {
        res.render("loginFehlgeschlagen", {"benutzername": benutzer})
    }
    

}); 

app.post("/hinzufuegen", function(req, res){
    const benutzer = req.body.benutzer; // auch möglich = req["benutzername"]
    const password = req.body.password;

    const info = db.prepare("INSERT INTO user(benutzername, passwort) VALUES(?, ?)").run(benutzer, password);
    console.log(info);

    res.redirect("/benutzerliste");
    

}); 

// class benutzer {
//     constructor(benutzername, passwort){
//         this.benutzername = benutzername;
//         this.passwort = passwort;
//     }
// };

function anmeldungErfolgreich (benutzer, password){
    const rows = db.prepare('SELECT * FROM user').all();
    for (element of rows){
        if (element.benutzername == benutzer && element.passwort == password){
            return true;
            };
            
    };
        return false;

}


function benutzerExistiert(benutzer){
        for(element of user){
            if (element.benutzername === benutzer)
            {
                return true;
            }
            
            }
            return false;
    
        }    



