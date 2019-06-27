const express = require('express');
const path = require('path');
const log4js = require('log4js');
const logger = require('./middleware/log');
const fallbackHistory = require('./middleware/fallback-history');
const changelogMiddleware = require('./middleware/changelog-handler');
const sentryProxy = require('./middleware/sentry-proxy');

const app = express();
const assetsRoot = './dist';
const port = 8080;

logger.info('Starting server...');

const staticFileMiddleware = express.static(path.resolve(assetsRoot, '../'));

app.use(log4js.connectLogger(logger, { level: log4js.levels.info }));
app.use(changelogMiddleware);
app.use(staticFileMiddleware);
app.use(sentryProxy);
app.use(fallbackHistory);

app.listen(port, () => {
  logger.info('Server is running at http://localhost:' + port);
});
