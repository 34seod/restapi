const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

let USERS = [
  { id: 1, name: '서주희' },
  { id: 2, name: '뽕뿌직' },
  { id: 3, name: '레비' },
  { id: 4, name: '냥토끼' },
  { id: 5, name: '고성능 심심이' },
];

function sendJson(res, data) {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
}

// ===== STATIC =====
app.get('/', function(req, res) {
  res.sendFile('index.html');
});

// ======= API =======
app.get('/users', function(req, res) {
  sendJson(res, USERS);
});

app.get('/users/:id', function(req, res) {
  const id = req.params.id;
  const target_user = USERS.find((user) => String(user.id) === id);

  sendJson(res, target_user);
});

app.post('/users', function(req, res) {
  const lastId = USERS.slice().sort((a, b) => b.id - a.id)[0].id;
  const new_user = { id: lastId + 1, name: req.body.name };
  USERS.push(new_user);

  sendJson(res, new_user);
});

app.listen(3001);
