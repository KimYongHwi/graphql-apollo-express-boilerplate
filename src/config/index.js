const config = {
  all: {
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || '3000',
    ip: process.env.IP || '0.0.0.0',
  },
};

// eslint-disable-next-line import/no-dynamic-require
const env = require(`./${config.all.env}`);

export default {
  ...config.all,
  ...env.default,
};
