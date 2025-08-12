import {Map, AdvancedMarker, Pin} from '@vis.gl/react-google-maps';
import { useEffect, useState } from 'react';
import PoiMarkers from './PoiMarkers';
const cityCoordinates = {
        'toronto': { lat: 43.654543872948246,  lng: -79.37150659614758,}, 
        'mississauga': { lat: 43.58481146556135, lng: -79.6564721453399},
        'ottawa': { lat: 45.416241591733645, lng: -75.67420607561019},
        'vancouver': { lat: 49.282260099717405, lng: -123.09920203451614},
        'calgary': { lat: 51.04615791871177, lng: -114.06043510842292},
        'montreal': { lat: 45.49617330224814, lng: -73.56088482313669},
        'halifax': { lat: 44.65486328612363, lng: -63.60545040665152},
        // add more as needed
      };
function Maps({result, pois}) {

  const [center, setCenter] = useState({ lat: -33.860664, lng: 151.208138 });

      useEffect(() => {
        if (result && result.location) {
            const normalizedLocation = result.location.toLowerCase().trim();
          const newCenter = cityCoordinates[normalizedLocation]; 
           if (newCenter) {
           setCenter(newCenter);
           }
        }
      }, [result])
    
    return (
    <Map
      zoom={9}
      center={center}
      mapId='f402cf4a9009e9a39f89b1e0'
      onCameraChanged={ (ev) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
        <PoiMarkers pois={pois}/>
      </Map>
    );
}

export default Maps;