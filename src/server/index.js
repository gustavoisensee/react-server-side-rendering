import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = (process.env.PORT || 3000);

require('./webpack.hotreloader')(app);

app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.text());
app.use(bodyParser.json());

require('./app')(app);

app.listen(port);
