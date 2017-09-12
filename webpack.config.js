/**
 * @author: @JasonHodges
 */

switch(process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./config/webpack.prod.babel')({env: 'production'});
    break;
  case 'test':
  case 'testing':
    module.exports = require('./config/webpack.test')({env: 'test'});
    break;
  case 'dev':
  case 'development':
   default: module.exports = require('./config/webpack.dev.babel')({env: 'development'});
}
