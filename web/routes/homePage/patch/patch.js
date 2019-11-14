const Boom = require('boom');
const ObjectId = require('mongodb').ObjectID;
const Joi = require('joi');
const homepage = require('../../../../model/homepage');

const handler = async(req, h) => {
    try {

        let data= req.payload.data;
        console.log(data);

        // if(req.payload.id==""||req.payload.id==null||typeof req.payload.id==undefined){
        //     req.payload.id=new ObjectId()
        // }
        let dataUpdate = await homepage.updateOneHomePage({_id:ObjectId(req.payload.id)},{$set: data});
        console.log("gghsd==>>",req.payload.id)
       console.log("===>>",dataUpdate.value);

       return  h.response({message:"data updated"})
    } catch (e) {
        return Boom.badImplementation(e.message);
    }
};


const payload = {
    id:Joi.string().allow(""),
    data:Joi.object()
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