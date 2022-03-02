const express = require('express')
const app = express()
app.use(express.json());

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/',require("./routes/bfhl"))

console.log("started server successfully!");
app.listen(3000)