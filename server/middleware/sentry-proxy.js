// 公司的sentry上报地址仅支持http协议，对https站点来说无法直接上报，需要服务端转发 http://ad.sentry.m.byted.org
const request = require('request');

function sentryProxy(req, res, next) {
  const targetHost = 'http://ad.sentry.m.byted.org';
  const apiUrl = req.originalUrl;
  const apiPrefix = /\/\w+\/sentry\/log\//;
  if (apiPrefix.test(apiUrl)) {
    const target = targetHost + apiUrl.replace(apiPrefix, '/');
    req.pipe(request(target)).pipe(res);
  } else {
    next();
  }
}
module.exports = sentryProxy;
