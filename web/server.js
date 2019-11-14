const Hapi = require('hapi');
const Inert = require('inert');
const Vision = require('vision');
const db = require('../library/mongodb');
const middleware = require('./middleware');
const logger = require('./commonModel/logger');
require('dotenv').config();

const portNumber = process.env.PORT;
const hostName = process.env.HOST;
const server = new Hapi.server({
    port: portNumber,
    host: hostName,
    routes: {
        cors: {
            origin: ['*'],
            additionalHeaders: ['lan', 'cache-control', 'x-requested-with', 'authorization', 'refToken', 'token', 'Access-Control-Allow-Origin']
            // additionalHeaders: ['lan']
        }
    }
});



exports.init = async() => {
    await server.register([{
        plugin: require('good'),
        options: middleware.goodOptions,
    },
        {
            plugin: require('hapi-i18n'),
            options: middleware.localizationOptions,
        },
        Inert,
        Vision,
        {
            plugin: require('hapi-swagger'),
            options: middleware.swaggerOptions,

        }, {
            plugin: require('./middleware/auth'),

        },
    ]);

    await server.route(require('./routes'));

    await server.initialize();
    return server;
};

exports.start = async() => {
    try {
        await db.getConn();
        await server.start();
        logger.info(`server is running at ${server.info.uri}`);
    } catch (e) {
        logger.error(e.message);
    }
};

exports.stop = async() => {
    try {
        await server.stop();
        logger.info('server stopped');
    } catch (e) {
        logger.error(e.message);
    }
};