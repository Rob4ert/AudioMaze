'use strict'

const express = require('express');
const app = express();
const port = 3001;
const cors = require('cors');
const router = require('./router');
const db = require('./db/index.js');
const Podcast = require("./db/schema")


app.use(cors())
app.use(express.json());
app.use(router);






(async () => {
  await app.listen(port, () => {
    console.log(`Server is running on ${port}`)
  })
})();
