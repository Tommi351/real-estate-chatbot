import MessageList from "./MessageList.jsx";
import InputBox from "./InputBox.jsx";
import PropertyResults from "./PropertyResults.jsx";
import "./Chatbot.css";
import { useState, useEffect } from "react";
import { fetchListings } from "../api/realEstateAPI.js";
import { parseInput } from "../../utils/parseInput.js";
import { convertToPois } from "../../utils/convertToPois.js";
import { fetchMessages } from "../api/OpenAI.js";
import { lazy, Suspense } from "react";
const Maps = lazy(() => import("./Map.jsx"));
import { APIProvider } from "@vis.gl/react-google-maps";
import axios from "axios"; 
const { data } = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/maps-key`);
const apiKey = data.key;
function Chatbot() {
  const [messages, setMessages] = useState(() => {
  const saved = localStorage.getItem("chatMessages");
  return saved ? JSON.parse(saved) : [
    { id: 1, sender: "user", text: "I'm looking for homes in Canada" },
    { id: 2, sender: "bot", text: "Sure! What kind of homes do you like and where in Canada?" }
  ];
});
    
    const [properties, setProperties] = useState([]);
    const [result, setResult] = useState(null);
    const [pois, setPois] = useState([]);
    const [loading, setLoading] = useState(false);

    // Chat History(saves user message)

    // Load messages from localStorage
     useEffect(() => {
  const savedMessages = localStorage.getItem("chatMessages");
  if (savedMessages) {
    setMessages(JSON.parse(savedMessages));
  } 
}, []);
   // Save messages to localStorage whenever they change
    useEffect(() => {
        localStorage.setItem("chatMessages", JSON.stringify(messages));
    }, [messages]);

    function clearHistory() {
      if (window.confirm("Are you sure you want to clear chat history?")) {
      localStorage.removeItem("chatMessages")
      setMessages([{ id: 1, sender: "user", text: "I'm looking for homes in Canada" },
    { id: 2, sender: "bot", text: "Sure! What kind of homes do you like and where in Canada?" }
   ]);
      alert("Chat history cleared!");
      }
    }
    async function handleUserMessage(input) {
       setLoading(true);
      try {
        // ✅ Add user message using functional update to avoid async issues
      setMessages(prev => [...prev, { id: prev.length + 1, sender: "user", text: input }]);

      // Get ChatGPT response
      const botResponse = await fetchMessages([...messages, { id: messages.length + 1, sender: "user", text: input }]);
      setMessages(prev => [...prev, { id: prev.length + 1, sender: "bot", text: botResponse }]);

    // Parse User Input
      const parsedInput = handleParsedResult(input);
      if (!parsedInput.location) {
        return;
       }
       // Fetch listings and convert lat/lng to Pois so Markers can render on Maps
      await fetchandSetProperties(parsedInput);
      } catch (err) {
        console.log("Error handling user messages")
      } 
      finally {
          setLoading(false);
      }
    }
   
    function addUserMessage(messages, input) {
     return [...messages, {
      id: messages.length + 1, sender: 'user', text: input
     }];
    }

  async function getBotResponse(messages) {
    const response = await fetchMessages(messages);
    return { id: messages.length + 1, sender: 'bot', text: response};
  }
    function handleParsedResult(input) {
      const parsedInput = parseInput(input);
      if (!parsedInput.location) {
        return;
       }
      setResult(parsedInput);
      return parsedInput;
    }
     
    async function fetchandSetProperties(parsedInput) {
      const allListings = await fetchListings();
      const poisData = convertToPois(allListings); // pure conversion here
      setPois(poisData);
       const filtered = filterListings(allListings, parsedInput);
       setProperties(filtered);
    }
    function filterListings(listings, parsedInput) {
       return listings.filter((listing) => {
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
    }
    return (
      <div>
        <h1>How can we help you today?</h1>
        <h2>Note: Currently optimized for Canadian cities (demo purposes). Can be expanded globally on request</h2>
        <div className="Chatbot">
          {loading ? (
            <h2>Loading...</h2>
          ) : <> 
               <MessageList messages={messages} setMessages={setMessages}/>
               <button onClick={clearHistory}>Clear History</button>
               <Suspense fallback={<div>Loading...</div>}>
               <APIProvider apiKey={apiKey}>
                  <div style={{ height: "350px", width: "700px" }}>
                    <Maps result={result} pois={pois}/>
                 </div>
               </APIProvider>
               </Suspense>
              <PropertyResults properties={properties}/> 
              <InputBox onSendMessage={handleUserMessage}/>
           </>
         }
        </div>
        </div>
    )
  }
export default Chatbot;
