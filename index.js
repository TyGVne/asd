const { Client, Intents } = require('discord.js'); // Importing Client and Intent from Discord.js
const client = new Client({
 intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MEMBERS]
}); // Constructing Client

const { token } = require('./config.json'); // Importing token from Config.json
const welcome = require('./welcome'); // Importing guildMemberAdd event from welcome. 
client.on('ready', () => {
  welcome(client);
  client.user?.setPresence({
    status: "idle" || "dnd",
    activities: [
            {
            name: "Tý GV" || "Watching New Members",
            type: "LISTENING" || "WACTHING"
        },
    ],
}); // Setting Status
  console.log("Listening on Tý Samaa"); // Please don't remove this. 
});

client.login(token);

