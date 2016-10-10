(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const shops = require('../routes/shops')
    const employees = require('../routes/employees')
    const donuts = require('../routes/donuts')
    // *** register routes *** //
    app.use('/', routes);
    app.use('/employees', employees);
    app.use('/shops', shops);
    app.use('/donuts', donuts);

  };

})(module.exports);
