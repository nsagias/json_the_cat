const request = require('request');

const breed = process.argv[2];
// const REQ ='https://api.thecatapi.com/v1/breeds/search/?q=siberian';
const req = `https://api.thecatapi.com/v1/breeds/search/?q=${breed}`;

request(req, (error, response, body) => {
  // the thecatapi returns empty array if no values
  if (error) {
    console.log(error);
    return;
  }

  const data = JSON.parse(body);

  if (data[0] === undefined) {
    console.log(`requested breed named: '${breed}' was not found`);
    return;
  }

  const catDescription = data[0].description;
  console.log(catDescription);
});
