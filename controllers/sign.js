const fn_sign = async (ctx,next)=>{
    console.log(ctx.request.body)
    ctx.response.type = "text/html"
    ctx.response.body = "提交"
}

module.exports = {
    'POST /sign': fn_sign
}