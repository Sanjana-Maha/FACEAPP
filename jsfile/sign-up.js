
console.log("we are in signup section")
if(window.localStorage.getItem("userdetailsStorage")==null){

    let userdetails = {
        users: [
            {
                "firstname": "Devendra",
                "lastname": "Solanki",
                "username": "webdeveloperdev",
                "useremail": "talk2devendra.solanki@gmail.com",
                "password": "Bhopal@123"
            }
        ]
    }
    window.localStorage.setItem("userdetailsStorage", JSON.stringify(userdetails))
}


document.addEventListener("submit", e => {
    e.preventDefault()
    // let maleinp = document.getElementById("maleinp")
    // let femaleinp = document.getElementById("femaleinp")
    // let usergender = ""
    // function genderfunk() {
    //     if (maleinp.checked == true) {
    //         usergender = "male"
    //     }
    //     else if (femaleinp.checked == true) {
    //         usergender = "female"
    //     }
    //     else {
    //         usergender = "null"
    //     }
    // }
    // genderfunk()
    let userdetailsdata = JSON.parse(window.localStorage.getItem("userdetailsStorage"))
    const firstname = document.getElementById("firstnameinp")
    const lastname = document.getElementById("lastnameinp")
    const useremail = document.getElementById("emailinp")
    const username = document.getElementById("usernameinp")
    const password = document.getElementById("passwordinp")


    let usergetdetails = JSON.parse(window.localStorage.getItem("userdetailsStorage")).users
    let newaccount = {
        "firstname": firstname.value,
        "lastname": lastname.value,
        "username": username.value,
        "useremail": useremail.value,
        "password": password.value
    }
    let getusername = []
    usergetdetails.forEach(element => {
        getusername.push(element.username)
    });
    let firstnamemessage = document.getElementById("firstnamemessage")
    let lastnamemessage = document.getElementById("lastnamemessage")
    let useremailmessage = document.getElementById("useremailmessage")
    let usernamemessage = document.getElementById("usernamemessage")
    let passwordmessage = document.getElementById("passwordmessage")

    let formelements=[[ firstname.value,firstnamemessage],[lastname.value,lastnamemessage],[useremail.value,useremailmessage],[username.value,usernamemessage],[password.value,passwordmessage]]
    formelements.forEach(element => {
        if (element[0]=="") {
            element[1].innerText="This field can't be empty"
            setTimeout(() => {
            element[1].innerText=""
            }, 2000);
        }
    
    });
    if (getusername.includes(username.value) == true) {
        console.log("username already exits")
        if (username.value != "") {
            usernamemessage.innerText = "Username already exist"
            setTimeout(() => {
                usernamemessage.innerText = ""
            }, 2000);
        }
    }
    else {
        userdetailsdata.users.push(newaccount)
        alert("Success: your account has been created")
        window.location="/log-in.html"
    }
    window.localStorage.setItem("userdetailsStorage", JSON.stringify(userdetailsdata))
});