(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const shops = require('../routes/shops')
    const employees = require('../routes/employees')
    const donuts = require('../routes/donuts')
    const cookieSession = require('cookie-session');
    // *** register routes *** //
    app.use(cookieSession({
      name: 'session',
      keys: [process.env.SECRET_KEY1, process.env.SECRET_KEY2]
    }));
    app.use('/', routes);
    app.use('/employees', employees);
    app.use('/shops', shops);
    app.use('/donuts', donuts);

  };

})(module.exports);
