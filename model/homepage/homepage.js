const db = require('../../library/mongodb');
require('dotenv').config();

const collectionName = "homepage";

const findOneHomePage = async (condition) => await db.get()
    .collection(collectionName)
    .findOne(condition);

const updateOneHomePage = async (condition, updateQuery) => await db.get()
    .collection(collectionName)
    .findOneAndUpdate(condition, updateQuery,{returnOriginal:false,upsert:true});


module.exports = {
    findOneHomePage,
    updateOneHomePage,
};