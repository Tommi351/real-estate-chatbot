import { useState } from "react";
import "./InputBox.css";
function InputBox({onSendMessage}) {
    const [input, setInput] = useState("");
    function onChange(evt) {
        setInput(evt.target.value)
    }
    function handleSend(evt) {
        evt.preventDefault();
        if (input.trim() === "") {
            return;
        }
        onSendMessage(input);
        setInput("")
    }
    return (
        <form onSubmit={handleSend} className="InputBox">
            <input type="text" value={input} onChange={onChange}/>
            <button type="submit">Send</button>
        </form>
    );
}

export default InputBox;