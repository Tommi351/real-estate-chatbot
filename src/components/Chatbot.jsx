import MessageList from "./MessageList.jsx";
import InputBox from "./InputBox.jsx";
import "./Chatbot.css";

const messages = [
  { id: 1, sender: "user", text: "I'm looking for a 2-bedroom in Toronto" },
  { id: 2, sender: "bot", text: "Sure! Do you have a price range?" }
]

function Chatbot() {
    return (
      <div>
        <h1>How can we help you today?</h1>
        <div className="Chatbot">
           <MessageList messages={messages}/>
           <InputBox/>
        </div>
        </div>
    )
}

export default Chatbot;