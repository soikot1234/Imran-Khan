module.exports.config ={
  name: "spam",
  aurthor:"kim/zed",// Convert By Goatbot Zed
   hasPermission: 2,
  shortDescription: "spam messages",
  longDescription: "spam for anything",
  commandCategory: "system",
  guide: "{pn}"
},

exports.run = async function ({ api, event, args }) {
const amount = parseInt(args[0]);
const message = args.slice(1).join(" ");

if (isNaN(amount) || !message) {
  return api.sendMessage("Invalid usage. Usage: /spam [amount] [message]", event.threadID);
}

for (let i = 0; i < amount; i++) {
  api.sendMessage(message, event.threadID);
}
};
