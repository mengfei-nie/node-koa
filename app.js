// koa 框架
const Koa = require('koa')
const app = new Koa()

// post body解析
const bodyParser = require('koa-bodyparser')

// 路由信息处理
const controller = require('./controllers/controller.js')

// 模板引擎
const templating = require('./template.js')
const isProduction = process.env.NODE_ENV === 'production';

// 异步处理
app.use(async (ctx,next)=>{
    await next()
})

// 模板引擎
app.use(templating('view', {
    noCache: !isProduction,
    watch: !isProduction
}))

// 使用post body解析
app.use(bodyParser())

// 使用路由
app.use(controller())

// 启动服务，监听3000端口
app.listen(3000)