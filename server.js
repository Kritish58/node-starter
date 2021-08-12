const express = require('express');
const chalk = require('chalk');
const dotenv = require('dotenv');
const { initLogger } = require('./logs/logger');

const app = express();

//* inits
dotenv.config();
initLogger();

//* url console logger middleware
if (process.env.MODE === 'DEVELOPMENT') {
   app.use((req, res, next) => {
      console.log(req.method + '  => ' + req.protocol + '://' + req.get('Host') + req.originalUrl);
      next();
   });
}

app.listen(process.env.PORT || 3000, () => {
   if (process.env.MODE === 'DEVELOPMENT')
      console.log(chalk.bold.yellow('server is running on port: ', process.env.PORT || 3000));
});
