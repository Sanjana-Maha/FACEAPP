(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


console.log("we are in signup section")
let userdetails = {
    users: [
        {
            "firstname": "Devendra",
            "lastname": "Solanki",
            "username": "webdeveloperdev",
            "usergender": "male",
            "useremail": "talk2devendra.solanki@gmail.com",
            "password": "Bhopal@123"
        }
    ]
}

document.addEventListener("submit", e => {
    e.preventDefault()
    let maleinp = document.getElementById("maleinp")
    let femaleinp = document.getElementById("femaleinp")
    let usergender = ""
    console.log(maleinp.checked, femaleinp.checked)
    if (maleinp.checked == true) {
        usergender = "male"
    }
    else if (usergender == true) {
        usergender = "female"
    }
    else {
        usergender = "null"
    }
    const firstname = document.getElementById("firstnameinp").value
    const lastname = document.getElementById("lastnameinp").value
    const useremail = document.getElementById("emailinp").value
    // const usergender=document.getElementById("genderinp").value
    const username = document.getElementById("usernameinp").value
    const password = document.getElementById("passwordinp").value
    let newaccount = {
        "firstname": firstname,
        "lastname": lastname,
        "username": username,
        "usergender": usergender,
        "useremail": useremail,
        "password": password
    }
    userdetails.users.push(newaccount)
    window.localStorage.setItem("userdetailsStorage", JSON.stringify(userdetails))
    console.log(userdetails)
    
});


const fs=require('fs')
 const newObj={"sdfsdf": "accds3eord", "coerdlor": "redfdsd"}
 const jsonString=JSON.stringify(newObj)
 console.log(jsonString)

 fs.writeFile('./user.json',JSON.stringify(newObj),err=>{
    if (err){
        console.log(err);
    }
    else{
        console.log("file successfully written")
    }
 })
// fs.readFileSync('user.json',"utf-8",(err,jsonString)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         try{
//             const data=JSON.parse(jsonString)
//             console.log(data)
//         }
//         catch(err){
//             console.log("error parsing json",err)
//         }
//     }
// })
},{"fs":2}],2:[function(require,module,exports){

},{}]},{},[1]);
