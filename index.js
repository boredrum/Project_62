import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url';
import { createRequire } from 'node:module';
import fs, {promises} from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const PORT = process.env.PORT || 3000;
const app = express();
const filePath = path.join(__dirname, './package.json');

if(process.env.NODE_ENV == 'development'){
  console.log('development mode');
}else if(process.env.NODE_ENV == 'production'){
  console.log('production mode');
}


                    // Excercise 3

app.get('/', (req, res)=>{
  fs.readFile(filePath, (err, content) => {
    if(err){
      console.log(err);
    }else{
      res.send(`<h1>Wellcome</h1><h2>Json text:</h2><pre>${content}</pre>`);
    }
  });
})


                    // Excercise 4

// async function getData () {
//   const fileData = await promises.readFile(filePath)
//   return fileData
// }


// app.get('/', async (req, res)=>{
//   const fileData = await getData();
//   res.send(`<h1>Wellcome</h1><h2>Json text:</h2><pre>${fileData}</pre>`);
// });



app.listen(PORT, ()=> {
    console.log(`Server started on http://localhost:${PORT}`);
});