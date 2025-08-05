
 const {Router}=require('express');
 const messages=require("../data/message");
  const router=Router();

router.get("/",(req,res)=>{
    res.render('index',{title:"Mini MessageBoard",messages:messages})
})




module.exports=router;