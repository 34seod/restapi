const express = require('express');
var cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
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
  const { id } = req.params;
  const target_user = USERS.find((user) => String(user.id) === id);

  sendJson(res, target_user);
});

app.post('/users', function(req, res) {
  const lastId = USERS.slice().sort((a, b) => b.id - a.id)[0].id;
  const new_user = { id: lastId + 1, name: req.body.name };
  USERS.push(new_user);

  sendJson(res, new_user);
});

app.post('/test', function(req, res) {
  // console.log(req);
  console.log("test------");
  sendJson(res, 0);
});

app.put('/users/:id', function(req, res) {
  const { id } = req.params;
  const target_user = USERS.find((user) => String(user.id) === id);
  target_user.name = req.body.name;

  sendJson(res, target_user);
});

app.delete('/users/:id', function(req, res) {
  const { id } = req.params;
  USERS = USERS.filter((user) => String(user.id) !== id);

  sendJson(res, USERS);
});

app.listen(3001);
