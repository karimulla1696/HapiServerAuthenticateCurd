const Boom = require('boom');
const ObjectId = require('mongodb').ObjectID;
const Joi = require('joi');
const user = require('../../../../model/user');


const handler = async(req, h) => {
    const { _id } = h.request.auth.credentials;
    const condition = { _id: ObjectId(_id) };

    try {

        const userData = await user.findOneUser(condition);
        if (!userData) return Boom.notFound(req.i18n.__('delete')['404']);

        return h.response({
            message: userData,
        });
    } catch (e) {
        return Boom.badImplementation(e.message);
    }
};

const response = {
    status: {
        404: { message: Joi.any() }
    }
};

module.exports = {
    handler,
    response
};