const Discord = require('discord.js');
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

const client = new Discord.Client({intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES]});

client.once('ready', () => {
  console.log('Bot is ready!');
});

client.on('messageCreate', message => {
  if (message.content.toLowerCase() === '!ping') {
    message.reply('Pong!');
  }
});

client.login(process.env.BOT_TOKEN);
