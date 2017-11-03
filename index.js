const fs = require('fs');
const faker = require('faker');
// 222
const input = `Value: ${faker.hacker.abbreviation()}`;

fs.writeFile('test.txt', input, () => console.log('build done'));
