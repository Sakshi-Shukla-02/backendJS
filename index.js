
require('dotenv').config()

const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("Hey i am Twitter");
})

app.get('/instagram',(req,res)=>{
    res.send("Hey How you are doing ? From instagram")
})

app.get('/snapchat',(req,res)=>{
    res.send("Hey! I am snapchat");
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})