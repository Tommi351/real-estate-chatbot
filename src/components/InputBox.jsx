import { useState } from "react";

function InputBox() {
    return (
        <form onSubmit={handleSend}>
            <input type="text"/>
            <button type="submit"></button>
        </form>
    );
}

export default InputBox;