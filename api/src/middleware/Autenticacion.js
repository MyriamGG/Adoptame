
const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");


const authConfig  = require('../auth_config.json');


/* const Autenticacion = (req, res, next) => {
  console.log("Entrando a Autenticacion") */
const Autenticacion = () => {

 const verifyJwt = jwt({
    secret: jwksRsa.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${authConfig.domain}/.well-known/jwks.json`,
    }),

    audience: authConfig.audience,
    issuer: `https://${authConfig.domain}/`,
    algorithms: ["RS256"],
  });
  return verifyJwt; 
}
module.exports = Autenticacion;
