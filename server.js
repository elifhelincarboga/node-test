

// Modules
const express = require('express');
const db = require('./api/db/index');
require('dotenv/config');
const measureRoutes = require('./api/routes/measures');
const siteRoutes = require('./api/routes/sites');
const bodyParser = require("body-parser");
const cors = require('cors');
const morgan = require('morgan');
const compression = require('compression');
const path = require('path')

const app = express();

// Configuration
const port = process.env.PORT || 3000;
const compressionConfig = {
    level: 6,
    threshold: 100 * 1000,
    filter: (req, res) => {
        if (req.headers['x-no-compression']) {
            return false
        }
        return compression.filter(req, res)
    }
}

// Middlewares
app.use(compression(compressionConfig));
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( { extended: true } ))

// Routes
app.use('/measures', measureRoutes)
app.use('/sites', siteRoutes)

app.get('/reporter', (req, res) => {
    res.sendFile(path.resolve(__dirname, './reporter', 'dist/bundle.js'));
});

app.use(express.static(path.join(__dirname, './dashboard/build')));
['/dashboard', '/dashboard/*'].forEach(p => {
  app.get(p, (req, res) => {
    res.sendFile(path.resolve(__dirname, './dashboard', 'build', 'index.html'));
  });
});

// DB Connection
db.initialize();

// Listen
app.listen(port, () => console.log(`Server is listening at ${port} Port`))


