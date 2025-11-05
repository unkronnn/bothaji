const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config();
const config = require('../config/config.json');

async function getGoogleGeminiResponse(message) {
  try {
    const genAI = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash-exp" });

    const chatSession = model.startChat({
      generationConfig: {
      },
      history: [
        {
          role: "user",
          parts: [
            {
              text: "Isi Prompt AI Disini"
            },
          ],
        },
      ],
    });

    const result = await chatSession.sendMessage(message);
    return result.response.text();
  } catch (error) {
    console.error('Error with Google Gemini API request:', error);
    throw error;
  }
}

module.exports = (client) => {
  client.on('messageCreate', async message => {
    if (message.author.bot) return;  

    const allowedChannels = config.channels.allowed;
    if (!allowedChannels.includes(message.channel.id)) return;  

    const botMentioned = message.mentions.has(client.user) || message.reference;
    if (!botMentioned) return; 

    try {
      await message.channel.sendTyping();
      const response = await getGoogleGeminiResponse(message.content);
      
      await message.channel.send(`${response}\n-# Managed by Google Gemini AI \`🤖\``);
    } catch (error) {
      console.error('Error processing message:', error);
      await message.channel.send('\`😅\` Please wait, the AI is currently overloaded..');  // Fallback message on error
    }
  });
};