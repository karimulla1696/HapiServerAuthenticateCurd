const Joi = require('joi');

// for validate jwt strategy
const validateJwt = async (decoded, req, h) => ({ isValid: true });

const languageValidator = Joi.object({
    language: Joi.string().default('en').valid('en', 'ru', 'ar').description('en - English')
        .required(),
}).unknown();

const validateJwtHeader = Joi.object({
    authorization: Joi.string().required().description('header authorization'),
    language: Joi.string().default('en').valid('en', 'ru', 'ar').description('en - English')
        .required(),
}).unknown(); // validate the auth token present in the header

module.exports = {
    validateJwt,
    validateJwtHeader,
    languageValidator,
};
