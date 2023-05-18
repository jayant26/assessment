const express=require('express');
const mongoose=require('mongoose');
const router=express.Router();
const Investor = require('../models/investor');
router.post('/register',(req,res,next)=>{
    console.log(req.body);
    Investor.find({email:req.body.i_email}).exec()
    .then(result=>{
        if(result.length>0)
        {
            console.log("Email is already registered");
            return res.send({message:"Email is already registered"})
        }
        else{
            Investor.find({number:req.body.Number}).exec()
            .then(response=>{
                if(response.length>0){
                    console.log("This Phone Number is already in use");
                    return res.send({message:"This Phone Number is already in use"});
                }
                else
                {
                    const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
                    console.log(emailRegexp.test(req.body.i_email));
                    if(!emailRegexp.test(req.body.i_email))
                    {
                        return res.send({message:"Invalid email address"});
                    }
                    const investor=new Investor({
                        _id:new mongoose.Types.ObjectId(),
                        name:req.body.i_name,
                        email:req.body.i_email,
                        number:req.body.Number,
                        linkedin:req.body.linkedin,
                        country:req.body.country,
                        state:req.body.state,
                        city:req.body.city,
                        pin:req.body.pin
                    })
                
                    investor.save()
                    .then(result=>{
                        console.log('result: ',result);
                        res.status(201).json({id:result._id})
                    })
                    .catch(err=>{
                        console.log(err);
                        res.status(500).json({error:err});
                    })

                }
            })
        }
        })

    
    
})

router.get('/:investorId',(req,res,next)=>{
    const id= req.params.investorId;
    console.log(id);
    Investor.findById(id)
    .exec()
    .then(result=>{
        res.status(200).json(result);
    })
    .catch(err=>{
        res.status(500).json({error:err});
    })
})


module.exports=router;