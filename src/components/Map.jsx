import {Map, AdvancedMarker, Pin} from '@vis.gl/react-google-maps';
import PoiMarkers from './PoiMarkers';
function Maps({pois}) {
    return (
    <Map
      defaultZoom={13}
      defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
      mapId='f402cf4a9009e9a39f89b1e0'
      onCameraChanged={ (ev) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }>
        <PoiMarkers pois={pois}/>
      </Map>
    );
}

export default Maps;