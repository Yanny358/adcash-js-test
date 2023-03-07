import express from 'express'
import config from 'config'
import connection from './utils/connection';
import routes from './routes';


const port = config.get<number>('port')
const app = express();

app.listen(port , async() => {
    console.log(`'running at port: ${port}`);
    await connection();
    routes(app);
})