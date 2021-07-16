const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html")
})

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/views/home.html")
})

app.get("/blog", (req, res) => {
  res.sendFile(__dirname + "/views/blog.html")
})

app.get("/manutencao", (req, res) => {
  res.sendFile(__dirname + "/views/manutencao.html")
})

app.listen(port, () => {
  console.log(`devHouse app listening at http://localhost:${port}`)
})
