const Joi = require('joi');
const bcrypt = require('bcrypt');
const Boom = require('boom');
const user = require('../../../model/user');
const logger = require('../../commonModel/logger');
require('dotenv').config();

const handler = async(request, h) => {
    try {
        const emailCondition = await user.findOneUser({ emailId: request.payload.emailId });
        if (emailCondition) return Boom.conflict(request.i18n.__('signup')['.email']);

        const mobileCondition = await user.findOneUser({ mobile: request.payload.mobile });
        if (mobileCondition) return Boom.conflict(request.i18n.__('signup')['.mobile']);
        // const saltRound = process.env.SALT_ROUND;

        const salt = await bcrypt.genSalt(10);

        const hashedPassword = await bcrypt.hash(request.payload.password, salt);

        const result = await user.insertOneUser({
            firstName: request.payload.firstName,
            lastName: request.payload.lastName,
            emailId: request.payload.emailId,
            countryCode: request.payload.countryCode,
            mobile: request.payload.mobile,
            password: hashedPassword,
            city: request.payload.city,
            isAdmin: request.payload.isAdmin
        });

        if (result.insertedCount === 1) {
            return h.response({
                message: request.i18n.__('signup')['200'],
            });
        }

        return result;
    } catch (e) {
        logger.error(e.message);
    }
};

const payload = {
    firstName: Joi.string().min(2).max(20).required()
        .description('enter your first name'),
    lastName: Joi.string().min(2).max(20).required()
        .description('enter your last name'),
    emailId: Joi.string().email().lowercase().required()
        .description('enter your email Id'),
    countryCode: Joi.number().positive().integer().required()
        .description('enter your country code'),
    mobile: Joi.number().positive().integer().min(1000000000)
        .max(9999999999)
        .required()
        .description('enter your mobile number'),
    password: Joi.string().min(4).max(20).required()
        .description('enter password'),
    city: Joi.string().min(2).max(20).required()
        .description('enter your current city'),
    isAdmin: Joi.boolean().default(false).required().description('select true for admin'),
};

module.exports = {
    handler,
    payload,
};