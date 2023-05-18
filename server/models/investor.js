const mongoose=require('mongoose');

const investorSchema= mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:{type:String, required: true},
    email:
    {
        type: String,
        required: true,
        unique: true,
        match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    },
    number:{type:String, required: true},
    linkedin:{type:String, required: true},
    country:{type:String, required: true},
    state:{type:String, required: true},
    city:{type:String, required: true},
    pin:{type:String, required: true},
});

module.exports=mongoose.model('Investor',investorSchema);

