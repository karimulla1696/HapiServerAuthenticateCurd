const signup = require('./signup');
const login = require('./login');
const user = require('./user');
const homepage = require('./homePage');

console.log("-----")
const allRoutes = [].concat(signup, login, user, homepage);
module.exports = allRoutes;