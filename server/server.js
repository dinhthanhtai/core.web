import path from 'path'
import express from 'express';
import devBundle from './devBundle';
import template from '../template';
const app = express();

devBundle.compile(app);

const CURRENT_WORKING_DIR = process.cwd()
app.use('/dist', express.static(path.join((CURRENT_WORKING_DIR, 'dist'))))
app.get('/', (req, res) => {
  res.status(200).send(template())
})


let port = process.env.PORT || 3000;
app.listen(port, (err) => {
  if(err) {
    console.log(err);
  }
  console.info('Server started on port: ', port)
})