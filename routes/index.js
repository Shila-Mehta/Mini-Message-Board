
 const {Router}=require('express');
 const {getAllUsers}=require("../db/queries");
  const router=Router();

router.get("/",async(req,res)=>{
   const messages=  await getAllUsers();
    res.render('index',{title:"Mini MessageBoard",messages:messages})
})




module.exports=router;