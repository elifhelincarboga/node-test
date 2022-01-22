

//#region Modules
const express = require('express');
const db = require('./db/index');
require('dotenv/config');
const measureRoutes = require('./routes/measures');
const bodyParser = require("body-parser");
//#endregion

const app = express();

//#region Configuration
const port = process.env.PORT || 3000;
//#endregion

//#region Routes
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ))
app.use('/measures', measureRoutes)
//#endregion

//#region DB Connection
db.initialize();
//#endregion

// Listen
app.listen(port, () => console.log(`Server is listening at ${port} Port`))


