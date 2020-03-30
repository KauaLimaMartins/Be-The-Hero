const { Segments, Joi } = require("celebrate");

module.exports = {
  [Segments.QUERY]: Joi.object().keys({
    page: Joi.number()
  })
};
