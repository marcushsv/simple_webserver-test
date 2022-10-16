/*
Initialisiert die Datenbank, wird aus sqlite3 heraus geladen mit.
.read intitialize_benutzer.sql
*/

-- Tabelle Benutzer erzeugen
CREATE TABLE user (
    id INTEGER PRIMARY KEY AUTOINCRMENT,
    benutzername TEXT NOT NULL,
    passwort TEXT NOT NULL
);

/* Benutzer hinzugefügt*/
INSERT INTO user (benutzername, passwort) VALUES ("Marcus", "moeller");
INSERT INTO user (benutzername, passwort) VALUES ("Max", "tang");
INSERT INTO user (benutzername, passwort) VALUES ("Sang", "tran");
INSERT INTO user (benutzername, passwort) VALUES ("Christoph", "deutscher");
INSERT INTO user (benutzername, passwort) VALUES ("Pedram", "berendjy");
INSERT INTO user (benutzername, passwort) VALUES ("Paul", "sennack");




