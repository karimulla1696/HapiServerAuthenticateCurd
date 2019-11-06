const deleteHandler = require('./delete');
const validator = require('../../../middleware');
const validate = require('../../../middleware/authValidation');
const i18n = require('../../../../locales/index');

module.exports = {
    method: 'DELETE',
    path: '/deleteUser',
    options: {
        description: i18n.__('apiDescription')['.deleteUser'],
        tags: ['api', 'user'],
        notes: i18n.__('apiNotes')['.deleteUser'],
        auth: 'jwt2',
        handler: deleteHandler.handler,
        response: deleteHandler.response,

        validate: {
            headers: validate.validateJwtHeader,
            failAction: validator.errorValidator,

        },

    },
};