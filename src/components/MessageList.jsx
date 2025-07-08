import "./MessageList.css";
import MessageBubble from "./MessageBubble.jsx";
function MessageList({messages}) {
    return (
        <div className="MessageList">
            {messages.map((m) => (
                <MessageBubble key={m.id} {...m} />
            ))}
        </div>
    )
}
export default MessageList;