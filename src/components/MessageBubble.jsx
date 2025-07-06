import "./MessageBubble.css";
function MessageBubble({text, sender}) {
    const styles = sender === 'bot' 
  ? { backgroundColor: "blue", alignItems: "flex-start" } 
  : { color: "blue", alignItems: "flex-end" };
    return (
        <div className="MessageBubble">
            <p style={styles}>{sender} - {text}</p>
        </div>
    )
}
export default MessageBubble;