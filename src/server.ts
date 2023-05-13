
import mongoose from 'mongoose';
import app from './app'

const port: number= 3000



async function bootstrap() {

    try{
        await mongoose.connect('mongodb://127.0.0.1:27017/mongoose-practics');
        console.log('Database connected successfully tonu');
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
          })
    } catch(err){
        console.log('failed to connect database', err)
    }
   
  
  }
bootstrap()
