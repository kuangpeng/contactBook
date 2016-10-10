var userControl = require("../../control/user");

module.exports = function(app){

    app.use("/user/:name", function(req, res, next){
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

    app.use("/logout", function(req, res, next) {
        userControl.logout(req, res, next);
    });

    app.use("/search/:key", function(req, res, next) {
        userControl.search(req, res, next);
    });
};