const fetchMessages = async () => {
    try {
        const res = await axios.post("ChatGPT API", ({
        model: "gpt-3.5-turbo",
        messages: [
            {
            role: "system",
            content: "Act like a real estate agent"
         }
        ]
        [
            {
            role: "user",
            content: input
         }
        ] 
        }), 
        {
            headers: { 
                "Content-Type": "application/json",
                "Authorization": "Bearer MY-API-KEY"
            },
           
        }
    );
    console.log(res.data);
    } catch (err) {
        console.log('Error, Please Fix!', err)
    }
}