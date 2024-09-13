import express from 'express';
import router from './routes/auth.route.js';
import { connectDB } from './configs/db.js';

const app = express();

app.use(express.json());

app.use('/api/v1/auth', router)

app.listen(5000, () =>{
    console.log('server is running: http://localhost:5000')
    connectDB()
})