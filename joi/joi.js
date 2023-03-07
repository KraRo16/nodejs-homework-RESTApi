const Joi = require("joi");

const addContactJoi = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^\+?[\d\s()-]+$/)
    .required(),
});
const updateContactJoi = Joi.object({
  name: Joi.string().min(2),
  email: Joi.string().email(),
  phone: Joi.string().pattern(/^\+?[\d\s()-]+$/),
});

module.exports = { addContactJoi, updateContactJoi };
