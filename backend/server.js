import express from 'express';

import authRoutes from './routes/auth.route.js';
import movieRoutes from './routes/movie.route.js';


import { connectDB } from './configs/db.js';

const app = express();

app.use(express.json());

app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/movie', movieRoutes)

app.listen(5000, () =>{
    console.log('server is running: http://localhost:5000')
    connectDB()
})