function getMin() {
    var min = arguments[0];
    if (arguments.length >= 1) {
        for (var i = 1; i < arguments.length; i++) {
            min = (arguments[i] < min) ? arguments[i] : min;
        }
        return min;
    } else if (arguments.length === 0) {
        return "Invalid input data";
    }
}
alert(getMin(2,3,2,1));