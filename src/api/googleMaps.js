const fs = require('fs');

async function geoCodeCities() {
 fs.readFile("public/data/listings.json", "utf-8", (err, data) => {
   let rawData = JSON.parse(data);
   const locations = rawData.map(c => c.location)
   
   for(let city of cities) {
    
   }
   
 });
}
module.exports(geoCodeCities);