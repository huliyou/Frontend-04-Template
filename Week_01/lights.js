function sleep(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
}
async function go() {
    while (true) {
        console.log('green');
        await sleep(10);
        console.log('yellow');
        await sleep(2);
        console.log('red');
        await sleep(5);
    }
}