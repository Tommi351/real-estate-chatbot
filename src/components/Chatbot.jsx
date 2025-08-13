import MessageList from "./MessageList.jsx";
import InputBox from "./InputBox.jsx";
import PropertyResults from "./PropertyResults.jsx";
import "./Chatbot.css";
import { useState } from "react";
import { fetchListings } from "../api/realEstateAPI.js";
import { parseInput } from "../../utils/parseInput.js";
import { convertToPois } from "../../utils/convertToPois.js";
import { fetchMessages } from "../api/OpenAI.js";
import Maps from "./Map.jsx";
import { APIProvider } from "@vis.gl/react-google-maps";
const apiKey = import.meta.env.VITE_APP_GOOGLEMAPS_API_KEY
function Chatbot() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "user", text: "I'm looking for a 2-bedroom in Toronto" },
    { id: 2, sender: "bot", text: "Sure! Do you have a price range?" }
    ]);
    
    const [properties, setProperties] = useState([]);

    const [result, setResult] = useState(null);

    const [pois, setPois] = useState([]);
    async function handleUserMessage(input) {
      // Update User Messages 
     const newUserMessage = {
      id: messages.length + 1, sender: 'user', text: input
     };
     const newMessages = [...messages, newUserMessage];
     // Get ChatGPT's response
     const response = await fetchMessages(newMessages);
     const botResponse = {
      id: newMessages.length + 1, sender: 'bot', text: response
     };
     const updatedMessages = [...newMessages, botResponse]
     setMessages(updatedMessages);
    // Parse User Input
      const parsedInput = parseInput(input)
      setResult(parsedInput);
      if (!parsedInput.location) {
        return;
       }
       // Fetch listings and convert lat/lng to Pois so Markers can render on Maps
      const allListings = await fetchListings();
      const poisData = convertToPois(allListings); // pure conversion here
      setPois(poisData);
      // Filter user input by location, price, bedrooms, bathrooms
      const filtered = allListings.filter((listing) => {
        const matchesLocation = listing.location.toLowerCase().includes(parsedInput.location.toLowerCase());
          let matchesPrice = true;
    if (parsedInput.priceRange !== null) {
      // Assume listing.price is a string like '$750,000' — parse it
      const priceNum = Number(listing.price.replace(/[$,]/g, ""));
      matchesPrice = priceNum <= parsedInput.priceRange;
    }
      let matchesBedrooms = true;
    if (parsedInput.bedrooms !== null) {
      matchesBedrooms = listing.bedrooms === parsedInput.bedrooms;
    }

    return matchesLocation && matchesPrice && matchesBedrooms;
      });
      setProperties(filtered);
    }
    return (
      <div>
        <h1>How can we help you today?</h1>
        <div className="Chatbot">
          <MessageList messages={messages} setMessages={setMessages}/>
           <APIProvider apiKey={apiKey}>
            <div style={{ height: "350px", width: "400px" }}>
          <Maps result={result} pois={pois}/>
            </div>
          </APIProvider>
          <PropertyResults properties={properties}/>
           <InputBox onSendMessage={handleUserMessage}/>
        </div>
        </div>
    )
  }
export default Chatbot;