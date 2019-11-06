const mongo = require('mongodb').MongoClient;
const logger = require('../../web/commonModel/logger');
require('dotenv').config();

const databaseName = process.env.DATABASE_NAME;
const mongoUrl = process.env.MONGO_URL;

let db;
async function getConn() {
    try {
        const client = await mongo.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
        db = client.db(databaseName);
        logger.info('connected to database.....');

        return db;
    } catch (e) {
        logger.error(e.message);
    }
};

const get = () => db;

module.exports = { getConn, get };