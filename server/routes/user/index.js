var userControl = require("../../control/user");

module.exports = function(app){

    app.use("/user_:name", function(req, res, next){
        userControl.getUserByName(req, res, next);
    });

    app.use("/user/:id", function(req, res, next){
        userControl.getUserById(req, res, next);
    });

    app.use("/users", function(req, res, next){
        userControl.getUsers(req, res, next);
    });

    app.use("/register", function(req, res, next){
        userControl.register(req, res, next);
    });

    app.use("/login", function(req, res, next) {
        userControl.login(req, res, next);
    });
};