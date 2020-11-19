const express = require('express');
const morgan = require('morgan');
const path = require('path');
const { db, Page, User } = require('./models');
const layout = require('./views/layout')

db.authenticate()
  .then(() => {
    console.log('connected to the database');
  })

const staticMiddleware = express.static(
  path.join(__dirname + 'public')
);

const app = express();

app.use(morgan('dev'));
app.use(staticMiddleware);
app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send(layout(''));
});

//.sync

const init = async () => {
  await db.sync();

  app.listen(3000, () => {
    console.log('App listening in port!')
  });
}

init();
