import mongoose from "mongoose";
import 'dotenv/config'

//const stringLocal = "mongodb://127.0.0.1/backendCoder";

//const mongoURL = process.env.mongoURL 

export const connectMongoDB = async () => {
    try {
        mongoose.set('strictQuery', false)
        await mongoose.connect("mongodb+srv://arayamezajocelyn:FK43CDE9dmWDE5JE@cluster0.5vtpnzz.mongodb.net/backend_coder?retryWrites=true&w=majority&appName=Cluster0");
        console.log("Conectado con éxito a MongoDB");
    } catch (error) {
        console.log(error);
    }
};

