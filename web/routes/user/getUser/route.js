const getHandler = require('./get');
const validator = require('../../../middleware');
const validate = require('../../../middleware/authValidation');
const i18n = require('../../../../locales/index');

module.exports = {
    method: 'GET',
    path: '/getUser',
    options: {
        description: i18n.__('apiDescription')['.getUser'],
        tags: ['api', 'user'],
        notes: i18n.__('apiNotes')['.getUser'],
        auth: 'jwt2',
        response: getHandler.response,
        handler: getHandler.handler,
        validate: {
            headers: validate.validateJwtHeader,
            failAction: validator.errorValidator,
        },

    },
};