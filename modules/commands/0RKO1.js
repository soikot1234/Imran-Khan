const fs = require("fs");
module.exports.config = {
  name: "#OWNER",
    version: "1.0.1",
  hasPermssion: 0,
  credits: "Candy", 
  description: "no prefix",
  commandCategory: "No command marks needed",
  usages: "...",
    cooldowns: 1, 
};

module.exports.handleEvent = function({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  let react = event.body.toLowerCase();
  if(react.includes("owner") ||
     react.includes("Owner") || 
react.includes("ko hau tmi")) {
    var msg = {
        body: "★𝗢𝘄𝗻𝗲𝗿 + 𝗠𝗮𝗱𝗲 𝗕𝘆★\n\n✦❏NAME:- HIMAL PAUDEL                                               ❏Age:-AGE DOENS'T MATTTER IN LOVE 💋           ❏WHATSAPP NO:-Ooops! Forgot                       ❏in a relationship with:-Ye bat baatayi nahi jaati😒najar lag jati hai                                              ❏Facebook name/Id link :(RKO BRO)https://www.facebook.com/profile.php?id=100084573213860                               ❏This bot name :- Chota gulab😘                            ❏Okay bye😹✦\n\n☞\n\n★★᭄𝗖𝗿𝗲𝗱𝗶𝘁'𝘀 :  ✦RKO BRO`",
        attachment: fs.createReadStream(__dirname + `/noprefix/himal.jpg`)
      }
      api.sendMessage(msg, threadID, messageID);
    api.setMessageReaction("📷", event.messageID, (err) => {}, true)
    }
  }
  module.exports.run = function({ api, event, client, __GLOBAL }) {

        }
