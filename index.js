var express = require('express');
var app = express();

const MESSAGES = [
  'OMW, ${name}',
  'On my way, ${name}',
  'I\'m coming home, ${name}',
  '${name}, I\'m coming!',
  'Com-ing!!',
  'I can not be away from you a second longer, my dear ${name}! I will be home in 5',
  'Longing to be with you, ${name}',
  'Marry me again, ${name}! I\'m coming home.',
  'Dinner better be ready by the time I\'m home.'
];

function getRandomMessage(name) {
  'use strict';
  let randomNumber = Math.floor(Math.random() * MESSAGES.length);
  return MESSAGES[randomNumber].replace('${name}', name);
}

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('');
});

app.get('/:name', function(request, response) {
  'use strict';
  let name = request.param('name', 'Darling');
  response.send(getRandomMessage(name));
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});


