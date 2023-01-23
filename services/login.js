const axios = require("axios");
require("dotenv").config();

const response = async () => {
  const response = await axios.post(
    "https://api.pontomais.com.br/api/auth/sign_in",
    {
      login: process.env.LOGIN,
      password: process.env.PASSWORD,
    }
  );
  return response.data;
};

module.exports.login = response;
