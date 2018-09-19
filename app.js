const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');

let data = require('./data.json').data;
let currentID = data.length;

// app.use(bodyParser);

app.post('/messages', (req, res) => {
  res.send('messages');
});

app.get('/conversations/:conversation_id', (req, res) => {
  let thread = data.filter(c => {
    return (c.id === req.params.conversation_id);
  })
  res.json(thread)
});

// add route for error handling
app.get('/', (req, res) => {
  res.send('hello');
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
