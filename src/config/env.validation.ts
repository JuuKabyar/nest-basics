import Joi, * as joi from 'joi';

export default Joi.object({
  NODE_ENV: Joi.string()
    .valid('development', 'test', 'production')
    .default('development'),
  AUTH_KEY: Joi.string().required(),
  DATABASE_HOST: Joi.string().required(),
  DATABASE_PORT: Joi.number().port().default(5432),
  DATABASE_USER: Joi.string().required(),
  DATABASE_PASSWORD: Joi.string().required(),
  DATABASE_NAME: Joi.string().required(),

  DATABASE_AUTOLOAD: Joi.boolean().default(true),
  DATABASE_SYNC: Joi.boolean().default(true),

  AUTH_FALLBACK_URL: Joi.string().required(),
});
