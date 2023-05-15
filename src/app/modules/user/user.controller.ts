import { NextFunction, Request, Response } from "express";
import createUserToDB, { getUserFromDB, getUserbyIdFromDB } from "./user.service";

const createUSer=async (
    req:Request, 
    res:Response, 
    next: NextFunction
    )=> {
        const data =req.body;
const user = await createUserToDB(data)

    res.status(200).json({
        status:"success",
        data: user,
    });

}

export const getUsers = async (
    req:Request,
    res:Response,
    next:NextFunction,
)=>{
    const user = await getUserFromDB();

    res.status(200).json({
        status: "success",
        data: user,
    });
}

export const getUserByid =async (
    req:Request,
    res:Response,
    next:NextFunction,
)=>{
    const {id}= req.params
    const user = await getUserbyIdFromDB(id)

    res.status(200).json({
        status: "success",
        data:user,
    })
}

export default createUSer