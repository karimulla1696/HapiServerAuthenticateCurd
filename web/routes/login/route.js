const loginHandler = require('./login');
const validator = require('../../middleware');
const lanValidatore = require('../../middleware/authValidation');
const i18n = require('../../../locales/index');

// const i18n = require('hapi-i18n');

module.exports = {
    method: 'POST',
    path: '/login',
    options: {
        description: i18n.__('apiDescription')['.login'],
        tags: ['api', 'login'],
        auth: false,
        notes: i18n.__('apiNotes')['.login'],
        handler: loginHandler.handler,
        response: loginHandler.response,
        validate: {
            payload: loginHandler.payload,
            headers: lanValidatore.languageValidator,
            failAction: validator.errorValidator,
        },
    },
};