const args = process.argv.slice(2);
let sum = 0;
for (let index = 0; index < args.length; index++) {
    no = Number(args[index]);
    sum += no;
}
console.log(sum);
