const Boom = require('boom');
const ObjectId = require('mongodb').ObjectID;
const Joi = require('joi');
const homepage = require('../../../../model/homepage');

const handler = async(req, h) => {
    try {
//        let dataToUpdate = {
    //         trendingStoriesTxt,
    //         artisansTxt,
    //         boutiquesTxt,
    //         desginersTxt,
    //         newArrivalsTxt,
    //         ourStoriesTxt,
    //         brandsTxt,
    //     metaTags: {
    //
    //     },
    //     pageName,
    //     pageDescription,
    //         socialImages :
    //     {
    //         fb,
    //         twitter,
    //         instagarm
    //     },
    //     trendingStories:[{
    //         blogId: '',
    //         sequenceNo: '',
    //         postDate: '',
    //         description: '',
    //         title: '',
    //         media:
    //         {
    //             type: 1,
    //             webUrl: '',
    //             mobileUrl: '',
    //             altText: '',
    //         },
    // }],
    //        Artisans,
    //        text:[
    //            {
    //                storeId: '',
    //                sequenceNo: '',
    //                storefrontType: '',
    //                sellerType: '',
    //                storeCategory: '',
    //                name: '',
    //                city: '',
    //                country: '',
    //                media:
    //            {
    //                type: 1,
    //                webUrl: '',
    //                mobileUrl: '',
    //                altText: ''
    //            }
    //    }
    // ],
    //        Boutiques:
    //            {
    //                storeId: '',
    //                sequenceNo: '',
    //                storefrontType: '',
    //                sellerType: '',
    //                storeCategory: '',
    //                city: '',
    //                country: '',
    //                name: '',
    //                media:
    //     {
    //         type: 1,
    //         webUrl: '',
    //         mobileUrl: '',
    //         altText: ''
    //     }
    // },
    //        Designers:
    //            [{
    //                storeId: '',
    //                sequenceNo: '',
    //                storefrontType: '',
    //                sellerType: '',
    //                storeCategory: '',
    //                name: '',
    //                city: '',
    //                country: '',
    //                media:
    //                {
    //                    type: 1,
    //                    webUrl: '',
    //                    mobileUrl: '',
    //                    altText: ''
    //                }
    //
    //    }],
    //        newArrivals:
    //     {
    //         parentProductId: '',
    //         childProductId: '',
    //         sequenceNo: '',
    //         storeId: '',
    //         storeName: '',
    //         productName: '',
    //         Price:
    //         {
    //             currency: '',
    //             price: ''
    //         },
    //         media:
    //         {
    //             type: 1,
    //             webUrl: '',
    //             mobileUrl: '',
    //             altText: '',
    //         }
    //     },
    //     ourStories:
    //     {
    //         blogId: '',
    //         sequenceNo: '',
    //         title: '',
    //         media:
    //         {
    //             type: 1,
    //             webUrl: '',
    //             mobileUrl: '',
    //             altText: ''
    //         }
    //     },
    //        Testimonials:
    //     {
    //         testimonialId: '',
    //         sequenceNo: '',
    //         givenBy: '',
    //         designation: '',
    //         testimonialTxt: '',
    //
    //         media:
    //         {
    //             type: 1,
    //             webUrl: '',
    //             mobileUrl: '',
    //             altText: '',
    //         }
    //     },
    //        brands:
    //     {
    //         brandlId: '',
    //         name: '',
    //         sequenceNo: '',
    //         media:
    //         {
    //             type: 1,
    //             webUrl: '',
    //             mobileUrl: '',
    //             altText: ''
    //         }
    //     },
    //        featuredIn:
    //     {
    //         brandlId: '',
    //         sequenceNo: '',
    //         linkedUrl: '',
    //         name: '',
    //         date: '',
    //         media:
    //         {
    //             type: 1,
    //             webUrl: '',
    //             mobileUrl: '',
    //             altText: ''
    //         }
    //     }
    //     }

        // let data = {
        //     trendingStories: {
        //         title: '',
        //         subtitle: '',
        //         stories: [{
        //             title: '',
        //             subtitle: '',
        //             image: {
        //
        //             },
        //             id: '',
        //             seqId: ''
        //         }]
        //     }
        // };

        let data= {
            trendingStories: req.payload.trendingStories ? req.payload.trendingStories : ""
        }
        if(req.payload.id==""||req.payload.id==null||typeof req.payload.id==undefined){
            req.payload.id=new ObjectId()
        }
        let dataUpdate = await homepage.updateOneHomePage({_id:ObjectId(req.payload.id)},{$set:data});

       console.log("===>>",dataUpdate.value);

       return  h.response({message:"data updated"})
    } catch (e) {
        return Boom.badImplementation(e.message);
    }
};


const payload = {
    // trendingStories: Joi.string().required(),
    // title: Joi.string().required(),
    // subtitle: Joi.string().required()
    id:Joi.string().allow(""),
    trendingStories:Joi.object()
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