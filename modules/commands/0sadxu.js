
const fs = require("fs");
module.exports = {
config:{
	name: "sadxu",
version: "1.0.1",
	permssion: 0,
	credits: "nayan", 
	description: "Fun",
	commandCategory: "no prefix",
	usages: "😢",
cooldowns: 5, 
},

handleEvent: async function({ api, event, client, __GLOBAL }) {
	var { threadID, messageID } = event;
const content = event.body ? event.body : '';
const body = content.toLowerCase();
const axios = require('axios')
const media = (
await axios.get(
'https://i.imgur.com/oXuZ9Wq.mp4',
{ responseType: 'stream' }
)
).data;

	if (body.indexOf("pir laxa")==0 || body.indexOf("sad xu")==0) {
		var msg = {
				body: "Sad video😭",
				attachment: media
			}
			api.sendMessage( msg, threadID, messageID);
api.setMessageReaction("🥺", event.messageID, (err) => {}, true)
		}
	},
	start: function({ nayan }) {
}
                             }
