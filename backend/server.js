const express = require("express");
const connectDB = require("./config/db");
const port = 5000;


//connexion à la DB
connectDB();

const app = express();

// Middleware qui permet de traiter les données de la request
app.use(express.json());
app.use(express.urlencoded({ extended: false}));

app.use("/post", require("./routes/post.routes"));


//lancer le serveurkk
app.listen(port, () => console.log("Le serveur a démarré au port " + port))