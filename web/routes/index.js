const signup = require('./signup');
const login = require('./login');
const user = require('./user');

const allRoutes = [].concat(signup, login, user);
module.exports = allRoutes;