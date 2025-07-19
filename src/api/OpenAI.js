const fetchMessages = async (messages) => {
    const formattedMessages = [
  { role: "system", content: "Act like a real estate agent, help the user get their dream home" },
  ...messages.map(msg => ({
    role: msg.sender === 'user' ? 'user' : 'assistant', // map your sender to GPT role
    content: msg.text
  }))
];
    try {
        const res = await axios.post("ChatGPT API", 
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
                "Authorization": "Bearer MY-API-KEY"
            }
         }
        );
        return res.data.choices[0].message.content;
    }
     catch (err) {
        console.log('Error, Please Fix!', err)
    }
}