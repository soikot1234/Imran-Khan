const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "0botttt",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Mod by John Lester",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Kolkata").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

    if ((event.body.toLowerCase() == "bot khana vayo") || (event.body.toLowerCase() == "khana khayeu bot")) {
     return api.sendMessage("umm vayo vakhar ani hjr ko 💝:))", threadID);
   };

    if ((event.body.toLowerCase() == "Nepal") || (event.body.toLowerCase() == "nepal")) {
     return api.sendmessage("mero desh nepal"), threadID);
   };

    if ((event.body.toLowerCase() == "🥵") || (event.body.toLowerCase() == "🥶")) {
     return api.sendMessage("  khub baish aaxa  hai🤨, threadID);
   };

   if ((event.body.toLowerCase() == "neko") || (event.body.toLowerCase() == "Neko")) {
     return api.sendMessage("Prefix ko tero bau laaune.ho .. hawa ma bas neko vndiney?", threadID);
   };

   if ((event.body.toLowerCase() == "sun") || (event.body.toLowerCase() == "suna") ||(event.body.toLowerCase() == "suna na") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("sune raxu vannus na🥰",threadID);
   };

   if ((event.body.toLowerCase() == "mc") || (event.body.toLowerCase() == "MC")) {
     return api.sendMessage("Ye mc Kya HoTa Hai 🤔 ", threadID);
   };

   if ((event.body.toLowerCase() == "lol") || (event.body.toLowerCase() == "lol player")) {
     return api.sendMessage("Awh lol  ! Haas naa haaas xapri ", threadID);
   };

   if ((event.body.toLowerCase() == "ricky") || (event.body.toLowerCase() == "gedo")) {
     return api.sendMessage("OIEE RANMATI KO COUSIN..K BOLYA😕", threadID);
   };

   if ((event.body.toLowerCase() == "koi online xau ") || (event.body.toLowerCase() == "koi xau")) {
     return api.sendMessage("Ma XU TA BEB💋 ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "ADMIN") || (event.body.toLowerCase() == "Admin") || (event.body.toLowerCase() == "RKO BRO") || (event.body.toLowerCase() == "Rko bro")) {
     return api.sendMessage( "Uha busy hoisinxa ma xu ni ta vaigo ni😘",threadID);


   };

   if ((event.body.toLowerCase() == "owner") || (event.body.toLowerCase() == "who create you")) {
     return api.sendMessage("i am made by my boss - RKO BRO😇", threadID);
   };

   if ((event.body.toLowerCase() == "tumhe banaya kon hai") || (event.body.toLowerCase() == "timlai mole banako")) {
     return api.sendMessage("RKO BRO is ❤️ My Creator. He loves me & Edit Me Daily. Ye Bot Sirf Owner k Liye h. Mujhe Aap logo ko Hasane k liye banya gya h Toh Muh Latkaye Mat Raha Karo. Har Waqt Haste Raho.", threadID);
   };

  if ((event.body.toLowerCase() == "bot admin") || (event.body.toLowerCase() == "bot ko admin ko ho")) {
     return api.sendMessage("He is RKO BRO. He Gives me a name 'RDST'", threadID);
   };

   if ((event.body.toLowerCase() == "I love you bot") || (event.body.toLowerCase() == "bot love you")) {
     return api.sendMessage("I love you 2 babe lau chuppa💋🤩.", threadID);
   };

   if ((event.body.toLowerCase() == "Bihe Garam hoi") || (event.body.toLowerCase() == "ma sanga bihe garxau?")) {
     return api.sendMessage("huss, garxu tra baccha. hjr ko pet m hunxa. manjur xa?", threadID);
   };

   if ((event.body.toLowerCase() == "Chup") || (event.body.toLowerCase() == "KAM BOL") || (event.body.toLowerCase() =="nabol") || (event.body.toLowerCase() == "chup kar")) {
     return api.sendMessage("kyu rahu chup🥺🥺", "Sirf apke kehne se chup ho gya brna 😒😒", threadID);
   };

   if ((event.body.toLowerCase() == "bts") || (event.body.toLowerCase() == "btc")) {
     return api.sendMessage("Tu H Bt$. Bhos DK", threadID);
   };

   if ((event.body.toLowerCase() == "owner  se bakchodi") || (event.body.toLowerCase() == "malik se backchodi") || (event.body.toLowerCase() == "admin se bakchodi") || (event.body.toLowerCase() == "owner se backchodi")) {
     return api.sendMessage("srry malik maaf kr do ab nhi kruga 🥺🙏", threadID);
   };

   if ((event.body.toLowerCase() == "randi bot") || (event.body.toLowerCase() == "khate bot") || (event.body.toLowerCase() ==  "chakka bot" ) || (event.body.toLowerCase() == "mg bot")) {
     return api.sendMessage("Gali garne kaam nagar natra uthaera baaira faldinxu 🙂. :))))", threadID);
   };

   if ((event.body.toLowerCase() == "kiss gara") || (event.body.toLowerCase() == "kiss deu na")) {
     return api.sendMessage("️sab dekh rahe hai brna bhot kiss deta🙈💗😘", threadID);
   };

   if ((event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == " bot thank you") || (event.body.toLowerCase() == "thank you bot") || (event.body.toLowerCase() == "thank u")) {
     return api.sendMessage("️Ma xu nai teti rmro🥱 thank you vannu prdaina timle🥱🥱.", threadID);
   };

   if ((event.body.toLowerCase() == "💣") || (event.body.toLowerCase() == "👀") || (event.body.toLowerCase() == "😠👹") || (event.body.toLowerCase() == "☠") || (event.body.toLowerCase() == "😑")) {
     return api.sendMessage("️ Babe I was just kidding.ek chuppa leu 😘ani chup basa lo💋", threadID);
   };

   if ((event.body.toLowerCase() == "aru vana ") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("️thik xa ani timro", threadID);
   };

   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("️Name ma  kei xaina direct i love you bot vndeu💗😘. hello", threadID);
   };
if ((event.body.toLowerCase() == "bot ko baccha") || (event.body.toLowerCase() == "Bot ke baccha")) {
     return api.sendMessage("️mere baccha toh Tumhare Pet m H.", threadID);
   };

   if ((event.body.toLowerCase() == "😻") || (event.body.toLowerCase() == "photo do")) {
     return api.sendMessage("️owner vans aauxa😜", threadID);
   };

   if ((event.body.toLowerCase() == "who is RKO BRO") || (event.body.toLowerCase() == "ko ho tmi")) {
     return api.sendMessage("️mai aur RKO BRO ek dusre ki jan hai😍😍💞", threadID);
   };

   if ((event.body.toLowerCase() == "bot banayuna shekau na") || (event.body.toLowerCase() == "bot kasaon")) {
     return api.sendMessage("️Khud hi bna lo. tumhe kuch nhi ata h ?", threadID);
   };

   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "😱")) {
     return api.sendMessage("️abeyy oyee kabir Singh 🙄..k dukhi atma vako huh?", threadID);
   };

   if ((event.body.toLowerCase() == "") || (event.body.toLowerCase() == "")) {
     return api.sendMessage("️Yesari Nahera Love parla Feri💗😘🥀", threadID);
   };

   if ((event.body.toLowerCase() =evekoi bm") || (event.body.toLowerCase() == "nobody love me") || (event.body.toLowerCase() == "koi pyar nhi karta")) {
     return api.sendMessage("️M Hu Na bby, Meri Pas Aoo M Pyar Karunga☺️", threadID);
   };

   if ((event.body.toLowerCase() == "🤦🏻‍♂") || (event.body.toLowerCase() == "🤦🏻‍♀")) {
     return api.sendMessage("Are kya hua phir brekup hua kya?😬", threadID);
   };

   if ((event.body.toLowerCase() == "🪕") || (event.body.toLowerCase() == "🎤") || (event.body.toLowerCase() == "🦢") || (event.body.toLowerCase() == "🦚") || (event.body.toLowerCase() == "🦪") || (event.body.toLowerCase() == "🥯")) {
     return api.sendMessage("Jada Haso Mat, dant me lga hua sab dikh raha hai🤣", threadID);
   };

   if ((event.body.toLowerCase() == "♠️") || (event.body.toLowerCase() == "🕰️") || (event.body.toLowerCase() == "🕔") || (event.body.toLowerCase() == "🕢")) {
     return api.sendMessage("Ankho m Pyar, Dil me khumar, Pyar Toh Nhi kar Liya Mujhse🥰", threadID);
   };

   if ((event.body.toLowerCase() == "k xa kbr") || (event.body.toLowerCase() == "kaise ho") || (event.body.toLowerCase() == "kese ho ji") || (event.body.toLowerCase() == "how are you") || (event.body.toLowerCase() == "how are you?")) {
     return api.sendMessage("I am Good☺️", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "ami juwel") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("হ্যা জুয়েল ভালো আছো?", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }