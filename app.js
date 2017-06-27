// koa 框架
const Koa = require('koa')

// post body解析
const bodyParser = require('koa-bodyparser')

const controller = require('./controllers/controller.js')

// 创建app对象
const app = new Koa()

// 异步处理
app.use(async (ctx,next)=>{
    await next()
})

// 注册body解析
app.use(bodyParser())
// 注册路由
app.use(controller())
app.listen(3000)