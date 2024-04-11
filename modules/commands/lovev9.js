/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
  name: "lovev9",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "DinhPhuc",
  description: "",
  commandCategory: "Love",
  usages: "[tag]",
  cooldowns: 5,
  dependencies: {
    "axios": "",
    "fs-extra": "",
    "path": "",
    "jimp": ""
  }
};
module.exports.onLoad = async () => {
  const {
    resolve: _0x3b6675
  } = global.nodemodule.path;
  const {
    existsSync: _0x5133fe,
    mkdirSync: _0x5b62f9
  } = global.nodemodule["fs-extra"];
  const {
    downloadFile: _0x562c81
  } = global.utils;
  const _0x1a67c3 = __dirname + "/cache/";
  const _0x2b3c0c = _0x3b6675(__dirname, "cache", "ewhd.png");
  if (!_0x5133fe(_0x1a67c3 + '')) {
    _0x5b62f9(_0x1a67c3, {
      'recursive': true
    });
  }
  if (!_0x5133fe(_0x2b3c0c)) {
    await _0x562c81("https://drive.google.com/file/d/15kqnj1w2JSQOm9vFLgJJhRacLKHdJKCx/view?usp=drivesdk", _0x2b3c0c);
  }
};
async function makeImage({
  one: _0x5421bf,
  two: _0x20b543
}) {
  const _0x16daf4 = global.nodemodule["fs-extra"];
  const _0xbf349 = global.nodemodule.path;
  const _0x2ae803 = global.nodemodule.axios;
  const _0x41768c = global.nodemodule.jimp;
  const _0x2f0805 = _0xbf349.resolve(__dirname, "cache");
  let _0x221c57 = await _0x41768c.read(_0x2f0805 + "/ewhd.png");
  let _0x27ad30 = _0x2f0805 + ("/ewhd_" + _0x5421bf + '_' + _0x20b543 + ".png");
  let _0x588839 = _0x2f0805 + ("/avt_" + _0x5421bf + ".png");
  let _0x2cd363 = _0x2f0805 + ("/avt_" + _0x20b543 + ".png");
  let _0x508c2e = (await _0x2ae803.get("https://graph.facebook.com/" + _0x5421bf + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
    'responseType': "arraybuffer"
  })).data;
  _0x16daf4.writeFileSync(_0x588839, Buffer.from(_0x508c2e, "utf-8"));
  let _0x1d2335 = (await _0x2ae803.get("https://graph.facebook.com/" + _0x20b543 + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
    'responseType': "arraybuffer"
  })).data;
  _0x16daf4.writeFileSync(_0x2cd363, Buffer.from(_0x1d2335, "utf-8"));
  let _0x3d93a1 = await _0x41768c.read(await circle(_0x588839));
  let _0x4bbf72 = await _0x41768c.read(await circle(_0x2cd363));
  _0x221c57.resize(1632, 917).composite(_0x3d93a1.resize(400, 400), 215, 258).composite(_0x4bbf72.resize(400, 400), 1015, 260);
  let _0x1f52d7 = await _0x221c57.getBufferAsync("image/png");
  _0x16daf4.writeFileSync(_0x27ad30, _0x1f52d7);
  _0x16daf4.unlinkSync(_0x588839);
  _0x16daf4.unlinkSync(_0x2cd363);
  return _0x27ad30;
}
async function circle(_0x134343) {
  const _0x582476 = require("jimp");
  _0x134343 = await _0x582476.read(_0x134343);
  _0x134343.circle();
  return await _0x134343.getBufferAsync("image/png");
}
module.exports.run = async function ({
  event: _0xd7785c,
  api: _0x5660eb,
  args: _0x2cc53f
}) {
  const _0xb115b7 = global.nodemodule["fs-extra"];
  const {
    threadID: _0x578ecc,
    messageID: _0x515ff6,
    senderID: _0x3aa970
  } = _0xd7785c;
  var _0x431feb = Object.keys(_0xd7785c.mentions)[0];
  let _0x483ece = _0xd7785c.mentions[_0x431feb].replace('@', '');
  if (!_0x431feb) {
    return _0x5660eb.sendMessage("Please tag 1 person", _0x578ecc, _0x515ff6);
  } else {
    return makeImage({
      'one': _0x3aa970,
      'two': _0x431feb
    }).then(_0x2d52a4 => _0x5660eb.sendMessage({
      'body': "-😘" + _0x483ece + " love you so much🥰",
      'mentions': [{
        'tag': _0x483ece,
        'id': _0x431feb
      }],
      'attachment': _0xb115b7.createReadStream(_0x2d52a4)
    }, _0x578ecc, () => _0xb115b7.unlinkSync(_0x2d52a4), _0x515ff6));
  }
};
