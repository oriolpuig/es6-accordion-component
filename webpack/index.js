const development = require('./dev');
const production = require('./prod');

console.log('ENVIRONMENT ---> ' + process.env.NODE_ENV);

if (process.env.NODE_ENV === 'development') {
    module.exports = development;
}
else if (process.env.NODE_ENV === 'production') {
    module.exports = production;
}
