//引入http服务
const  http = require('http')
const fs = require('fs')
//设定端口好
const post = "8888"
//创建一个服务
http.createServer( (req, res) => {
    //写入请求头
    res.writeHead(200,{
        'Content-Type':'text\plain'
    })
    fs.readFile('../index.html','utf-8',(err, data) => {
        if (err) {
            throw err
        }
        //编写请求内容
        res.write(data)
           
        //结束服务
        res.end()
    })
 
}).listen(post) // 监听服务