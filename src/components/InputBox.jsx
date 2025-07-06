import { useState } from "react";

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
        <form onSubmit={handleSend}>
            <input type="text" value={input} onChange={onChange}/>
            <button type="submit">Send</button>
        </form>
    );
}

export default InputBox;