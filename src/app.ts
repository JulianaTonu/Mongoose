import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { Schema, model } from 'mongoose';


import createRoute from './app/modules/user/user.route'

const app: Application = express()
const port = 3000

// using cors //
app.use(cors())


//parse data
app.use(express.json())
app.use(express.urlencoded({extended:true}))


app.use("/api/v1/user", createRoute)
  export default app;