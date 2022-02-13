const app = require('express')();
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const http = require('http');

import routes from './routes';

const httpServer = http.createServer(app);

dotenv.config();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json({ limit: '15mb' }));

app.use('/', routes);

const port = process.env.PORT || 3000;

httpServer.listen(process.env.PORT, () => {
    return console.log(`Api is listening on port: ${port}`);
});
