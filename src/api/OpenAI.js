import axios from "axios";
export const fetchMessages = async (messages) => {
       try {
        const res = await axios.post("http://localhost:5000/api/gpt/chat", { messages })
        return res.data.reply;
       } catch (err) {
         console.log('Error fetching GPT reply, Please Fix!', err)
       }
    }