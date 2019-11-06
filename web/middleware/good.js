const goodOptions = {
    ops: {
        interval: 5000,
    },
    reporters: {
        console: [{
            module: 'good-console',
        }, 'stdout'],
    },
};

module.exports = goodOptions;
