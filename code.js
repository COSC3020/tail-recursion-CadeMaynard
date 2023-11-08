function fib(n){    //For reference, both of these fibonacci functions have an offset of 1,
                    //so you input 1 to get the first member of the sequence.
    if(n < 2)
        return 1
    else
        return tailRecFib(1,1, n - 1)
}

function tailRecFib(prev1, prev2, n) {
    if(n == 1)
        return prev1;
    else
        return tailRecFib(prev1 + prev2, prev1, n - 1)
}

function fibTest(n) { //A fibonacci function to test against.
    x = 1
    y = 1
    for(i = 1; i < Math.ceil(n/2.); i++) {
        x+=y
        y+=x
    }
    if(n % 2 == 0)
        return y
    else 
        return x
}