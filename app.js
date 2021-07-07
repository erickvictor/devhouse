const express = require("express")
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Bem Vindo devHouse!")
})

app.get("/manutencao", (req, res) => {
  res.sendFile(__dirname + "/views/manutencao.html")
})

app.listen(port, () => {
  console.log(`devHouse app listening at http://localhost:${port}`)
})
