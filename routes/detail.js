const {Router}=require('express');
const messages=require("../data/message");
const router=Router();



router.get("/:messageId",(req,res)=>{
    // console.log(messages);
   const messageId=req.params.messageId;
//    console.log(messageId);
   const selectedMessage= messages.find((message)=> message.id==messageId);
//    console.log(selectedMessage);
    res.render("detail",{message:selectedMessage});
})





module.exports=router;