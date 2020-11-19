const express = require('express');
const morgan = require('morgan');
const path = require('path');
const staticMiddleware = express.static(
  path.join(__dirname + 'public')
);

const app = express();

app.use(morgan('dev'));
app.use(staticMiddleware);
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('', (req, res) => {
  res.send('Hello CHEESE')
});


app.listen(3000, () => {
  console.log('App listening in port!')
});
