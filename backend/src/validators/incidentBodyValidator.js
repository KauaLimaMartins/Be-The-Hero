const { Segments, Joi } = require("celebrate");

module.exports = {
  [Segments.BODY]: Joi.object().keys({
    title: Joi.string()
      .required()
      .min(4),
    description: Joi.string()
      .required()
      .min(10),
    value: Joi.number().required()
  })
};
