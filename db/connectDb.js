import mongoose from "mongoose";
const connectDb =async(DATABASE_URL)=>{
    try {
        await mongoose.connect('DATABASE_URL');
        comnsole.log("database coonected..");//connecting mongoose
    } catch (error) {
        console.log(error)
    }
};
export default connectDb;