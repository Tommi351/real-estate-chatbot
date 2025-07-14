import MessageList from "./MessageList.jsx";
import InputBox from "./InputBox.jsx";
import PropertyResults from "./PropertyResults.jsx";
import "./Chatbot.css";
import { useState } from "react";

 const properties = [
  {
    id: 1,
    title: "Modern Condo in Downtown Toronto",
    price: "$750,000",
    rating: 4.9,
    location: "Toronto, ON",
    imageUrl: "https://shorturl.at/ACyHy",
    bedrooms: 2,
    bathrooms: 2,
    sqft: 900,
    description: "Beautiful condo with floor-to-ceiling windows and stunning skyline views.",
    agent: "Samantha Lee",
    contact: "416-555-1234"
  },
  {
    id: 2,
    title: "Spacious Family Home in Scarborough",
    price: "$950,000",
    rating: 4.5,
    location: "Scarborough, ON",
    imageUrl: "https://shorturl.at/FZNC0",
    bedrooms: 4,
    bathrooms: 3,
    sqft: 2000,
    description: "A perfect family home near parks and schools. Includes finished basement.",
    agent: "Michael Chan",
    contact: "416-555-5678"
  },
  {
    id: 3,
    title: "Luxury Townhouse in North York",
    price: "$1,100,000",
    rating: 5,
    location: "North York, ON",
    imageUrl: "https://rb.gy/32fik3",
    bedrooms: 3,
    bathrooms: 2,
    sqft: 1500,
    description: "Luxury finishes and smart home tech in prime location.",
    agent: "Alex Rivera",
    contact: "416-555-9012"
  }
];
  
function Chatbot() {
//   const [messages, setMessages] = useState([
//     { id: 1, sender: "user", text: "I'm looking for a 2-bedroom in Toronto" },
//     { id: 2, sender: "bot", text: "Sure! Do you have a price range?" }
//     ]);
    
//     function onSendMessage() {
//       setMessages(...prevMessages, { role: 'user', content: 'input'})
//     }
    return (
      <div>
        <h1>How can we help you today?</h1>
        <div className="Chatbot">
           {/* <MessageList messages={messages} setMessages={setMessages}/>
           <InputBox onSendMessage={onSendMessage}/> */}
           <PropertyResults properties={properties}/>
        </div>
        </div>
    )
  }
export default Chatbot;