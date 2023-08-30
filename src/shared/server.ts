import 'dotenv/config';
import app from './app';
import environment from './configs/environment';


const PORT = environment.PORT;

//await bulkProducts()
app.listen(PORT, async () => { 
  console.info(`Listening at http://[::]:${PORT}`);
});
