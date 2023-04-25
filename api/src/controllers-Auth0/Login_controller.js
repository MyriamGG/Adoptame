
 const Login = (req, res, next) => {
  console.log(req.oidc.user);
  res.send(req.oidc.user)
  res.render('index', {
    title: 'Auth0 Webapp sample Nodejs',
    isAuthenticated: req.oidc.isAuthenticated()
  });
}

const profile = (req, res, next) => {
    console.log(req.oidc.user);
    res.send(req.oidc.user)
  res.render('profile', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Profile page'
  });
}

const home =  (req, res) => {
  console.log("Home!!!");

  res.send("Pantalla de Inicio");
}

const miPerfil = (req, res) => {
  console.log("Mi Perfil!!!", req.cookies);

  res.send("Bienvenido" + req.cookies);
}

module.exports = {
    Login,
    profile,
    home,
    miPerfil
}