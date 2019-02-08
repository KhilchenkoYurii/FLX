function formatTime(value) {
    if (typeof value !== Number && !(value % 1) && (value >= 0)) {
        var hours = parseInt(value / 60);
        var days = parseInt(hours / 24);
        var minutes = parseInt(value - hours * 60);
        return days + " day(s) " + (hours - days * 24) + " hour(s) " + minutes + " minute(s)."
    } else {
        return "Invalid input data";
    }
}
alert(formatTime(2221));