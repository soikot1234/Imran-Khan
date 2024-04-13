const API = "https://api--n4y4n7.repl.co/api/textpro?number=14&text="
module.exports.config = {
	name: "nameedit14",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Mohammad Nayan",
	description: "text generator",
	commandCategory: "text maker",
	usages: "nameedit <text>",
	cooldowns: 10
};
module.exports.run = async function ({ api, event, args,}) {
    const axios = require("axios");
    const fs = require("fs-extra");
    const qs = require("querystring");
    tukhoa = args.join(" ");
    (event.type == "message_reply") ? tukhoa = event.messageReply.attachments[0].url: tukhoa = args.join(" ");
    const pathsave = __dirname + `/cache/banner.png`;
    let imageBuffer;
    api.sendMessage(`𝐘𝐨𝐮𝐫 𝐥𝐨𝐠𝐨 𝐢𝐬 𝐛𝐞𝐢𝐧𝐠 𝐜𝐫𝐞𝐚𝐭𝐞𝐝🥀\n𝐏𝐥𝐞𝐚𝐬𝐞 𝐖𝐚𝐢𝐭🫂`, event.threadID, (err, info) => setTimeout(() => { api.unsendMessage(info.messageID) }, 3000));    axios.get(`${API}${encodeURI(tukhoa)}`, {responseType: "arraybuffer"}) .then(data => {const imageBuffer = data.data;
    fs.writeFileSync(pathsave, Buffer.from(imageBuffer));
    api.sendMessage({body: `Credit👉🔰Mohammad Nayan🍁🥀`, attachment: fs.createReadStream(pathsave)}, event.threadID, () => fs.unlinkSync(pathsave), event.messageID);}).catch(error => {

          
            let err;
            if (error.response) err = JSON.parse(error.response.data.toString());
            else err = error;
            return api.sendMessage(`Đã xảy ra lỗi ${err.error} ${err.message}`, event.threadID, event.messageID);
        })
};