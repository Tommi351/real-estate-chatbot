export function convertToPois(listings) {
return listings.map((listing) => ({
  key: listing.id,
  location: {
    lat: Number(listing.lat),
    lng: Number(listing.lng)
  }
}));
}