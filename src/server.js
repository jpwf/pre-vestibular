const port = 3000
const express = require("express")
const server = express()
server.use(express.static("public"))
server.use(express.urlencoded({ extended: true}))

const nunjucks = require("nunjucks")
nunjucks.configure("src/pages", {
    express:server,
    noCache:true
})

server.get('/', (req,res) =>{
    return res.render("index.html")
})

server.listen(port, function(){
    console.log(`Servidor local na porta: ${port}`)
})
