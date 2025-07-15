import PropertyCard from './PropertyCard.jsx';
function PropertyResults({properties}) {
    return (
        <ul>
            {properties.map((p) => (
             <PropertyCard key={p.id} {...p} 
             />
            ))}
        </ul>
    )
}

export default PropertyResults;