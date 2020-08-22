const Discord = require("discord.js");

module.exports = client => {
  console.log(`Login as ${client.user.tag} to serve in ${client.channels.cache.size} channels on ${client.guilds.cache.size} servers, for a total of ${client.users.cache.size} users.`);
  function randomStatus() {
    let status = [`on ${client.guilds.cache.size} guild(s) || Type .help`, `with ${client.users.cache.size} online(s) || Type .help`] // You can change it whatever you want.
    let rstatus = Math.floor(Math.random() * status.length);
    
    // client.user.setActivity(status[rstatus], {type: "WATCHING"}); 
    // You can change the "WATCHING" into STREAMING, LISTENING, and PLAYING.
    // Example: streaming
    
    client.user.setActivity(status[rstatus], {type: "STREAMING", url: "https://www.twitch.tv/vii_rakk"});
  }
  setInterval(randomStatus, 30000); // Time in ms. 30000ms = 30 seconds. Min: 20 seconds, to avoid ratelimit.
}