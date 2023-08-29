import 'dotenv/config';
import express from 'express';
import environment from './configs/environment';
const App = express();
const PORT = environment.PORT

App.get('/', (req, res) => {    
    console.log("RECEIVED REQUEST")
    res.send({up:true, port:PORT});
  });
  
App.listen(PORT, ()=>{
    console.info(`Listening at http://[::]:${PORT}`)
})