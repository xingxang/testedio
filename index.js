const fs = require('fs');
const faker = require('faker');

const input = `Value: ${faker.hacker.abbreviation()}`;
// test
fs.writeFile('test.txt', input, () => console.log('build done'));
