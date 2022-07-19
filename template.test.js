const { promises: fs } = require('fs');
const { join } = require('path');
const http = require('http');
const https = require('https');
const v8 = require('v8');

const filename = join(__dirname, 'results', `${process.version}.txt`);

afterEach(async() => {
    const memory = process.memoryUsage().heapUsed / 1024 / 1024;

    const msg = `${__filename} - memory ${memory.toFixed(2)}MB\n`;

    await fs.appendFile(filename, msg);
});

test(`test`, async () => {
    expect(true).toBeTruthy();
});

test.skip('heap', () => {
    const memory = process.memoryUsage().heapUsed / 1024 / 1024;

    expect(memory).toBeLessThan(150);
});