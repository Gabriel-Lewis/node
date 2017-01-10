const express = require('express');

let app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World');
})

app.get('/users', (req, res) => {
  res.send({
    users: [
      {name: 'Gabriel'},
      {name: 'Kelly'}
    ]
  });
})

app.get('/not-found', (req, res) => {
  res.status(404).send({
    error: 'Page not found.',
    name: 'Node Test App'
  })
})

app.listen(port, console.log(`app running on ${port}`));

module.exports = {
  app
}
