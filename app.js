"use strict";
require("dotenv").config();

const path = require("path");
const AutoLoad = require("@fastify/autoload");
const { login } = require("./services/login");

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {};

module.exports = async function (fastify, opts) {
  // Place here your custom code!

  // add loop to date and time when the server starts and repeat every 5 seconds on timezone 00:00 with moment.js
  setInterval(async () => {
    const moment = require("moment-timezone");
    const date = moment().tz("America/Manaus").format("YYYY-MM-DD HH:mm:ss");
    if (date === "2023-01-22 21:30:50") {
      const loginData = await login();
      console.log(loginData);
    }
    console.log(date);
  }, 1000);

  // Do not touch the following lines

  // This loads all plugins defined in plugins
  // those should be support plugins that are reused
  // through your application
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "plugins"),
    options: Object.assign({}, opts),
  });

  // This loads all plugins defined in routes
  // define your routes in one of these
  fastify.register(AutoLoad, {
    dir: path.join(__dirname, "routes"),
    options: Object.assign({}, opts),
  });
};
