let total = 0;

process.argv.splice(2).forEach((e) => {
    total += (Number(e) || 0);
});

console.log(total);