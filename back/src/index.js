import express from 'express';
import mongoose from 'mongoose';
import config from './config/config';
import cors from 'cors';
import morgan from "morgan";
import controller from './controller';    

const app = express();

mongoose.connect(config.mongoUrl, {
    useMongoClient: true }, ()=>{
    console.log('DB initialized');
});

app.use(morgan("dev"))
app.use(cors());
app.use('/cine', controller)



app.listen(config.port,() => {
    console.log(`Server running on port ${config.port}`);
});


export default app; 