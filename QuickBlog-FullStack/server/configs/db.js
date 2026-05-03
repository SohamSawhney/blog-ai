import mongoose from "mongoose";


const connectDB = async () =>{
    try {
        mongoose.connection.on('connected', ()=> console.log("Database Connected")
        )
        await mongoose.connect(`${process.env.MONGODB_URI}/.blogs`)
    } catch (error) {
        console.log(error.message);
            process.exit(1) // 🔥 VERY IMPORTANT
    }
}

export default connectDB;