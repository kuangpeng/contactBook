var crypto = require("crypto");
var buffer = require("buffer");

/**
 * md5 中英混合加密
 * @param data
 * @returns {*}
 */
module.exports.md5 = function(data){
    var Buffer = buffer.Buffer;
    var buf = new Buffer(data);
    var str = buf.toString("binary");
    return crypto.createHash("md5").update(str).digest("hex");
}