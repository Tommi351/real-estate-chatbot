import "./MessageBubble.css";
function MessageBubble({text, sender}) {
    return (
        <div className={`MessageBubble ${sender === 'bot' ? 'bot-style' : 'user-style'}`}>
            <p>
                {sender === 'bot' ? 'Bot: ' : 'You: '}
                {text}
            </p>
        </div>
    )
}
export default MessageBubble;