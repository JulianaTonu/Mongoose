import User from "./user.model";

  
const createUserToDB= async ()=>{
    const user =new User({
        id:'344334',
        role:'student',
        password: 'lllaka',
        name:{
            firstName:'Lee',
            middleName:'ana',
            lastName:'Anu',
        },
        gender:'female',
        email:'dec23@gmail.com',
        contactNo:'01772983788',
        emergencyContactNo:'987874',
        presentAddress:'uganda',
        permanentAddress:'usa'
    
    });
    await user.save()
    return user
    // console.log('user', user)
}
createUserToDB()
export default createUserToDB;