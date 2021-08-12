const express = require('express');
const chalk = require('chalk');
const dotenv = require('dotenv');
const { initLogger } = require('./logs/logger');

const app = express();

//* inits
dotenv.config();
initLogger();

app.listen(process.env.PORT || 3000, () => {
   if (process.env.MODE === 'DEVELOPMENT')
      console.log(chalk.bold.yellow('server is running on port: ', process.env.PORT || 3000));
});
