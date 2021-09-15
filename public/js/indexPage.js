document.getElementById("RegBtn").addEventListener("click", myFunction); 
function myFunction() {
    bgReg = document.getElementById("RegBtn").style.backgroundColor;
    if(bgReg != "red"){
        document.getElementById("RegBtn").style.backgroundColor = "red";
    }
    else{
        document.getElementById("RegBtn").style.backgroundColor = "white";
    }
                
}

document.getElementById("BtnSignIn").addEventListener("click", yourFunction); 
function yourFunction() {
    bgSign = document.getElementById("BtnSignIn").style.backgroundColor;
    if(bgSign != "green"){
        document.getElementById("BtnSignIn").style.backgroundColor = "green";
    }
    else{
        document.getElementById("BtnSignIn").style.backgroundColor = "white";
    }
}