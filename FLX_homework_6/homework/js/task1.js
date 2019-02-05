var a = prompt(" Input (a) for quadratic equation(ax2 + bx + c = 0) (a!=0)", '');
var b = prompt(" Input (b) for quadratic equation(ax2 + bx + c = 0)", '');
var c = prompt(" Input (c) for quadratic equation(ax2 + bx + c = 0)", '');
if (isNaN(a) === false && isNaN(b) === false && isNaN(c) === false && a !== '0' && a !== '' && b !== '' && c !== '') {
    if (b !== '0' && c !== '0') {
        var d = b * b - 4 * a * c;
        if (d < 0) {
            alert("No solution ");
        } else {
            var x1 = -b + Math.pow(d, 1 / 2);
            var x2 = -b - Math.pow(d, 1 / 2);
            alert('x1= ' + x1 + ' x2= ' + x2);
        }
    } else {
        alert('x=0');
    }
} else {
    alert("Inalid input data");
}


