import express from 'express';
import Youch from 'youch';
import * as Sentry from '@sentry/node';
import { resolve } from 'path';
import 'express-async-errors';

import routes from './routes';
import sentryConfig from './config/sentry';

import './database';

class App {
  constructor() {
    this.server = express();

    Sentry.init(sentryConfig);

    this.server.use(Sentry.Handlers.requestHandler());
    this.middlewares();
    this.routes();
    this.server.use(Sentry.Handlers.errorHandler());

    this.exceptionHandler();
  }

  middlewares() {
    this.server.use(express.json());
    this.server.use(
      '/files',
      express.static(resolve(__dirname, '..', 'tmp', 'uploads'))
    );
  }

  routes() {
    this.server.use(routes);
  }

  exceptionHandler() {
    this.server.use(async (err, req, res, next) => {
      const errors = await new Youch(err, req).toJSON();

      return res.status(500).json(errors);
    });
  }
}

export default new App().server;
