/*
A script that takes input from the command line and prints it
*/
//process.stdin.setEncoding('utf8');
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('readable', () => {
    const name = process.stdin.read()
    process.stdout.write(`Your name is: ${name}\n`);
});

process.stdin.on('end', () => {
    process.stdout.write('This important software is now closing\n');
});
