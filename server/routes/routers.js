var index = require("./index.js");
var user = require("./user");

module.exports = function(app){

    user(app);
    index(app);

};