var _ = require('lodash');

//default config object for api
var config = {
    dev: 'development',
    test: 'testing',
    prod: 'production',
    port: process.env.PORT || 3000
};

//check to see if NODE_ENV was set , if not then set it to dev
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;

config.env = process.env.NODE_ENV;

var envConfig;

try{
    envConfig = require('./' + config.env);

    envConfig = envConfig || {};
}catch(err){
    envConfig = {};
}

module.exports = _.merge(config, envConfig);