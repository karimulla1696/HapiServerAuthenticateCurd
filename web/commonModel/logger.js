require('dotenv').config();
const { createLogger, format, transports } = require('winston');

const levelName = process.env.LEVEL;
const logger = createLogger({
    level: levelName,
    format: format.combine(
        format.colorize(),
        format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss',
        }),
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
    ),
    transports: [new transports.Console()],
});

module.exports = logger;
