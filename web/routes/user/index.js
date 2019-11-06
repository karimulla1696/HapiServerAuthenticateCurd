const deleteUser = require('./deleteUser');
const getUser = require('./getUser');
const updateUser = require('./updateUser');

const user = [].concat(deleteUser, getUser, updateUser);
module.exports = user;
