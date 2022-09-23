<<<<<<< HEAD

const crypto = require('crypto');
const utilities = {};

=======
const crypto = require('crypto');
const utilities = {};
const environments = require('./environments');
>>>>>>> b81abe2 (fgfg)
utilities.parseJSON = (jsonString) => {
    let output;
    try {
        output = JSON.parse(jsonString);
    }
    catch{
        output = {};
    }
    return output;
};

utilities.hash = (str) => {
<<<<<<< HEAD

    if(typeof str === 'string' && str.length > 0) {
      const hash = crypto
      .createHmac('sha256', ueruhrunfrufbb)
      .update(str)
      .digest(hex);
      return hash;
    }
      else {
        return false;

      }
    
    };
    
=======
    if(typeof str === 'string' && str.length > 0) {
      const hash = crypto
      .createHmac('sha256', environments.secretKey)
      .update(str)
      .digest(hex);
      return hash;
    }     
        return false;      
    
    };    
>>>>>>> b81abe2 (fgfg)

module.exports = utilities;
