import { IUser } from "./user.interface";
import User from "./user.model";

  
const createUserToDB= async (payload:IUser):Promise<IUser>=>{
    // const user =new User({
    //     id:'344334',
    //     role:'student',
    //     password: 'lllaka',
    //     name:{
    //         firstName:'Lee',
    //         middleName:'ana',
    //         lastName:'Anu',
    //     },
    //     gender:'female',
    //     email:'dec23@gmail.com',
    //     contactNo:'01772983788',
    //     emergencyContactNo:'987874',
    //     presentAddress:'uganda',
    //     permanentAddress:'usa'
    
    // });
const user = new User(payload)
    await user.save()
    return user
    // console.log('user', user)
}

export const getUserFromDB =async (): Promise<IUser[]>=>{
    const users =await User.find()
    return users; 
}

export const getUserbyIdFromDB = async (payload:string): Promise<IUser | null> =>{
    const user =await User.findOne({id: payload}, {name:1, contactNo:1})
    return user;
}

// createUserToDB()
export default createUserToDB;

