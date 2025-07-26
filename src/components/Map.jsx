import {Map} from '@vis.gl/react-google-maps';

function Maps() {
    return (
    <Map
      defaultZoom={13}
      defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
      onCameraChanged={ (ev) =>
        console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
      }
      />
    );
}

export default Maps;