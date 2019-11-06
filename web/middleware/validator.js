const errorValidator = (request, h, error) => {
    if (error.isJoi) {
        return h.response(error.details[0].message).takeover();
    }
    return h.response(error).takeover();
};

module.exports = errorValidator;
