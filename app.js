const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const routeDevs = require("./routes");
const routeProduto = require("./routes/produtos");
const rotasUsuarios = require("./routes/usuarios");
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));
app.use(methodOverride("_method"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("public"));

app.use(routeDevs);
app.use(routeProduto);
app.use(rotasUsuarios);

app.listen(port, () => {
  console.log(`devHouse app listening at http://localhost:${port}`);
});
