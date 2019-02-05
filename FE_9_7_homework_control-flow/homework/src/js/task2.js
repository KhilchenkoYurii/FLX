for (; ;) {
    var toplay = confirm("Do you want to play a game?");
    if (toplay === false) {
        alert("'You did not become a millionaire, but can.", '');
        break;
    } else {
        let maxnumb = 5;
        let randnumb = Math.floor(Math.random() * maxnumb);
        let anserw;
        let attempt = 3;
        let prize = [10, 5, 2];
        let sum = 0;
        let i = 0;
        while (attempt !== 0) {
            let string1 = "Enter a number from 0 to " + maxnumb + "\n" + "Attempts left: " + attempt + "\n";
            let string2 = "Total prize: " + sum + "\n" + "Possible priza on current attempt: " + prize[i];
            anserw = parseFloat(prompt(string1 + string2, ""));
            if (randnumb === anserw) {
                var toplay2 = confirm("Congratulation!   Your prize is: " + prize[i] + " Do you want to continue?");
                sum += prize[i];
                if (toplay2 === true) {
                    for (var j = 0; j < 3; j++) {
                        prize[j] *= 2;
                    }
                    maxnumb += 5;
                    randnumb = Math.floor(Math.random() * maxnumb);
                    i = 0;
                    attempt = 3;
                    continue;
                } else {
                    alert("Thank you for a game. Your prize is: " + sum, '');
                    break;
                }
            } else {
                ++i;
                attempt -= 1;
            }
        }
        if (attempt === 0) {
            alert("You lose!", '');
        }
    }
}