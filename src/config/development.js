export default {
  elasticsearch: `${process.env.ES_HOST}:${process.env.ES_PORT}`,
  sequelize: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    options: {
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      dialect: 'mysql',
      timezone: '+09:00',
      logging: false,
    },
  },
};
