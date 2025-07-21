import axios from "axios";
export const fetchMessages = async (messages) => {
    const apiKey = import.meta.env.VITE_APP_OPENAI_API_KEY;
    const formattedMessages = [
  { role: "system", content: "Act like a real estate agent, help the user get their dream home" },
  ...messages.map(msg => ({
    role: msg.sender === 'user' ? 'user' : 'assistant', // map your sender to GPT role
    content: msg.text
  }))
];

 console.log("Sending messages to GPT:", formattedMessages);

    try {
        const res = await axios.post("https://api.openai.com/v1/chat/completions", // Fix this axios.post() tomorrow on July 20th
        {
        model: "gpt-3.5-turbo",
        messages: formattedMessages,
        temperature: 0.5,
            max_tokens: 1000,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        },
        {
         headers: { 
                "Content-Type": "application/json",
                Authorization: `Bearer ${apiKey}`
            }
         }
        );

        return res.data.choices[0].message.content;
    }
     catch (err) {
        console.log('Error, Please Fix!', err)
    }
}
