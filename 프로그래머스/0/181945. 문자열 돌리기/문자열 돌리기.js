const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    const str = input[0];
    const rows = str.split(' ');
    const maxLen = Math.max(...rows.map(row => row.length));
    let result = '';

    for (let i = 0; i < maxLen; i++) {
        for (let j = rows.length - 1; j >= 0; j--) {
            result += rows[j][i] ? rows[j][i] : ' ';
        }
        result += '\n';
    }

    console.log(result.trim());
});
