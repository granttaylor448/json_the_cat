const args = process.argv.slice(2);
const request = require('request');



request(`htps://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, function(error, response, body) {
  // const data = JSON.parse(body)
  if (error) {
    console.log(error);
  
    
  } else {
 
    const data = JSON.parse(body);
    if (data.length === 0) {
      console.log("Something went wrong!");
      
    }
    if (data.length > 0) {
      console.log(data[0].description);
    }
  }
  
});
// request.on('response', (body) => console.log(body))
