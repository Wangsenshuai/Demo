const fs = require('fs');
const path = require('path');

const assetsRoot = './dist';
const changelogFile = path.join(assetsRoot, 'changelog.html');

function changelogMiddleware(req, res, next) {
  const url = req.originalUrl;
  const isChangelog = /^\/[a-z-]+\/changelog$/.test(url);
  if (isChangelog) {
    fs.readFile(changelogFile, (err, data) => {
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

module.exports = changelogMiddleware;
