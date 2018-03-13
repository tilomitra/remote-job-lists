// next.config.js
const withCSS = require('@zeit/next-css');
const getRoutes = require('./routes/routeMap')();
var o = withCSS()
o.exportPathMap = getRoutes;
module.exports = o;