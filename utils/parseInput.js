function parseInput(text) {
   let normalized = text.toLowerCase()
    const cities = ["Toronto", "Calgary", "Vancouver"];
    let location = null;
    for (let city of cities) {
        if (normalized.includes(city)) {
            location = city;
            break;
        } 
    }
    if (!location) {
            console.log("Sorry, this city is not avaliable");
        }
    
    return { location: city }
}
export default parseInput;