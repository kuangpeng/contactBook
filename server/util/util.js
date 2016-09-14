var crypto = require("crypto");
var buffer = require("buffer");

var config = require("../config");

var util = {};
/**
 * md5 中英混合加密
 * @param data
 * @returns {*}
 */
util.md5 = function(data){
    var Buffer = buffer.Buffer;
    var buf = new Buffer(data);
    var str = buf.toString("binary");
    return crypto.createHash("md5").update(str).digest("hex");
};

util.getUserAK = function(sessionId, userName, userPass){
    let token = util.md5(config.encrypt.key + "&" + userName + "&" + userPass + "&" + sessionId);
    return token.substr(0, 16);
};

module.exports = util;