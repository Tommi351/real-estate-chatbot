import './App.css'
import Chatbot from "./components/Chatbot.jsx";
import Maps from './components/Map.jsx';
import {APIProvider} from '@vis.gl/react-google-maps';

function App() {
  return (
    <div className="app">
      <Chatbot/>
   </div>
  );
}

export default App
