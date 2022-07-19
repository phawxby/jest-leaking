const { writeFileSync, readFileSync, mkdirSync, rmSync } = require('fs');
const { join } = require('path');

rmSync(join(__dirname, 'tests'), { force: true, recursive: true });
rmSync(join(__dirname, 'results'), { force: true, recursive: true });

mkdirSync(join(__dirname, 'tests'), { recursive: true });
mkdirSync(join(__dirname, 'results'), { recursive: true });

let testFile = readFileSync(join(__dirname, 'template.test.js'), { encoding: 'utf8' });
testFile = testFile.replace(`'results'`, `'../results'`)

for (let i = 0; i < 5000; i++) {
    const filename = join(__dirname, 'tests', `${i.toString().padStart(4, '0')}.test.js`);

    writeFileSync(filename, testFile);
}