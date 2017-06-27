// 引入fs
const fs = require('fs')
// 路由
const router = require('koa-router')()

// 读取controllers文件
const files = fs.readdirSync(__dirname)

// 过滤非js文件
const js_files = files.filter((item,i)=>{
    return /.*\.\js$/.test(item)
})

js_files.forEach((item,i)=>{
    let mapping = require(__dirname + "/" + item)
    Object.keys(mapping).forEach((item,i)=>{
        if (item.split(" /")[0] == "GET") {
            var path = item.substring(4)
            router.get(path,mapping[item])
        } else if(item.split(" /")[0] == "POST"){
            var path = item.substring(5)
            router.post(path,mapping[item])
        } else {
            console.log('invild request\'\ methods')
        }
    })
})
console.log(js_files)
module.exports = function () {
    return router.routes()
}