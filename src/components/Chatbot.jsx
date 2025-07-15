import MessageList from "./MessageList.jsx";
import InputBox from "./InputBox.jsx";
import PropertyResults from "./PropertyResults.jsx";
import "./Chatbot.css";
import { useEffect, useState } from "react";
import { fetchListings } from "../api/realEstateAPI.js";

function Chatbot() {
  const [messages, setMessages] = useState([
    { id: 1, sender: "user", text: "I'm looking for a 2-bedroom in Toronto" },
    { id: 2, sender: "bot", text: "Sure! Do you have a price range?" }
    ]);
    
    function onSendMessage() {
      setMessages(...prevMessages, { role: 'user', content: 'input'})
    }
    const [properties, setProperties] = useState([]);
   async function handleUserMessage(input) {
      const listings = await fetchListings();
      setProperties(listings);
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