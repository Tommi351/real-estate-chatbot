export async function fetchListings() {
    try {
  const res = await fetch("http://localhost:5000/api/listings");
  const listings = await res.json();
    } catch (err) {
     throw new Error("Couldn't fetch the listings");
    }
}