// Initialisierung Express.js

const express = require ("express");
const app = express();

// den Ordner public freigeben

app.use(express.static(__dirname + "/public"));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/images"));

// body-parser
app.use(express.urlencoded({extended: true}));

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
let benutzerliste = [
    {user: "Alice", key: "§$Y45/912v"},
    {user: "Bob", key: "secret"},   
    {user: "Carla", key: "123"},  
    {user: "David", key: "divaD"}
];

app.get("/benutzerliste", function(req, res){
    res.render("benutzerliste", {"benutzerliste": benutzerliste});
});
// Loginformular get request
app.get("/loginformular", function(req, res){
    res.sendFile(__dirname + "/views/loginformular.ejs");
});

app.get("/registrierung", function(req, res){
    res.render(__dirname + "/views/registrierung.ejs");
});

app.get("/anmelden", function(req, res){
    res.redirect("/loginformular")
});


// Post-Request

app.post("/loginformular", function(req, res){
    const benutzername = req.body.benutzername; // auch möglich = req["benutzername"]
    const passwort = req.body.passwort;

    //res.send(`Willkommen ${benutzername} ${passwort}`);
    if(anmeldungErfolgreich(benutzername,passwort)){
        res.render("loginErfolgreich", {"benutzername": benutzername} )
    }else {
        res.render("loginFehlgeschlagen", {"benutzername": benutzername})
    }
    

}); 

app.post("/registrierung", function(req, res){
    const benutzername = req.body.benutzername; // auch möglich = req["benutzername"]
    const passwort = req.body.passwort;

    benutzerHinzufügen(benutzername,passwort)
    res.send(`Willkommen ${benutzername} ${passwort}`);
    

}); 

class benutzer {
    constructor(user, key){
        this.user = user;
        this.key = key;
    }
};

function anmeldungErfolgreich (benutzername, passwort){
    for(element of benutzerliste){
        if (element.user == benutzername && element.key == passwort){
            return true;
            };
        
        };
        return false;

    }


function benutzerExistiert(benutzername){
        for(benutzer of benutzerliste){
            if (benutzer.user === benutzername)
            {
                return true;
            }
            
            }
            return false;
    
        }    


function benutzerHinzufügen(benutzername, passwort){
    let benutzer = {
        user: benutzername, 
        key: passwort};

    benutzerliste.push(benutzer);

};



