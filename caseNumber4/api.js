const express = require('express')
const fetch = require('node-fetch')
const app = express()
const port = 3000

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.get('/posts', async (req, res) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'GET'
  })
    .then(res => {
      return res.json();
    })
    .catch(err => {
      console.log(err);
    })

  res.json(response);
})

app.post('/create', async (req, res) => {
  const response = fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(req.body),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then(res => {
      console.log(res);
      return res.json();
    })
    .catch(err => {
      console.log(err);
    })

  res.json(response);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})