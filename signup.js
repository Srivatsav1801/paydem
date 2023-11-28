var users = JSON.parse(localStorage.getItem('users')) || [];

let button1 = document.querySelector("button");
button1.addEventListener("click",() =>{
    let email1 = document.getElementById("email").value;
    var username1 = document.getElementById("username").value;
    var password1 = document.getElementById("password").value;
    var dob1 = document.getElementById("dob").value;
    console.log(saveUserData(email1,username1,password1,dob1));    
})

function saveUserData(email, username, password, dob) {
    let user = {
        email: email,
        username: username,
        password: password,
        dob: dob
    };

    // Check if user already exists
    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email || users[i].username == username) {
            console.log(users);
            var info = document.getElementById("info");
            info.innerHTML = "User already exist"
            return "User already exists";
        }
    }

    // If user does not exist, save the new user
    users.push(user);
    console.log(users);
    localStorage.setItem('users', JSON.stringify(users));  
    window.open("login.html");
    return "User saved successfully";
}