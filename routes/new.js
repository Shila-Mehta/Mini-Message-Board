const {Router}=require("express");
const messages=require("../data/message");
const id=require("uuid");

const router=Router();

router.get("/",(req,res)=>{
   res.render("form");
})


router.post("/",(req,res)=>{
    messages.push({id:id.v4(),text:req.body.message,user:req.body.name,added:new Date()})
    res.redirect("/");
})



module.exports=router;