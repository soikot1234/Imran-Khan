/**
* @author ProCoderMew
* @warn Do not edit code or edit credits
*/

module.exports.config = {
  name: "lovev2",
  version: "2.0.0",
  hasPermssion: 0,
  credits: "Mohammad Nayan",
  description: "",
  commandCategory: "Lovev2",
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
    resolve: _0x24fe96
  } = global.nodemodule.path;
  const {
    existsSync: _0x41e856,
    mkdirSync: _0x46fe20
  } = global.nodemodule["fs-extra"];
  const {
    downloadFile: _0x4c253e
  } = global.utils;
  const _0x15c00f = __dirname + "/cache/";
  const _0x39cb57 = _0x24fe96(__dirname, "cache", "ggf.png");
  if (!_0x41e856(_0x15c00f + '')) {
    _0x46fe20(_0x15c00f, {
      'recursive': true
    });
  }
  if (!_0x41e856(_0x39cb57)) {
    await _0x4c253e("https://drive.google.com/file/d/16nxDs4oY-9tYuSgyotzA5oUEJBYNMg9p/view?usp=drivesdk", _0x39cb57);
  }
};
async function makeImage({
  one: _0x26e3c3,
  two: _0x6f4542
}) {
  const _0x5b0630 = global.nodemodule["fs-extra"];
  const _0x2447df = global.nodemodule.path;
  const _0x293c3c = global.nodemodule.axios;
  const _0x4bb842 = global.nodemodule.jimp;
  const _0x1f405c = _0x2447df.resolve(__dirname, "cache");
  let _0x5f0f73 = await _0x4bb842.read(_0x1f405c + "/ggf.png");
  let _0x2c313e = _0x1f405c + ("/ggf_" + _0x26e3c3 + '_' + _0x6f4542 + ".png");
  let _0x185edf = _0x1f405c + ("/avt_" + _0x26e3c3 + ".png");
  let _0xadb6fd = _0x1f405c + ("/avt_" + _0x6f4542 + ".png");
  let _0x1b493f = (await _0x293c3c.get("https://graph.facebook.com/" + _0x26e3c3 + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
    'responseType': "arraybuffer"
  })).data;
  _0x5b0630.writeFileSync(_0x185edf, Buffer.from(_0x1b493f, "utf-8"));
  let _0x183376 = (await _0x293c3c.get("https://graph.facebook.com/" + _0x6f4542 + "/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662", {
    'responseType': "arraybuffer"
  })).data;
  _0x5b0630.writeFileSync(_0xadb6fd, Buffer.from(_0x183376, "utf-8"));
  let _0x279ac7 = await _0x4bb842.read(await circle(_0x185edf));
  let _0x521d72 = await _0x4bb842.read(await circle(_0xadb6fd));
  _0x5f0f73.resize(719, 405).composite(_0x279ac7.resize(150, 150), 515, 107).composite(_0x521d72.resize(150, 150), 54, 105);
  let _0x3f9772 = await _0x5f0f73.getBufferAsync("image/png");
  _0x5b0630.writeFileSync(_0x2c313e, _0x3f9772);
  _0x5b0630.unlinkSync(_0x185edf);
  _0x5b0630.unlinkSync(_0xadb6fd);
  return _0x2c313e;
}
async function circle(_0x182d2f) {
  const _0x134ce4 = require("jimp");
  _0x182d2f = await _0x134ce4.read(_0x182d2f);
  _0x182d2f.circle();
  return await _0x182d2f.getBufferAsync("image/png");
}
module.exports.run = async function ({
  event: _0x53978c,
  api: _0x5aea80,
  args: _0x37d762
}) {
  const _0x22f451 = global.nodemodule["fs-extra"];
  const {
    threadID: _0x5cbbed,
    messageID: _0x11e8a0,
    senderID: _0x31fa44
  } = _0x53978c;
  var _0x4ca2db = Object.keys(_0x53978c.mentions)[0];
  let _0x423eaa = _0x53978c.mentions[_0x4ca2db].replace('@', '');
  if (!_0x4ca2db) {
    return _0x5aea80.sendMessage("Please tag 1 person", _0x5cbbed, _0x11e8a0);
  } else {
    return makeImage({
      'one': _0x31fa44,
      'two': _0x4ca2db
    }).then(_0x5e13e3 => _0x5aea80.sendMessage({
      'body': "This " + _0x423eaa + " love you so much💔",
      'mentions': [{
        'tag': _0x423eaa,
        'id': _0x4ca2db
      }],
      'attachment': _0x22f451.createReadStream(_0x5e13e3)
    }, _0x5cbbed, () => _0x22f451.unlinkSync(_0x5e13e3), _0x11e8a0));
  }
};}
};
