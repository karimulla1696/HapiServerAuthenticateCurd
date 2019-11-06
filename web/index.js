const server = require('./server');
const logger = require('../web/commonModel/logger');

// start();
const start = async() => {
    try {
        await server.init();
        await server.start();
    } catch (e) {
        logger.error(e.message);
    }
};

start();