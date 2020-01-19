const joi = require('joi');

const login = joi.object({
  username: joi.string().required(),
  password: joi.string().required(),
  isActive : joi.boolean().default(true, 'Example If Need Default Value')
});

const register = joi.object({
  userId: joi.string(),
  username: joi.string().required(),
  email: joi.string().required(),
  phoneNumber: joi.number().required(),
  password: joi.string().required(),
  role: joi.default('user'),
  isActive : joi.boolean().default(true, 'Example If Need Default Value')
});

const updateUser = joi.object({
  userId: joi.string(),
  username: joi.string().required(),
  email: joi.string().required(),
  phoneNumber: joi.number().required(),
});



module.exports = {
  login,
  register,
  updateUser
};
