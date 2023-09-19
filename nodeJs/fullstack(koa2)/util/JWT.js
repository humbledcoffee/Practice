import jwt from "jsonwebtoken";
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
export default JWT;
