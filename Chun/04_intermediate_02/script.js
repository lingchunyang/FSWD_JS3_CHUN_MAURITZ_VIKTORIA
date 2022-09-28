function fizzBuzz() {
    let output = ''
    for (let i = 1; i < 101; i++) {
        let str = '';
        if (i % 3 === 0 || i % 5 === 0) {
            if (i % 3 === 0) {
                str = 'Fizz';
            }
            if (i % 5 === 0) {
                str = str + 'Buzz';
            }
        } else {
            str = i;
        }
        output = output + ", " + str;

        console.log(output);
    }

    document.getElementById('content').innerHTML = output;
}

fizzBuzz();