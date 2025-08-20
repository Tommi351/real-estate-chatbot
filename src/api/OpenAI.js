import axios from "axios";
export const fetchMessages = async (messages) => {
       try {
        const res = await axios.post("https://real-estate-agent-backend-soq6.onrender.com/api/gpt/chat", { messages })
        return res.data.reply;
       } catch (err) {
         console.log('Error fetching GPT reply, Please Fix!', err)
       }
    }
