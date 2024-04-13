const fs = require("fs");
module.exports = {
  config:{
	name: "npx4",
        version: "1.0.1",
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	commandCategory: "no prefix",
	usages: "😒",
        cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
  const content = event.body ? event.body : '';
  const body = content.toLowerCase();
  const axios = require('axios')
const media = (
    await axios.get(
      '"https://i.imgur.com/frd8NTe.mp4",',
      { responseType: 'stream' }
    )
  ).data;

	if (body.indexOf("pir")==0 || body.indexOf("❤️‍🔥")==0 || body.indexOf("😢")==0 || body.indexOf("💔")==0 || body.indexOf("😭")==0 || body.indexOf("I love u")==0 || body.indexOf("sad")==0 || body.indexOf("pida")==0 || body.indexOf("Valobashi")==0 || body.indexOf("🖤")==0) {
		var msg = {
				body: "yestai xa🖤",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
    api.setMessageReaction("🖤", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
  }
}
