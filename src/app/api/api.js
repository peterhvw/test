const axios = require('axios');

// Make a request for a user with a given ID
 
 function getDogs() {

    axios.get('https://dog.ceo/api/breed/hound/list')
    .then( (response) => {
        return response;
    })
    .catch(  (error) => {
      // handle error
      console.log(error);
    })
    .finally(  res => {
        console.log("done");
      // always executed
    });
  }

export {
    getDogs
}


