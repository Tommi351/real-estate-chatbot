import MessageList from "./MessageList.jsx";
import InputBox from "./InputBox.jsx";
import PropertyResults from "./PropertyResults.jsx";
import "./Chatbot.css";
import { useState } from "react";
import { fetchListings } from "../api/realEstateAPI.js";
import { parseInput } from "../../utils/parseInput.js";
import { fetchMessages } from "../api/OpenAI.js";

function Chatbot() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "user", text: "I'm looking for a 2-bedroom in Toronto" },
    { id: 2, sender: "bot", text: "Sure! Do you have a price range?" }
    ]);
    
    const [properties, setProperties] = useState([]);

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
      const result = parseInput(input);
      if (!result.location) {
        return;
       }

      const allListings = await fetchListings();
      // Filter user input by location
      const filtered = allListings.filter(listing => {
        const matchesLocation = listing.location.toLowerCase().includes(result.location.toLowerCase());
          let matchesPrice = true;
    if (result.priceRange !== null) {
      // Assume listing.price is a string like '$750,000' — parse it
      const priceNum = Number(listing.price.replace(/[$,]/g, ""));
      matchesPrice = priceNum <= result.priceRange;
    }
      let matchesBedrooms = true;
    if (result.bedrooms !== null) {
      matchesBedrooms = listing.bedrooms === result.bedrooms;
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
           <InputBox onSendMessage={handleUserMessage}/>
          <PropertyResults properties={properties}/>
        </div>
        </div>
    )
  }
export default Chatbot;