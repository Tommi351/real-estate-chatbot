import axios from 'axios';

export async function fetchListings() {
    try {
    let listings = await axios.get('/public/data/listings.json');
    return listings.data;
    } catch (err) {
     throw new Error("Couldn't fetch the listings");
    }
}