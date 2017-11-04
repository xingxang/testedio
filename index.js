const fs = require('fs');
// test 2221
function makeid() {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < 5; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
}

const input = `Value: ${makeid()}`;

fs.writeFile('test.txt', input, () => console.log('build done'));
fs.writeFile('test2.txt', input, () => console.log('build done'));
