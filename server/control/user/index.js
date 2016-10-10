var User = require("../../model/User");
var resModel = require("../resModel");
var util = require('../../util/util');


module.exports.getUserByName = function(req, res, next){
    var resModel1 = new resModel();
    User.getUserByName(req.params.name, function(err, users){
        if(err){
            console.log(err);
            resModel1.code = "-1";
            resModel1.msg = err;
            resModel1.info = err;
            res.json(resModel1);
        }
        else{
            resModel1.code = "0";
            resModel1.info = users;
            res.json(resModel1);
        }
    });
};

module.exports.getUserById = function(req, res, next){
    var resModel1 = new resModel();
    User.getUserById(req.params.id, function(err, users){
        if(err){
            console.log(err);
            resModel1.code = "-1";
            resModel1.msg = err;
            resModel1.info = err;
            res.json(resModel1);
        }
        else{
            resModel1.code = "0";
            resModel1.info = users;
            res.json(resModel1);
        }
    });
};

module.exports.getUsers = function(req, res, next){
    var resModel1 = new resModel();
    User.getAllUsers(function(err, users){
        if(err){
            resModel1.code = "-1";
            resModel1.msg = err;
            resModel1.info = err;
            res.json(resModel1);
        }
        else{
            resModel1.code = "0";
            resModel1.info["list"] = users;
            resModel1.info["page"] = 0;
            res.json(resModel1);
        }
    });
};

module.exports.register = function(req, res, next){
    var resModel1 = new resModel();
    User.getUserByName(req.body.userName, function(err, user){
        if(err){
            console.log(err);
            resModel1.code = "-1";
            resModel1.msg = err;
            resModel1.info = err;
            res.json(resModel1);
        }
        else{
            console.log(user);
            if(user != null){
                resModel1.code = "1";
                resModel1.msg = "此用户已存在";
                resModel1.info = "";
                res.json(resModel1);
            }
            else{
                User.register(req.body, function(err, state){
                    if(err){
                        resModel1.code = "-1";
                        resModel1.msg = err;
                        resModel1.info = err;
                    }
                    else{
                        resModel1.code = "0";
                        resModel1.msg = "注册成功";
                        resModel1.info = "";
                    }
                    res.json(resModel1);
                });
            }
        }
    });
};

module.exports.login = function(req, res, next){
    var resModel1 = new resModel();
    User.getUserByName(req.body.userName, function(err, user){
        if(user != null){
            if(user.password == util.md5(req.body.password)){
                let token = util.getUserAK(req.session?req.session.id:'', user.name, user.password);

                resModel1.code = "0";
                resModel1.msg = "登录成功";
                resModel1.info = {
                    name: user.name,
                    ak: token
                };
            }
            else{
                resModel1.code = "1";
                resModel1.msg = "密码错误";
                resModel1.info = "";
            }
        }
        else{
            resModel1.code = "10";
            resModel1.msg = "此用户不存在";
            resModel1.info = "";
        }
        res.json(resModel1);
    });
};

module.exports.logout = function(req, res, next){
    var resModel1 = new resModel();

};

module.exports.search = function(req, res, next){
    var resModel1 = new resModel();
    User.search(req.params.key, function(err, users){
        if(err){
            resModel1.code = "-1";
            resModel1.msg = err;
            resModel1.info = err;
            res.json(resModel1);
        }
        else{
            resModel1.code = "0";
            resModel1.info["list"] = users;
            resModel1.info["page"] = 0;
            res.json(resModel1);
        }
    });
};

