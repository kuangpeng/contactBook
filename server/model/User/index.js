var mongoose = require('mongoose');
var util = require('../../util/util');
var dbConnect = require("../dbConnect");
var userModel = require("../DBModel/user");

mongoose = dbConnect.connectDB(mongoose);

var User = mongoose.model(userModel.TableName, new mongoose.Schema(userModel.TableModel), userModel.TableName);

module.exports.getUserById = function(_id, callback){
    if(!_id){
        return callback();
    }
    User.findOne({_id: _id}, function(err, data_user){
        callback(err, data_user);
    });

};

module.exports.getUsersByName = function(_name, callback){
    if(!_name){
        return callback();
    }
    User.find({"name": new RegExp('^'+_name+'$', "i")}, function(err, data_user){
        callback(err, data_user);
    });

};

module.exports.getUserByName = function(_name, callback){
    if(!_name){
        return callback();
    }
    User.findOne({"name": _name}, function(err, data_user){
        callback(err, data_user);
    });

};

module.exports.getAllUsers = function(callback){
    User.find({}, function(err, data_user){
        callback(err, data_user);
    });

};

module.exports.register = function(params, callback){
    let obj = {};
    obj[userModel.TableModel.name.toLString] = params.userName;
    obj[userModel.TableModel.password.toLString] = util.md5(params.password);
    var user = new User(obj);
    user.save(function(err){
        if(err){
            callback(err, null);
        }
        else{
            callback(null, "OK");
        }
    });
};

module.exports.search = function(_key, callback){
    if(!_key){
        return callback();
    }
    User.find({"name": new RegExp(_key, "i")}, function(err, data_user){
        callback(err, data_user);
    });
};

