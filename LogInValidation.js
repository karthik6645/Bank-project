// function login(){
//     var login= document.getElementById("logIn2").value
//     return login
// }
// function conPassword(){
//     var conPassword=document.getElementById("confirmPassword").value
//     return conPassword
// }
var userNameDefault="karthik123"
var passwordDefault="karthik123"
function userNamef(){
    console.log("in function")
    var userName=document.getElementById("userName").value
    document.getElementById("userNameVerify").style.color="red"
    if(userName.length>0&&userName!==userNameDefault){
        console.log("in user if")
        document.getElementById("userNameVerify").innerHTML="User name incorrect"
        return false
    }
    else {
        console.log("in user else")
        document.getElementById("userNameVerify").innerHTML=""
    }
}
function passwordf(){
    var password=document.getElementById("passwordInLogin").value
document.getElementById("passwordInVerify").style.color="red"
    if(password.length>0&&password!==passwordDefault){
        console.log("in pass if")
       document.getElementById("passwordInVerify").innerHTML="Password incorrect"
       return false
    }
    else{
        console.log("in pass else")
        document.getElementById("passwordInVerify").innerHTML=""
    }
}
function validate(){
    var res=true
    if(res===false){
        return false
    }
    res=userNamef()
    if(res===false){
        return false
    }
    res=passwordf()
    return res
}
