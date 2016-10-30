var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

var serverMessage = [
  'Node app is running on port ' + app.get('port'),
  'Available collections:',
  ' * omw: On my way messages',
  ' * luv: Random displays of affection'
].join('\n');

app.get('/', function(request, response) {
  response.send(serverMessage);
});

app.get('/:collection/:name', function(request, response) {
    response.send(msg(request.params.collection, request.params.name));
});

var messages = {
  omw: [
      'OMW!',
      'On my way, ${name}',
      'I\'m coming home, ${name}',
      '${name}, I\'m coming!',
      'Com-ing!!',
      'I can not be away from you a second longer, my dear ${name}! Soon we will be together once more',
      'Longing to be with you, ${name}',
      'Marry me again, ${name}! I\'m coming home.',
      'Dinner better be ready by the time I\'m home.'
  ],
  luv: [
      'I love you, my dear ${name}!',
      '${name}, I long for the time we are together.',
      'Thinking of you'
  ]
};

function msg(collection, name) {
    return shuffle(messages[(collection || 'omw')]).replace('${name}', (name || 'Darling'));
}

function shuffle(array) {
    return array[Math.floor(Math.random() * array.length)];
}

app.listen(app.get('port'), function() {
  console.log(serverMessage);
});


