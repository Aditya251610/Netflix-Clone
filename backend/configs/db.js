import mongoose from 'mongoose'

export const connectDB = async () => {
    try{
        await mongoose.connect('mongodb+srv://Harsh:Harsh%402021@cluster0.tvgsb1g.mongodb.net/netflix_db?retryWrites=true&w=majority&appName=Cluster0')
        console.log('Mongo DB connected')
    } catch(error){
        console.log(error)
        process.exit(1)
    }
}