const db = require('../../library/mongodb');
require('dotenv').config();

const collectionName = process.env.COLLECTION_NAME;

const deleteOneUser = async (condition) => await db.get()
        .collection(collectionName)
        .deleteOne(condition);

const findOneUser = async (condition) => await db.get()
    .collection(collectionName)
    .findOne(condition);

const updateOneUser = async (condition, updateQuery) => await db.get()
    .collection(collectionName)
    .updateOne(condition, updateQuery);

const insertOneUser = async (condition) => await db.get()
    .collection(collectionName)
    .insertOne(condition);

module.exports = {
    deleteOneUser,
    findOneUser,
    updateOneUser,
    insertOneUser,
};