import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import config from 'config';

export default () => {
  const app = express();

  app.use(helmet());
  app.use(morgan('dev'));
  app.use(
    bodyParser.urlencoded({
      extended: false,
    }),
  );
  app.use(
    bodyParser.json({
      limit: '100mb',
    }),
  );
  app.use(cookieParser());

  if (config.env === 'development' || config.env === 'test') {
    app.all('/*', (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
      res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

      // intercepts OPTIONS method
      if (req.method === 'OPTIONS') {
        // respond with 200
        res.status(200).end();
      } else {
        // move on
        next();
      }
    });
  }

  return app;
};
