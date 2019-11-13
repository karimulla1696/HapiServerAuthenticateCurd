const patch = require('./patch');
const i18n = require('../../../../locales/index');

module.exports = {
    method: 'PATCH',
    path: '/homepage',
    options: {
        description: i18n.__('apiDescription')['.updateUser'],
        notes: i18n.__('apiNotes')['.updateUser'],
        tags: ['api', 'patchhomepage'],
        handler: patch.handler,
        response: patch.response,
        validate: {
            payload: patch.payload,
            //headers: validate.validateJwtHeader,
            // failAction: validator.errorValidator,
        },

    },
};