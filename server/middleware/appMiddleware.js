const morgan = require('morgan');
const bodyParser = require('body-parser');

module.exports = function(app){
    app.use(morgan('dev'));
    app.use(bodyParser({ extended: true}));
    app.use(bodyParser.json());
}