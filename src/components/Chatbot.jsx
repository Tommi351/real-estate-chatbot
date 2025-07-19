import MessageList from "./MessageList.jsx";
import InputBox from "./InputBox.jsx";
import PropertyResults from "./PropertyResults.jsx";
import "./Chatbot.css";
import { useState } from "react";
import { fetchListings } from "../api/realEstateAPI.js";
import {parseInput} from "../../utils/parseInput.js";
import {fetchMessages} from "../api/OpenAI.js";


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
      const allListings = await fetchListings();
      const filtered = allListings.filter(listing => {
        if (listing.city === result.location) {
          return true;
        }
      })
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