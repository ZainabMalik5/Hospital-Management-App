const mongoose=require('mongoose');
const colors=require('colors');
const connectDB=async()=>
{
try{
await mongoose.connect('mongodb+srv://zainabmalik5nm:Zainab123@doctor.gx58x9b.mongodb.net/doctorapp');

//console.log(`Mongodb Connected ${mongoose.connection.host}`.bgGreen.white);
}
catch(error)
{
//console.log(`MongoDB server issue ${error}`.bgRed.white);
}
};
module.exports=connectDB;
