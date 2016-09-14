var noAUthRouter = [];

var result = {
    code: '',
    msg: '',
    info: ''
};

module.exports = function auth(req, res, next){

    let pathArr = req.path.split('/');

    if(pathArr[1] && noAUthRouter.indexOf(pathArr[1])>-1){
        result.code = "1";
        result.msg = "无权限访问";
        res.json(result);
        return ;
    }

    next();

};