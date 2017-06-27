// 定义路由
const fn_index = async (ctx,next)=>{
    ctx.response.type = "text/html"
    ctx.response.body = "<form action='/sign' method='post'>"
    + "<p>name:<input type='text' name='name'></p>"
    + "<p>password:<input type='password' name='password'></p>"
    + "<p>submit:<input type='submit'></p>"
    + "</form>"
}

module.exports = {
    'GET /': fn_index
}