import './App.css'
import Chatbot from "./components/Chatbot.jsx";
import Maps from './components/Map.jsx';
import {APIProvider, AdvancedMarker, Pin} from '@vis.gl/react-google-maps';
function App() {
  const apiKey = import.meta.env.VITE_APP_GOOGLEMAPS_API_KEY
  return (
    <div className="app" style={{ height: "350px", width: "350px" }}>
      <APIProvider apiKey={apiKey}>
        <Maps/>
       </APIProvider>
        {/* <Chatbot/> */}
   </div>
  );
}

export default App
