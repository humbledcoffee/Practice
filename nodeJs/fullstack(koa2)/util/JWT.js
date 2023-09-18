const jwt = require("jsonwebtoken");
const secret = "lidong";
const JWT = {
  generate(value, date) {
    return jwt.sign(value, secret, { expiresIn: date });
  },
  verify(token) {
    try {
      return jwt.verify(token, secret);
    } catch (error) {
      return false;
    }
  },
};
module.exports = JWT;
