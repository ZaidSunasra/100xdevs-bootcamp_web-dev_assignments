/*
Write a function that calculates the time (in seconds) it takes for the JS code to calculate sum from 1 to n, given n as the input.
Try running it for
1. Sum from 1-100
2. Sum from 1-100000
3. Sum from 1-1000000000
Hint - use Date class exposed in JS
*/

function calculateTime(n) {
    const start = new Date();
    let sum = 0;
    for(let i = 0; i <=n; i++){
        sum += i;
    }
    const end = new Date();

    console.log((end - start) / 1000);   
}

const hunrdred = calculateTime(100);
const hundredThousand = calculateTime(100000)
const billion = calculateTime(1000000000);
const tenBillion = calculateTime(10000000000)

