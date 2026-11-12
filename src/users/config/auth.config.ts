import { registerAs } from '@nestjs/config';

export default registerAs('authConfig', () => ({
  fallbackurl: process.env.AUTH_FALLBACK_URL || 'http://localhost:5000',
  token: {},
}));
