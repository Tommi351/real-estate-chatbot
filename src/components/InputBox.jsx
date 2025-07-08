import { useState } from "react";
import "./InputBox.css";
function InputBox() {
    const [input, setInput] = useState("");
    function onChange(evt) {
        setInput(evt.target.value)
    }
    function handleSend(evt) {
        evt.preventDefault();
        console.log(input);
        setInput("");
    }
    return (
        <form onSubmit={handleSend} className="InputBox">
            <input type="text" value={input} onChange={onChange}/>
            <button type="submit">Send</button>
        </form>
    );
}

export default InputBox;