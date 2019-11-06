const Boom = require('boom');
const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);
const { ObjectId } = require('mongodb');
const i18n = require('../../../../locales');

const user = require('../../../../model/user');

const handler = async(req, h) => {
    const { _id } = h.request.auth.credentials;
    const condition = {
        _id: ObjectId(_id),
    };

    try {
        const result = await user.deleteOneUser(condition);
        if (result.result.n > 0) {
            return h.response({
                message: req.i18n.__('delete')['200'],
            });
        }

        return Boom.notFound(req.i18n.__('delete')['404']);
    } catch (e) {
        return Boom.badImplementation(e.message);
    }
};

const response = {
    status: {
        200: { message: Joi.any().description('successful bro').example(i18n.__('delete')['200']), data: Joi.any() },
        404: { message: Joi.any() }
    }
};


module.exports = {
    handler,
    response
};