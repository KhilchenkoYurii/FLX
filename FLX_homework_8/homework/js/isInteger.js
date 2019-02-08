function isInteger(int) {
    return typeof int === 'number' && Number.isFinite(int) && !(int % 1);
}
alert(isInteger(2.1));