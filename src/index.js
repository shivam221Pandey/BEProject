/*
import mongoose  from "mongoose";
import { DB_NAME } from "./constants"; */
import dns from 'dns'
import dotenv from 'dotenv'
import connectDB from "./db/index.js";
import app from './app.js'

dns.setServers(["8.8.8.8", "1.1.1.1"]);
dotenv.config({
    path: './.env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Sserver is running at port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log('MONGO bd connection failed !!!', err)
})



















/*
import express from 'express'
const app = express();

( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (error) => {
            console.log("ERR: ", error);
            throw error
        })

        app.listen(process.env.PORT, ()=> {
            console.log(`App is listining on port ${process.env.PORT}`)
        })
    }catch (error) {
        console.log("ERROR", error)
        throw err
    }
})
    */