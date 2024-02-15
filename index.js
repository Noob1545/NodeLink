const express = require("express")

const app = express()

app.get("/",function(request,response){
    response.sendFile(__dirname+"/MainMenu/index.html")
})

app.get("/link=:id",function(request,response){
    response.sendFile(__dirname+"/link/index.html")
})

app.use(function(request,response){
    response.status(404).sendFile(__dirname+"/404/index.html")
})

app.listen(3000,function(){
    console.log("sunucu http://localhost:3000 de çalıştırılıyor!");
})