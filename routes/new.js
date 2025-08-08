const {Router}=require("express");
const {insertUserData}=require("../db/queries");
const router=Router();

router.get("/",(req,res)=>{
   res.render("form");
})


router.post("/",async(req,res)=>{
      // console.log(req.body);
      await insertUserData(req.body.message,req.body.name)
      res.redirect("/");
})



module.exports=router;