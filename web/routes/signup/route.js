const signupHandler = require('./signup');
const validator = require('../../middleware');
const lanValidator = require('../../middleware/authValidation');
const i18n = require('../../../locales/index');

// const i18n = require('hapi-i18n');

module.exports = {
    method: 'POST',
    path: '/signup',
    options: {
        description: i18n.__('apiDescription')['.signup'],
        tags: ['api', 'signup'],
        notes: i18n.__('apiNotes')['.signup'],
        auth: false,
        validate: {
            payload: signupHandler.payload,
            headers: lanValidator.languageValidator,
            failAction: validator.errorValidator,
        },
        handler: signupHandler.handler,


    },
};