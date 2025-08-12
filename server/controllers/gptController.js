require('dotenv').config();
const OpenAI = require('openai');
const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY
});
const getMessages = async (messages) => {
    const formattedMessages = [
  { role: "system", content: "Act like a real estate agent, help the user get their dream home" },
  ...messages.map(msg => ({
    role: msg.sender === 'user' ? 'user' : 'assistant', 
    content: msg.text
  }))
];

 console.log("Sending messages to GPT:", formattedMessages);

    try {
        const response = await client.chat.completions.create(
        {
        model: "gpt-3.5-turbo",
        messages: formattedMessages,
        temperature: 0.5,
            max_tokens: 1000,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });

        return response.choices[0].message.content; 
    }
     catch (err) {
        console.log('the Chat is not working, Please Fix!', err)
    }
  }

exports.getMessages = getMessages;
