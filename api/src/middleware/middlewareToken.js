const axios = require('axios');

const { expressjwt: jwt } = require("express-jwt");
const jwksRsa = require("jwks-rsa");


const authConfig  = require('../auth_config.json');

const middlewareToken = async (req, res, next) => { 

  try{
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

    if (verifyJwt){
        console.log('aca tomo el token ')
        const accessToken = req.headers.authorization.split(" ")[1];
      console.log(accessToken)
        const response = await axios(`https://${authConfig.domain}/userinfo`, {
          headers: {
            authorization: `Bearer ${accessToken}`
          }
        })  
       
        console.log('Datos del middleware: \n', response.data)
   return response.data
      } else console.log('Token no autorizado');
      }catch(error) {
         console.log(error.message);
       }
      
    }

    module.exports = middlewareToken;