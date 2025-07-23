function PropertyCard({title, price, rating, location, imageUrl, bedrooms, bathrooms, description, agent, contact}) {
    return (
     <div className="PropertyCard">
          <img src={imageUrl} alt="img"/>
          <h1>{title}</h1>
          <h2>{price}</h2>
          <h2>{location} - {rating}</h2>
          <p>{description}</p>
          <p>{`${bedrooms} beds - ${bathrooms} baths`}</p>
          <p>{ `My name is ${agent}, you can contact me about the listing at ${contact}`}</p>
     </div>
    );
}

export default PropertyCard;