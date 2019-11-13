const getHomePage = require('./get');
const i18n = require('../../../../locales/index');

module.exports = {
    method: 'GET',
    path: '/homepage',
    options: {
        description: i18n.__('apiDescription')['.getUser'],
        tags: ['api', 'gethomepage'],
        notes: i18n.__('apiNotes')['.getUser'],
        response: getHomePage.response,
        handler: getHomePage.handler,
        validate: {
            //headers: validate.validateJwtHeader,
            // failAction: validator.errorValidator,
            query:getHomePage.queryValidate
        },

    },
};