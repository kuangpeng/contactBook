module.exports = function(app) {
    app.use('/', function (req, res, next) {
        res.sendfile("client/dist/index.html");
    });
}