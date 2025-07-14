import PropertyCard from './PropertyCard.jsx';
function PropertyResults({properties}) {
    return (
        <ul>
            {properties.map((p) => (
             <PropertyCard {...p} 
             />
            ))}
        </ul>
    )
}

export default PropertyResults;