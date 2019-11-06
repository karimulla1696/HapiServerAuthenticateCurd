const putHandler = require('./put');
const validate = require('../../../middleware/authValidation');
const validator = require('../../../middleware');
const i18n = require('../../../../locales/index');

module.exports = {
    method: 'PATCH',
    path: '/updateUser',
    options: {
        description: i18n.__('apiDescription')['.updateUser'],
        notes: i18n.__('apiNotes')['.updateUser'],
        tags: ['api', 'user'],
        auth: 'jwt2',
        handler: putHandler.handler,
        response: putHandler.response,
        validate: {
            payload: putHandler.payload,
            headers: validate.validateJwtHeader,
            failAction: validator.errorValidator,
        },

    },
};