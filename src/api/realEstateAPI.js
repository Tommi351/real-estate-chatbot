import axios from "axios";
export async function fetchListings() {
    try {
  const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/listings`);
  const listings = await res.data;
  return listings;
    } catch (err) {
     throw new Error("Couldn't fetch the listings, Please fix", err);
    }
}
