'use strict';

const app = require('./app');
const config = require('./config/config');

app.listen(config.port, () => {
    console.log('GraphQL Server Running at http://127.0.0.1:' + config.port );
});
