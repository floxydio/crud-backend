import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js'

const app = express();
const port = 4000;

app.use(bodyParser.json());

app.use('/users', userRoutes);
app.get('/', (req,res) => res.send('Hello from homepage'));




app.listen(port, () => console.log(`Running at ${port}`));

