import axios from "axios";
export const fetchMessages = async (messages) => {
       try {
        const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/gpt/chat`, { messages })
        return res.data.reply;
       } catch (err) {
         console.log('Error fetching GPT reply, Please Fix!', err)
       }
    }
