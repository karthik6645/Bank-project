var balance=2000.00
document.getElementById("deposit").style.display="none"
document.getElementById("withdraw").style.display="none"
document.getElementById("depositVerify").style.display="none"
document.getElementById("withdrawVerify").style.display="none"
// document.getElementById("table").style.display="none"
function displayBalance(){
    document.getElementById("balanceClick").innerHTML=balance
    
    console.log(balance)
}
function dispalyDepositf(){
    var displayDeposit=document.getElementById("deposit")
    var depositVerify=document.getElementById("depositVerify").style.margin="0px -27px 0px 0px"
    document.getElementById("depositVerify").innerHTML="only hi"
    displayDeposit.style.display="block"
    document.getElementById("withdraw").style.margin="-65px 0px 0px 663px"
}
function displayWithdrawf(){
    var displayWithdraw= document.getElementById("withdraw")
    var withdrawVerify=document.getElementById("withdrawVerify").style.margin="0px -27px 0px 0px"
    displayWithdraw.style.display="block"
}
function addrowDeposit(){
    var hours=new Date().getHours()
    var minitues=new Date().getMinutes()
    var seconds= new Date().getSeconds()
    var time=`${hours}:${minitues}:${seconds}`
    var date=new Date().toDateString()
    var cell1Display=`${date}<br>${time}`
    var depositDescription=document.getElementById("depositDescription").value
    if(depositDescription==""){
        depositDescription="Deposited to self"
    }
    var deposit=document.getElementById("enteredDeposit").value
    if(deposit==""){
        document.getElementById("depositVerify").style.display="block"
        document.getElementById("depositVerify").style.color="red"
        document.getElementById("depositVerify").innerHTML="Please enter amount to be deposited"
        return false
    }else{
    if(deposit>49999){
        document.getElementById("depositVerify").style.display="block"
        document.getElementById("depositVerify").style.color="red"
        document.getElementById("depositVerify").innerHTML="Max limit is INR 49999/- only"
        return false
    }
    else{
        document.getElementById("depositVerify").style.display="none"
    }
    document.getElementById("depositVerify").style.display="none"
      }
    balance=Number(balance)+Number(deposit)
    var table=document.getElementsByTagName("table")
    var table1
    var table2=table[3]
    var newRow=table2.insertRow(table2.rows.length)
    var cell0=newRow.insertCell(0)
    var cell1=newRow.insertCell(1)
    var cell2=newRow.insertCell(2)
    var cell3=newRow.insertCell(3)
    var cell4=newRow.insertCell(4)
    var cell5=newRow.insertCell(5)
    cell0.innerHTML=table2.rows.length-1
    cell1.innerHTML=cell1Display
    cell2.innerHTML=depositDescription
    cell3.innerHTML=""
    cell4.innerHTML=deposit
    cell5.innerHTML=balance
    document.getElementById("balanceClick").innerHTML=balance
    
    console.log(depositDescription)
    console.log(deposit)
    console.log(table)
    console.log(table2)
    console.log(newRow)
    console.log(cell2)
    console.log(cell3)
    console.log(table2.rows.length)
    console.log(time)
}
function addrowWithdraw(){
    var hours=new Date().getHours()
    var minitues=new Date().getMinutes()
    var seconds= new Date().getSeconds()
    var time=`${hours}:${minitues}:${seconds}`
    var date=new Date().toDateString()
    var cell1Display=`${date}<br>${time}`
    var withdrawDescription=document.getElementById("withdrawDescription").value
    if(withdrawDescription==""){
        withdrawDescription="Withdrawn by self"
    }
    var withdraw=document.getElementById("enteredWithdraw").value
    
    if(withdraw==""){
        document.getElementById("withdrawVerify").style.display="block"
        document.getElementById("withdrawVerify").style.color="red"
        document.getElementById("withdrawVerify").innerHTML="Please enter amount to be withdrawn"
        return false
    }
    else if(balance<=2000){
        document.getElementById("withdrawVerify").style.display="block"
        document.getElementById("withdrawVerify").style.color="red"
        document.getElementById("withdrawVerify").innerHTML="Min INR 2000/- should be maintained"
        return false
        }
    else if(withdraw>balance){
        console.log(withdraw)
        console.log(balance)
        document.getElementById("withdrawVerify").style.display="block"
        document.getElementById("withdrawVerify").style.color="red"
        document.getElementById("withdrawVerify").innerHTML="Sorry, Insufficient Funds"
        return false
    }
    else if(Number(balance)-Number(withdraw)<2000){
        document.getElementById("withdrawVerify").style.display="block"
        document.getElementById("withdrawVerify").style.color="red"
        document.getElementById("withdrawVerify").innerHTML="Min INR 2000/- should be maintained, Enter different amount"
        return false
    }
    else{
        document.getElementById("withdrawVerify").style.display="none"
    }
    balance=Number(balance)-Number(withdraw)
    var table=document.getElementsByTagName("table")
    var table1
    var table2=table[3]
    var newRow=table2.insertRow(table2.rows.length)
    var cell0=newRow.insertCell(0)
    var cell1=newRow.insertCell(1)
    var cell2=newRow.insertCell(2)
    var cell3=newRow.insertCell(3)
    var cell4=newRow.insertCell(4)
    var cell5=newRow.insertCell(5)
    cell0.innerHTML=table2.rows.length-1
    cell1.innerHTML=cell1Display
    cell2.innerHTML=withdrawDescription
    cell3.innerHTML=withdraw
    cell4.innerHTML=""
    cell5.innerHTML=balance
    document.getElementById("balanceClick").innerHTML=balance
    console.log(withdrawDescription)
    console.log(withdraw)
    console.log(table)
    console.log(table2)
    console.log(newRow)
    console.log(cell2)
    console.log(cell3)
    console.log(table2.rows.length)
    console.log(time)
}