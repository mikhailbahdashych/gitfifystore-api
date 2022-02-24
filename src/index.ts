import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import * as http from 'http';

import routes from './routes';

const app = express();

const httpServer = http.createServer(app);

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json({ limit: '15mb' }));

app.use('/', routes);

const port = process.env.PORT || 3000;

httpServer.listen(process.env.PORT, () => {
    return console.log(`Api is listening on port: ${port}`);
});
