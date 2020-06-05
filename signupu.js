var spantag=document.getElementsByTagName("span")
document.getElementById("progress").style.display="none"
function add(){
    console.log("hi")
    return true
    }
    console.log(add)
    add()
    console.log(add())
    console.log()
    // add()
    // console.log(add())
    function login(){
        var login= document.getElementById("logIn2").value
        spantag[0].style.color="red"
        if(login.length>0&&login.length<8){
       spantag[0].innerHTML="Choose appropriate login id"
       return false
        }
        else if(login.length>=8&&login.length<=15){
            spantag[0].style.color="green"
           spantag[0].innerHTML="Login id avaliable"
        }
        else{
           spantag[0].innerHTML=""
        }
        console.log(login)
       }
       function passowrd(){
       var phoneNumber=document.getElementById("password").value
       passwordCheck=document.getElementById("password").value
       console.log(phoneNumber)
       if(phoneNumber.length>0&&phoneNumber.length<=3){
           spantag[1].innerHTML="Weak password" 
           spantag[1].style.color="red"
           document.getElementById("progress").value=30
           document.getElementById("progress").style.margin="0px 0px -25px 420px"
           document.getElementById("progress").style.display="block"
           return false
       }
       else if(phoneNumber.length>=4&&phoneNumber.length<10){
           spantag[1].innerHTML="Good password" 
           spantag[1].style.color="blue"
           document.getElementById("progress").value=70
           document.getElementById("progress").style.margin="0px 0px -25px 420px"
           document.getElementById("progress").style.display="block"
           
       }
       else if(phoneNumber.length>=10){
           spantag[1].innerHTML="Strong password" 
           spantag[1].style.color="green"
           document.getElementById("progress").value=100
           document.getElementById("progress").style.margin="0px 0px -25px 420px"
           document.getElementById("progress").style.display="block"
       }
       else {
           spantag[1].innerHTML="" 
           document.getElementById("progress").style.display="none"
       }
       }    