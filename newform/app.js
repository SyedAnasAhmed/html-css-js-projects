
var email = document.getElementById("email")
var password = document.getElementById("password")


// function getinputs(){
//     localStorage.setItem( "user" , email.value)
// }






function signup(){
    var signname = document.getElementById("name")
    var signemail = document.getElementById("signemail")
    var signpass = document.getElementById("signpassword")  

    var userObj = {
        name: signname.value,
        email: signemail.value,
        password: signpass.value
    }


var getUsers = localStorage.getItem("users")

if(getUsers === null){
    localStorage.setItem("users" , JSON.stringify([userObj]))
    alert("Signup successfull")
    window.location.assign("./index.html")
}
else{
    var userparse = JSON.parse(getUsers)
    var emailcheck = JSON.parse.find(function (value , index){
        if(value.email === userObj.email){
                return true
        }
    })
}
if(emailcheck === undefined){
    userparse.push(userObj)
    localStorage.setItem("user" , JSON.stringify(userparse))
    alert("Signup successfull")
    window.location.assign("./index.html")

}
else {
    alert("email address already exists!")
}

}

function login() {
    var email = document.getElementById("email")
    var password = document.getElementById("password")


    var userCollection = JSON.parse(localStorage.getItem("users"))
    console.log("userCollection", userCollection)

    var userExist = userCollection.find(function (value, index) {
        console.log("value", value.email)

        if (value.email === email.value && value.password === password.value) {
            return value
        }
    })

    if (!userExist) {
        alert("email OR password invalid")
        return
    } else {
        alert("successfully login")
        localStorage.setItem("userLogin", JSON.stringify(userExist))
        window.location.replace("./dashboard.html")
    }
}