import 'app-module-path/register';
import { createServer } from 'http';
import Promise from 'bluebird';

import config from './config';
import repositories from './repositories';
import { express } from './services';
import server from './server';

const app = express();
const { db, es } = repositories;
const httpServer = createServer(app);

server.applyMiddleware({ app, path: '/graphql' });
server.installSubscriptionHandlers(httpServer);

const startServer = () =>
  httpServer.listen(config.port, config.ip, () => {
    console.log('Express server listening on http://%s:%d, in %s mode', config.ip, config.port, config.env);
  });

Promise.join(db.sequelize.authenticate(), es.ping({ requestTimeout: 1000 }))
  .then(startServer)
  .catch(e => {
    throw e;
  });
