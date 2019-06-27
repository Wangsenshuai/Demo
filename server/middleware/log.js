const log4js = require('log4js');
log4js.configure({
  appenders: {
    everything: {
      type: 'file',
      filename: 'logs/ex_fe_oa_server_logs.log',
      maxLogSize: 10485760,
      backups: 10,
      compress: true,
      keepFileExt: true,
    },
  },
  categories: {
    default: { appenders: ['everything'], level: 'info' },
  },
});
const logger = log4js.getLogger('default');
module.exports = logger;
