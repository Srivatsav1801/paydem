var users = JSON.parse(localStorage.getItem('users'));
let button1 = document.querySelector("button");

button1.addEventListener("click",() =>{
    var username1 = document.getElementById("username").value;
    var password1 = document.getElementById("password").value;
    console.log(sign_in(username1,password1));    
})

function sign_in(username, password) {
    let user = {
        username: username,
        password: password,
    };

    // Check if user already exists
    for (let i = 0; i < users.length; i++) {
        if (users[i].password == password || users[i].username == username) {
            var info = document.getElementById("info");
            window.open("dashboard.html");
            return "signing in";
        }
    }

    // If user does not exist, save the new user
    var info = document.getElementById("info");
    info.innerHTML = "User doesn't exist";
    return "User doesn't exist";
}