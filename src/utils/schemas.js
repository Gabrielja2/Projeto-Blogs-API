const Joi = require('joi');

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
});

const userSchema = Joi.object({
    displayName: Joi.string().min(8).required(),
    password: Joi.string().min(6).required(),
    email: Joi.string().email().required(),
    image: Joi.string().min(10),
});

const postSchema = Joi.object({
    title: Joi.string().required(),
    content: Joi.string().required(),
    categoryIds: Joi.array().required(),
});

module.exports = {
loginSchema,
userSchema,
postSchema,
};