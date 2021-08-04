const express = require("express");
const path = require("path");

const depoimentos = require("../models/depoimentos");

const routes = express.Router();

routes.get("/", (req, res) => {
  res.render("index", { title: "Sua empresa vai ser incrível" });
});

routes.get("/home", (req, res) => {
  res.render("home");
});

routes.get("/depoimentos", (req, res) => {
  res.render("depoimentos", { depoimentos });
});

routes.get("/contato", (req, res) => {
  res.render("contato");
});

routes.get("/blog", (req, res) => {
  res.render("blog");
});

routes.get("/manutencao", (req, res) => {
  res.render("manutencao");
});

module.exports = routes;
