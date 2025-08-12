import './App.css'
import Chatbot from "./components/Chatbot.jsx";
import Maps from './components/Map.jsx';
import {APIProvider} from '@vis.gl/react-google-maps';
// import {convertToPois} from '../utils/convertToPois.js';

// const pois = convertToPois();
function App() {
  const apiKey = import.meta.env.VITE_APP_GOOGLEMAPS_API_KEY
  return (
    <div className="app">
      <Chatbot/>
      {/* <APIProvider apiKey={apiKey}>
        <div style={{ height: "350px", width: "400px" }}>
        <Maps/>
        </div>
       </APIProvider> */}
   </div>
  );
}

export default App
