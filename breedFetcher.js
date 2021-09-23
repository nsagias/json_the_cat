const request = require('request');

const fetchBreedDescription = function(breedName, callback) {
  const req = `https://api.thecatapi.com/v1/breeds/search/?q=${breedName}`;

  request(req, (error,response, body) => {
    if (error) {
      return callback(error);
      // console.log(error);
     
    }
  
    const data = JSON.parse(body);
  
    if (data[0] === undefined) {
      return callback(`requested breed named: '${breedName}' was not found`);
      // console.log(`requested breed named: '${breed}' was not found`);
      
    }
  
    const catDescription = data[0].description;
    callback(catDescription);
    // console.log(catDescription);
  });
  
};

module.exports = { fetchBreedDescription };