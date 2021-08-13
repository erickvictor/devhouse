const express = require("express");
const path = require("path");
const routeDevs = require("./routes");
const routeProduto = require("./routes/produtos")
const app = express();
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.resolve("views"));

app.use(express.static("public"));
app.use(routeDevs);
app.use(routeProduto);

app.listen(port, () => {
  console.log(`devHouse app listening at http://localhost:${port}`);
});
