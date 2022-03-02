const express = require('express')
const app = express()
app.use(express.json());

const port = process.env.PORT

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.use('/',require("./routes/bfhl"))


app.listen(port,()=>{
  console.log("started server successfully!");
})