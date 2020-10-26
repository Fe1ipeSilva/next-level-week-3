// importar dependencias
const express = require("express");
const path = require("path");
const pages = require("./pages.js");

// iniciando o express
const server = express();

server
  .use(express.urlencoded({ extended: true }))
  .use(express.static("public"))
  .set("views", path.join(__dirname, "views"))
  .set("view engine", "hbs");

// criar uma rota
server.get("/", pages.index);
server.get("/orphanage", pages.orphanage);
server.get("/orphanages", pages.orphanages);
server.get("/create-orphanage", pages.createOrphanage);
server.post("/save-orphanage", pages.saveOrphanage);

// ligar servidor
server.listen(5000);
