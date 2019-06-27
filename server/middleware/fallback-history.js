const fs = require('fs');
const path = require('path');

const assetsRoot = './dist';
const crmHtmlFile = path.join(assetsRoot, 'index.html');

function fallbackHistory(req, res, next) {
  const url = req.originalUrl;
  if (!url.startsWith('/api') && !url.endsWith('favicon.ico')) {
    fs.readFile(crmHtmlFile, (err, data) => {
      if (err) {
        return next(err);
      }
      res.set('content-type', 'text/html');
      res.send(data);
      res.end();
    });
  } else {
    next();
  }
}

module.exports = fallbackHistory;
