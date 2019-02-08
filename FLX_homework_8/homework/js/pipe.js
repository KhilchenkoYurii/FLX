function pipe(value) {
    for (var i = 0; i < arguments.length - 1; i++) {
        value += 1;
    }
    return value;
}
alert(pipe(2, 'ss', 'aaa', 1));