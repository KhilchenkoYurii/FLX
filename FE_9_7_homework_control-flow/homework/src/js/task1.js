let login = prompt("Input login: ", '');
if (login === null || login === '') {
    alert("Canceled.");
} else {
    if (login.length < 4) {
        alert("I don't know any users having name length less than 4 symbols!")
    } else {
        if (login !== "User" && login !== "Admin") {
            alert("I don’t know you!");
        } else {
            let password = prompt("Input password", '');
            if (password === null || password === "") {
                alert("Canceled.");
            } else {
                if (password !== "UserPass" && password !== "RootPass") {
                    alert("Wrong password!");
                } else {
                    var time = new Date().getHours();
                    if (login === "Admin" && password === "RootPass") {
                        if (time < 20) {
                            alert("Good day, dear Admin!");
                        } else {
                            alert("Good evening, dear Admin!");
                        }
                    } else {
                        if (login === "User" && password === "UserPass") {
                            if (time < 20) {
                                alert("Good day, dear User!");
                            } else {
                                alert("Good evening, dear User!");
                            }
                        } else {
                            alert("Wrong password!");
                        }
                    }
                }
            }
        }
    }
}
