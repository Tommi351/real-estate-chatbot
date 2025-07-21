export function parseInput(text) {
   let normalized = text.toLowerCase();
    const cities = ["Toronto", "Scarborough", "North York"];
    let location = null;
    let priceRange = null;
    let bedrooms = null;
    for (let city of cities) {
        if (normalized.includes(city.toLowerCase())) {
            location = city;
            break;
        } 
    }
    
    // Extract price range (example: under 900k, below 1 million, max 800000)
  const priceMatch = normalized.match(/(?:under|below|max)\s*\$?(\d+(?:,\d{3})*(?:\.\d+)?)/);
  if (priceMatch) {
    // Remove commas and convert to number
    priceRange = Number(priceMatch[1].replace(/,/g, ""));
  }

  // Extract bedrooms (example: 2-bedroom, 3 bedrooms)
  const bedMatch = normalized.match(/(\d+)[-\s]?bed/);
  if (bedMatch) {
    bedrooms = Number(bedMatch[1]);
  }

  if (!location) {
            console.log("Sorry, this city is not avaliable");
        }

    return { location, priceRange, bedrooms };
}; 