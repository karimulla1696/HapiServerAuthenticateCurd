const Boom = require('boom');
const ObjectId = require('mongodb').ObjectID;
const Joi = require('joi');
const homepage = require('../../../../model/homepage');

const handler = async(req, h) => {
    const { id } = req.query;
    const condition = { _id: ObjectId(id) };

    try {
        const homeData = await homepage.findOneHomePage(condition);
        console.log("---",homeData)
        if (!homeData) return Boom.notFound(req.i18n.__('delete')['404']);

        return h.response({
            message: "success",
            data:homeData
        });
    } catch (e) {
        return Boom.badImplementation(e.message);
    }
};


const queryValidate = {
    // trendingStories: Joi.string().required(),
    // title: Joi.string().required(),
    // subtitle: Joi.string().required()
    id:Joi.string().allow("")
};

const response = {
    status: {
        200: { message: Joi.any() ,data: Joi.any()},
        409: { message: Joi.any() }
    }
};

module.exports = {
    handler,
    queryValidate,
    response
};