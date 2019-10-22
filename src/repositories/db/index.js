import _ from 'lodash/fp';
import Sequelize from 'sequelize';
import config from 'config';
import models from './models';

const sequelize =
  config.env === 'production'
    ? new Sequelize(config.sequelize.options)
    : new Sequelize(
        config.sequelize.database,
        config.sequelize.username,
        config.sequelize.password,
        config.sequelize.options,
      );

const db = _.reduce((acc, m) => {
  const model = m(Sequelize.Model, sequelize, Sequelize.DataTypes);
  return { ...acc, [model.name]: model };
}, {})(models.getModels());

Object.keys(db).forEach(key => {
  if (db[key].associate) db[key].associate(db);
});

export default { ...db, sequelize };
