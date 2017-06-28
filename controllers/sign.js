const fn_sign = async (ctx,next)=>{
    ctx.response.type = "text/html"
    console.log(ctx.render('index.html'))
}

module.exports = {
    'POST /sign': fn_sign
}