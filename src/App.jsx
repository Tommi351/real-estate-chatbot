import './App.css'
import Chatbot from "./components/Chatbot.jsx";
import Maps from './components/Map.jsx';
import {APIProvider} from '@vis.gl/react-google-maps';
function App() {
  const apiKey = import.meta.env.VITE_APP_GOOGLEMAPS_API_KEY
  return (
    <div className="app" style={{ height: "100vh", width: "100vw" }}>
      <APIProvider apiKey={apiKey}>
        <Maps/>
       </APIProvider>
        {/* <Chatbot/> */}
   </div>
  );
}

export default App
