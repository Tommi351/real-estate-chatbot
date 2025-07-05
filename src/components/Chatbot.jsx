import MessageList from "./MessageList.jsx";
import InputBox from "./InputBox.jsx";

const messages = [
  { id: 1, sender: "user", text: "I'm looking for a 2-bedroom in Toronto" },
  { id: 2, sender: "bot", text: "Sure! Do you have a price range?" }
]

function Chatbot() {
    return (
        <div>
           <InputBox/>
           <MessageList messages={messages}/>
        </div>
    )
}

export default Chatbot;