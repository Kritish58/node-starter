const path = require('path');
const fs = require('fs');
const { rootPath } = require('../utils/paths');

//* path of error.log file
const logFilePath = path.join(rootPath, 'logs', 'error.log');

//* init logger function
const initLogger = async () => {
   fs.writeFile(logFilePath, JSON.stringify({ message: 'ERROR LOGGER INITIATED', LEVEL: 'ALERT' }), (err) => {
      if (err) console.log(err);
   });
};

//* error logger function
const errorLogger = ({ message, level }) => {
   fs.appendFile(logFilePath, JSON.stringify({ message, level }), (err) => {
      if (err) console.log(err);
   });
};

module.exports = {
   initLogger,
   errorLogger,
};
