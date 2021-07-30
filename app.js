const express = require("express")
const routeDevs = require('./routes')
const app = express()
const port = 3000

app.use(express.static('public'))
app.use(routeDevs)

app.listen(port, () => {
  console.log(`devHouse app listening at http://localhost:${port}`)
})
