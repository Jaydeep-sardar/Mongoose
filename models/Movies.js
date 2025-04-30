import mongoose from "mongoose";;

//defining schema 
const movieSchema =new mongoose.Schema({
    name :{type:String,required:true,trim:true},
    ratings:{type:Number,required:true,min:1,max:5},
    money:{
        type:mongoose.Decimal128,
        required:true,
        validate :v => v >=10,
    },
    genre:{type: Array},
    isActive :{type :Boolean},
    comments :[
        {value :{type:String},published:{
            type:Date,default: Date.now
        }},
    ],
});


//creating model
const movieModel = mongoose.model("Movie",movieSchema);


const createDoc =async()=>{
    try {
        const m1=new movieModel({
            name: "Extraction 2",
            ratings:4,
            money:60000000000,
            genre:['action','adventure'],
            isActive:true,
            comments:[{value:"that was an amazing movie"}]
        })

        const result=await m1.save()
        console.log(result)
    } catch (error) {
        console.log(error)
    }
}

export {createDoc};