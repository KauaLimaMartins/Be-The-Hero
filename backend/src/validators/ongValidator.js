const { Segments, Joi } = require("celebrate");

module.exports = {
  [Segments.BODY]: Joi.object().keys({
    name: Joi.string()
      .required()
      .min(2),
    email: Joi.string()
      .required()
      .email(),
    whatsapp: Joi.string()
      .required()
      .min(10)
      .max(11),
    city: Joi.string().required(),
    uf: Joi.string()
      .required()
      .length(2)
  })
};
