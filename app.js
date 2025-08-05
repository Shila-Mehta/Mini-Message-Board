const express=require('express');
const app=express();

const path=require('path');

const indexRouter=require('./routes/index');
const newRouter=require("./routes/new");
const messageRouter=require("./routes/detail");

app.use(express.static(path.join(__dirname,"public")));
app.set(express.static(path.join(__dirname,"views")));
app.set("view engine",'ejs');
app.use(express.urlencoded({extended:true}))

app.use('/',indexRouter);
app.use('/new',newRouter);
app.use('/message',messageRouter);

app.listen(3000,(err)=>{
     if(err) console.log(err);
     console.log(`The server is running at  3000`);
})