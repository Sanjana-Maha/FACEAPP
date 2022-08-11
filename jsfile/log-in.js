console.log("we are in login page")
if(window.localStorage.getItem("userdetailsStorage")==null){

    let userdetails = {
        users: [
              {
                "firstname": "Sanjana",
                "lastname": "Mala",
                "username": "sanju",
                "usergender": "female",
                "useremail": "sanja@gmail.com",
                "password": "sanju01"
            }
        ]
    }
    window.localStorage.setItem("userdetailsStorage", JSON.stringify(userdetails))
}
let userdatabase = JSON.parse(window.localStorage.getItem("userdetailsStorage"))
const loginbtn = document.getElementById("loginbtn")
let userarray = userdatabase.users
console.log(userdatabase)
// data.forEach(element => {
//     console.log(element)
// });
document.addEventListener("submit", e => {
    e.preventDefault()
    const username = document.getElementById("usernameinp").value
    const password = document.getElementById("passwordinp").value
    let getusername = []
    let getpassword = []
    
    userarray.forEach(element => {
        // console.log(element.username)
        getusername.push(element.username)
        getpassword.push(element.password)
    });
    if (getusername.includes(username) == true && getpassword.includes(password) == true && getusername.indexOf(username) == getpassword.indexOf(password)) {
        alert("welcome");
        userarray.forEach(element=>{
            if (element.username==username && element.password==password) {
                currentuserdetails=element
                window.sessionStorage.setItem("currentuser",JSON.stringify(element))
                window.location="index.html"
            }
        })

    }
    else if (username == "" && password == "") {
        let usernamemessage = document.getElementById("usernamemessage")
        usernamemessage.innerText = "Username cannot be empty"
        let passwordmessage = document.getElementById("passwordmessage")
        passwordmessage.innerText = "Password cannot be empty"
        setTimeout(() => {
            passwordmessage.innerText = ""
            usernamemessage.innerText = ""

        }, 2000);
    }
    else if (username == "") {
        let usernamemessage = document.getElementById("usernamemessage")
        usernamemessage.innerText = "Username cannot be empty"
        setTimeout(() => {
            usernamemessage.innerText = ""
            
        }, 2000);
    }
    else if (password == "") {
        let passwordmessage = document.getElementById("passwordmessage")
        passwordmessage.innerText = "Password cannot be empty"
        setTimeout(() => {
            passwordmessage.innerText = ""
        }, 2000);
    }
    else {
        let invalidmessage = document.getElementById("invalidmessage")
        invalidmessage.style.display = "block"
    
        setTimeout(() => {
    
            invalidmessage.style.display = "none"
        }, 2000);
    }
  
    
    
})

function forgotpassword() {
    let loginsec=document.getElementById("loginsec")
    let forgotsec=document.getElementById("forgotsec")
    forgotsec.style.display="grid"
    loginsec.style.display="none"
}

const forgotbtn=document.getElementById("forgotbtn")
const forgotemailinp=document.getElementById("forgotemailinp")

forgotbtn.addEventListener("click",e=>{
    e.preventDefault()
    // console.log(userdatabase)
    let useremaildata=[]
    userdatabase.users.forEach(element => {
        // console.log(forgotemailinp.value)
        useremaildata.push(element.useremail)
        if (element.useremail==forgotemailinp.value) {
            console.log("correct mail")
            let tempmessage={
                Webname:"webname",
                firstname:element.firstname,
                message:element.password,
                username:element.username,
                useremail:forgotemailinp.value
            }
            emailjs.send("service_uf7m667","template_5pmjndt",tempmessage)
            .then(function (res) {
                console.log(res)
                alert("Check your email")
            })
        }
    });

    if(useremaildata.includes(forgotemailinp.value)==false){
        let forgotemailalertmessage=document.getElementById("forgotemailalertmessage")
        if (forgotemailinp.value=="") {
            forgotemailalertmessage.innerText="Input your email"
            setTimeout(() => {

                forgotemailalertmessage.innerText = ""
            }, 2000); 
        }
        else{
            forgotemailalertmessage.innerText="This email is not linked to any account"
            setTimeout(() => {

                forgotemailalertmessage.innerText = ""
            }, 2000);

        }
    }

})

let backsys=document.getElementById("back").addEventListener("click",function () {
    window.location.reload()
})
