const url = require('url');
const { StringDecoder } = require('string_decoder');
const routes = require('../routes');
<<<<<<< HEAD

const { notFoundHandler } = require('../node_modules/handlers/routeHandlers/notFoundHandler');

const { notFoundHandler} = require('../node_modules/handlers/routeHandlers/notFoundHandler');


=======
<<<<<<< HEAD
const { notFoundHandler } = require('../node_modules/handlers/routeHandlers/notFoundHandler');
=======
const { notFoundHandler} = require('../node_modules/handlers/routeHandlers/notFoundHandler');

>>>>>>> b81abe2 (fgfg)
>>>>>>> 86cfe6fac0711d95c1eeecdaaf0a8e547b3e6b24
const {parseJSON}  = require('../helpers/utilities');
const handler = {};
handler.handleReqRes = (req, res) => {
    
    const parsedUrl = url.parse(req.url, true);
    const path = parsedUrl.pathname;
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    const method = req.method.toLowerCase();
    const queryStringObject = parsedUrl.query;
    const headersObject = req.headers;

    const requestProperties = {
        parsedUrl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersObject,
    };
    const decoder = new StringDecoder('utf-8');
    let realData = '';

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHandler;
    
    requestProperties.body = parseJSON(realData);

    chosenHandler(requestProperties, (statusCode, payload) => {
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);  
        res.setHeader('Content-Type', 'application/json');     
        res.writeHead(statusCode);
        res.end(payloadString);
    });
    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });
    req.on('end', () => {
        realData += decoder.end();

        console.log(realData);
       
        res.end('Hello world');
    });
};
module.exports = handler;
