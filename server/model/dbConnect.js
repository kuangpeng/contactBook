var config = require("../config/");

var mongdbConnectString = "mongodb://" + config.DB.ip + "/" + config.DB.dbName;

module.exports = {
    connectDB: function(mongoose){
        mongoose.connect(mongdbConnectString);
        return mongoose;
    }
};
