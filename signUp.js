var spantag=document.getElementsByTagName("span")
document.getElementById("progress").style.display="none"
var passwordCheck
function validate(){
    var res=true
    if(res===false){
        console.log("0")
       return res
    }
    console.log(`0 ${res}`)
    res=login()
    if(res===false){
        console.log("1")
        return res
     }
    console.log(`1 ${res}`)
    res=passowrd()
    if(res===false){
        console.log("2")
        return res
     }
    console.log(`2 ${res}`)
    res=fsVerify()
    if(res===false){
        console.log("3")
        return res
     }
    console.log(`3 ${res}`)
    res=phoneval()
    if(res===false){
        console.log("4")
        return res
     }
    console.log(`4 ${res}`)
    res=dobf()
    if(res===false){
        console.log("5")
        return res
     }
    console.log(`5 ${res}`)
    res=mnVerify()
    if(res===false){
        console.log("6")
        return res
     }
    console.log(`6 ${res}`)
    res=fnVerify()
    if(res===false){
        console.log("7")
        return res
     }
    console.log(`7 ${res}`)
    res=panVerify()
    if(res===false){
        console.log("8")
        return res
     }
    console.log(`8 ${res}`)
    res= aadharf1()
    if(res===false){
        console.log("9")
        return res
     }
    console.log(`9 ${res}`)
    res=pinf()
    if(res===false){
        console.log("10")
        return res
     }
    console.log(`10 ${res}`)
    res=companyNamef()
    if(res===false){
        console.log("11")
        return res
     }
    console.log(`11 ${res}`)
    res=nomineef()
    if(res===false){
        console.log("13")
        return res
     }
    console.log(`12 ${res}`)
    res=nomineePhonef()
    console.log(`13 ${res}`)
    return res
}
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

