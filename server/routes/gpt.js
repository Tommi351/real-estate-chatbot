const express = require('express');
const Router = express.Router();
const { getMessages } = require('../controllers/gptController');

Router.post("/chat", async (req, res) => {
  const messages = req.body.messages;
  if (!messages) return res.status(400).json({ error: 'Messages are required' });

  try {
    const reply = await getMessages(messages);
    res.json({ reply });
  } catch (err) {
    console.error('The chat is not working, please fix!', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = Router;