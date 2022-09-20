const {sampleHandler} = require('../Raw_Node/node_modules/handlers/routeHandlers/sampleHandler');
const{userHandler} = require('../Raw_Node/node_modules/handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user : userHandler, 
};


module.exports = routes;



