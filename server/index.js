require('dotenv').config()
const express = require('express')
const { json } = require('body-parser')
const app = express()
const massive = require('massive')
const cors = require('cors')

app.use(json())
app.use(cors())

massive(process.env.CONNECTION_STRING)
  .then(db => {
    app.set("db", db);
  })
  .catch(err => console.log("Massive", err));

app.listen(process.env.SERVER_PORT, () => console.log(`listening on port ${process.env.SERVER_PORT}`))