function conPassword(){
    var conPassword=document.getElementById("confirmPassword").value
    spantag[2].style.color="red"
    if(passwordCheck!==conPassword){
        spantag[2].innerHTML="Password does not match"
        return false
    }
    else{
        spantag[2].innerHTML=""
    }
}
function fsVerify(){
    firstName=document.getElementById("firstName").value
    spantag[3].style.color="red"
     if(firstName.length<3&&firstName.length>0){
        spantag[3].innerHTML="First Name should contain minimum 3 characters"
        return false
    }
    else if(firstName.length>20){
        spantag[3].innerHTML="First Name should contain maximum 20 characters"
        return false
    }
    else{
        spantag[3].innerHTML=""
    }
    console.log(firstName.length)
console.log(spantag[3])
}
function email1(){
    var email=document.getElementById("email").value
    console.log(typeof email)
}
function phoneval(){
    var phoneNumber=document.getElementById("phoneNumber").value
    spantag[6].style.color="red"
if(isNaN(phoneNumber)){
spantag[6].innerHTML="Phone number should contain only digits"
return false
}
else if(phoneNumber.length<10&&phoneNumber.length>0){
    spantag[6].innerHTML="Phone number is less than 10 digits"
    return false
}
else if(phoneNumber.length>10){
    spantag[6].innerHTML="Phone number is more than 10 digits"
    return false
}
else if(phoneNumber.charAt(0)<6&&phoneNumber.length>0){
    spantag[6].innerHTML="Indian standard number should start from 6, 7, 8 or 9" 
    return false 
}
else{
    spantag[6].innerHTML=""
}
console.log(phoneNumber)
}
function dobf(){
    spantag[7].style.color="red"
    var year=""
    var tag=document.getElementById("dob")
    console.log(tag)
   var dob=document.getElementById("dob").value
   console.log(dob)
   var string=[dob[0],dob[1],dob[2],dob[3]]
   console.log(string)
   for(let i=0;i<string.length;i++){
      year+=string[i]
   }
   var number=new Date().getFullYear()-Number(year)
   console.log(number)
  if(number<11){
    spantag[7].innerHTML="person should be more than 10 years of age to open an account"
    return false
  }
  else{
    spantag[7].innerHTML=""
  }
}
function mnVerify(){
    firstName=document.getElementById("motherName").value
    spantag[8].style.color="red"
     if(firstName.length<3&&firstName.length>0){
        spantag[8].innerHTML="Name should contain minimum 3 characters"
        return false
    }
    else if(firstName.length>20){
        spantag[8].innerHTML="Name should contain maximum 20 characters"
        return false
    }
    else{
        spantag[8].innerHTML=""
    }
    console.log(firstName.length)
console.log(spantag[8])
}
function fnVerify(){
    firstName=document.getElementById("fatherName").value
    spantag[10].style.color="red"
     if(firstName.length<3&&firstName.length>0){
        spantag[10].innerHTML="Name should contain minimum 3 characters"
        return false
    }
    else if(firstName.length>20){
        spantag[10].innerHTML="Name should contain maximum 20 characters"
        return false
    }
    else{
        spantag[10].innerHTML=""
    }
    console.log(firstName.length)
console.log(spantag[10])
}
function panVerify(){
var phoneNumber=document.getElementById("panNumber").value
console.log(phoneNumber)
    spantag[12].style.color="red"
if(phoneNumber.length<10&&phoneNumber.length>0){
    spantag[12].innerHTML="PAN number is less than 10 characters"
    return false
}
else if(phoneNumber.length>10){
    spantag[12].innerHTML="PAN number is more than 10 characters"
    return false
}
else{
    spantag[12].innerHTML=""
}
console.log(phoneNumber)
}
function aadharf1(){
    var phoneNumber=document.getElementById("aadhar").value
    spantag[13].style.color="red"
if(isNaN(phoneNumber)){
spantag[13].innerHTML="AADHAR number should contain only digits"
return false
}
else if(phoneNumber.length<12&&phoneNumber.length>0){
    spantag[13].innerHTML="AADHAR number is less than 12 digits"
    return false
}
else if(phoneNumber.length>12){
    spantag[13].innerHTML="AADHAR number is more than 12 digits"
    return false
}
else{
    spantag[13].innerHTML=""
}
console.log(phoneNumber)
}
function copy2(){
    var copy1=document.form.checkbox2
    
    if(copy1.checked){
    var address=document.getElementById("addressCor").value
var perAddress=document.getElementById("PreAddress")
perAddress.value=address
    }
    else{
        document.getElementById("PreAddress").value=""
    }
}
function pinf(){
    var phoneNumber=document.getElementById("pincode").value
    spantag[16].style.color="red"
if(isNaN(phoneNumber)){
spantag[13].innerHTML="Pincode should contain only digits"
return false
}
else if(phoneNumber.length<6&&phoneNumber.length>0){
    spantag[16].innerHTML="Pincode is less than 6 digits"
    return false
}
else if(phoneNumber.length>6){
    spantag[16].innerHTML="Pincode is more than 6 digits"
    return false
}
else{
    spantag[16].innerHTML=""
}
console.log(phoneNumber)
}
function companyNamef(){
    firstName=document.getElementById("companyName").value
    spantag[17].style.color="red"
     if(firstName.length<3&&firstName.length>0){
        spantag[17].innerHTML="Name should contain minimum 3 characters"
        return false
    }
    else if(firstName.length>20){
        spantag[17].innerHTML="Name should contain maximum 20 characters"
        return false
    }
    else{
        spantag[17].innerHTML=""
    }
    console.log(firstName.length)
console.log(spantag[17])
}
function nomineef(){
    firstName=document.getElementById("nomineetName").value
    spantag[21].style.color="red"
     if(firstName.length<3&&firstName.length>0){
        spantag[21].innerHTML="First name should contain minimum 3 characters"
        return false
    }
    else if(firstName.length>20){
        spantag[21].innerHTML="First name should contain maximum 20 characters"
        return false
    }
    else{
        spantag[21].innerHTML=""
    }
    console.log(firstName.length)
console.log(spantag[21])
}
function nomineePhonef(){
    var phoneNumber=document.getElementById("nomineePhoneNo").value
    spantag[26].style.color="red"
if(isNaN(phoneNumber)){
spantag[26].innerHTML="Phone number should contain only digits"
return false
}
else if(phoneNumber.length<10&&phoneNumber.length>0){
    spantag[26].innerHTML="Phone number is less than 10 digits"
    return false
}
else if(phoneNumber.length>10){
    spantag[26].innerHTML="Phone number is more than 10 digits"
    return false
}
else if(phoneNumber.charAt(0)<6&&phoneNumber.length>0){
    spantag[26].innerHTML="Indian standard number should start from 6, 7, 8 or 9"  
    return false
}
else{
    spantag[26].innerHTML=""
}
console.log(phoneNumber)
}
