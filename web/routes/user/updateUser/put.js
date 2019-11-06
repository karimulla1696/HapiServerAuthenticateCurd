const Boom = require('boom');
const ObjectId = require('mongodb').ObjectID;
const Joi = require('joi');
const user = require('../../../../model/user');

const handler = async(req, h) => {
    const { _id } = h.request.auth.credentials;
    const condition = {
        _id: ObjectId(_id),
    };

    try {
        const updateQuery = {
            $set: {
                city: req.payload.city,
            },
        };
        const result = await user.updateOneUser(condition, updateQuery);
        if (result.modifiedCount === 1) { return h.response({ message: req.i18n.__('update')['200'] }); }
        if (result.modifiedCount === 0 && result.matchedCount === 1) { return h.response({ message: req.i18n.__('update')['409'] }) }
        return Boom.badRequest('something went wrong');
    } catch (e) {
        return Boom.badImplementation(e.message);
    }
};

const payload = {
    city: Joi.string().min(2).max(15).required()
        .description('enter your new city'),
};

const response = {
    status: {
        200: { message: Joi.any() },
        409: { message: Joi.any() }
    }
};

module.exports = {
    handler,
    payload,
    response
};