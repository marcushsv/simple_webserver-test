let alice = {
    user: "Alice", 
    password: "§$Y45/912v"};

let bob = {
    user: "Bob", 
    password: "secret"};    
let carla = {
    user: "Carla", 
    password: "123"};   

let david = {
    user: "David", 
    password: "divaD"}; 


let benutzerliste = [];
benutzerliste.push(alice,bob,carla,david);
console.log(benutzerliste);
console.log("Hallo Welt");

// Benutzer existiert

    

console.log(benutzerExistiert("Alice"));
// anmeldung erfolgreich

console.log(anmeldungErfolgreich("Bob", "secre"));
// Benutzer Hinzufügen
function benutzerHinzufügen(benutzername, passwort){
    let benutzer = {
        user: benutzername, 
        password: passwort};

    benutzerliste.push(benutzer);

}

benutzerHinzufügen("constantin", "konsti");
benutzerHinzufügen("marcus", "Marcini");
console.log(benutzerliste);