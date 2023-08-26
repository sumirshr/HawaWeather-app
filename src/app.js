const express=require('express');
const path=require("path");
const hbs=require('hbs');
const app=express();
const port=process.env.PORT || 9000;

app.set("view engine", "hbs")
const template_path=path.join(__dirname,"../templates/views")
const partials_path=path.join(__dirname,"../templates/partials")
app.set("views",template_path)
hbs.registerPartials(partials_path)

// public path
// console.log(path.join(__dirname,"../public"))
const staticPath=path.join(__dirname,"../public")
app.use(express.static(staticPath))



app.get("/",(req, res)=>{
res.render("index")
})
// app.get("/",(req, res)=>{
// res.send("welcome to my APP")
// })

app.get("/about",(req, res)=>{
res.render("about");
})

app.get("/weather",(req, res)=>{
res.render("weather");
})
app.get("*",(req, res)=>{
res.render("404error");
})

app.listen(port,()=>{
    console.log(`listening on port ${port}`)
});