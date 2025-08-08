const {Router}=require('express');
const router=Router();
const {getAllUsers}=require("../db/queries");


router.get("/:messageId",async(req,res)=>{
   const messageId=req.params.messageId;
   const allMessages= await getAllUsers();
   const selectedMessage= allMessages.find((message)=> message.id==messageId);
    res.render("detail",{message:selectedMessage});
})





module.exports=router;