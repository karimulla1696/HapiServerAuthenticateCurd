const errorValidator = require('./validator');
const goodOptions = require('./good');
const swaggerOptions = require('./swagger');
const authStrategy = require('./auth');
const localizationOptions = require('./localization');

module.exports = {
    errorValidator,
    goodOptions,
    swaggerOptions,
    authStrategy,
    localizationOptions,
};