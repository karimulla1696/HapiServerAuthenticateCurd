const bcrypt = require('bcrypt');
const Joi = require('joi');
const jwt = require('jsonwebtoken');
const Boom = require('boom');
const user = require('../../../model/user');
require('dotenv').config();

const handler = async(request, h) => {

    try {
        const userData = await user.findOneUser({ $or: [{ emailId: request.payload.value }, { mobile: request.payload.value }] });

        if (!userData) {
            return h.response({ message: request.i18n.__('login')['404'] });
        }

        const passwordCheck = await bcrypt.compare(request.payload.password, userData.password);

        if (!passwordCheck) {
            return h.response({ message: request.i18n.__('password')['404'] });
        }

        const secretKey = process.env.SECRET_KEY;
        const token = jwt.sign({ _id: userData._id, isAdmin: userData.isAdmin }, secretKey);

        return h.response({
            message: request.i18n.__('login')['200'],
            data: {
                token,
            },
        });
    } catch (e) {
        return Boom.badImplementation(e.message);
    }
};

const emailPayload = Joi.string().email().lowercase().required();
const mobilePayload = Joi.number().positive().integer().min(1000000000)
    .max(9999999999)
    .required();

const payload = {
    select: Joi.number().valid(1, 2).description('select 1 for emailId or 2 for mobile').required(),
    value: Joi.alternatives().when('select', {
        is: 1,
        then: emailPayload,
        otherwise: mobilePayload,
    }),
    password: Joi.string().min(4).max(20).required()
        .description('enter your password'),
};


const response = {
    status: {
        404: { message: Joi.any().default('does not exist'), data: Joi.any() },
        200: { message: Joi.any().default('successfull !!!!!!!'), data: Joi.any() }
    }
};

module.exports = {
    handler,
    payload,
    response
};