
const swaggerJsdoc = require('swagger-jsdoc');

// https://swagger.io/docs/specification/2-0/basic-structure/
const options = {
    swaggerDefinition: {
        info: {
            title: 'Organisaatiorekisteri Backend API',
            version: '1.0.0',
            description: 'Organisaatiorekisteri Backend API documentation',
        },
    },
    // List of files to be processed.
    apis: ['./api/routes.js'],
};

const apiSpecs = swaggerJsdoc(options);

module.exports = apiSpecs;
