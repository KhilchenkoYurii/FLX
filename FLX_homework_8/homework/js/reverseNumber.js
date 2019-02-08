function reverse_a_number(n) {
    if (arguments.length > 1 || arguments.length === 0) {
        return "Invalid input data";
    } else {
        n = n + "";
        return n.split("").reverse().join("");
    }
}
alert(reverse_a_number(32243));