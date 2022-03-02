const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

const port = process.env.PORT

app.get('/', function (req, res) {
  res.send('Hello World! (By Samarth Gupta)');
})

app.use('/',require("./routes/bfhl"));


app.listen(port,()=>{
  console.log("started server successfully!");
})