const axios = require('axios');


// Make a request for a user with a given ID
 
 function getDogs() {
    return axios.get('https://dog.ceo/api/breed/hound/list');
  }

export {
    getDogs
}


