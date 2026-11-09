
let btn = document.getElementById("but")
btn.onclick=function (){
    console.log("clicked");
    btn.textContent = "Clicked!"
}
// ######### onmouseover
let mouse= document.getElementById("mouse")
mouse.onmouseover=function(){
    mouse.style.backgroundColor="red"
}
// ######## onmouseout
let mouseout= document.getElementById("mouse")
mouseout.onmouseout=function(){
    mouseout.style.backgroundColor= "blue"
}

// ######## onmouseup
let mouseup= document.getElementById("moused")
mouseup.onmouseup=function(){
    mouseup.textContent = "Mouse Up!"
}

// ######### onmousedown
let mousedown= document.getElementById("moused")
mousedown.onmousedown=function(){
    mousedown.textContent = "Mouse Down!"
}

// ######### onmousemove
let mousemove= document.getElementById("mousem")
mousemove.onmousemove=function(){
    mousemove.textContent = "containing the mouse position."
    console.log("");
    
}

// ####### onkeydown
let keyd = document.getElementById("keyd")
let mas = document.getElementById("mas")
    
    keyd.addEventListener("keydown", function(e) {
        
    mas.textContent = `the pressed key. "${e.key}"`;
    console.log(mas.textContent);
    
});

// ####### onkeyup
keyd.addEventListener("keyup", function(e) {
    mas.textContent = `Key Released! "${e.key}"`;
    console.log(mas.textContent);

});

// ####################
let form = document.getElementById("form")
let msg = document.getElementById("msg")

    form.onsubmit=function(e){
        e.preventDefault()
        msg.textContent="Form Submitted"
    }

    // ###################################

let eventbtn= document.getElementById("eventbtn")
let evemsg = document.getElementById("eventmsg")

let startgame= new Event ("StartGame")

document.addEventListener("StartGame",function(){
    evemsg.textContent = "Start Game"
    console.log("Start Game");
    
})

eventbtn.addEventListener("click", function(){
    document.dispatchEvent(startgame);
    console.log("StartGame");
    
})

let phone= document.getElementById("phone")
let phonemsg = document.getElementById("phonemsg")
phone.addEventListener("input", function(){

    let value = phone.value.trim()
    let phoneRegex = /^01[0125]\d{8}$/
    if (phoneRegex.test(value)){
        phonemsg.textContent = "Valid"
    }
    else {
        phonemsg.textContent = "Invalid"
    }
})

let email = document.getElementById("email");
let emailmsg = document.getElementById("emailmsg")

email.addEventListener("input", function(){

    let mail = /^[a-z]+[@]+[a-z]+\.+[a-z]/
    if (mail.test(value)){
        emailmsg.textContent= "Valid"
    }else{
        emailmsg.textContent = "Invalid"
    }
})

let pass = document.getElementById("password");
let passmsg = document.getElementById("passmsg")

pass.addEventListener("input", function(){

    let value = pass.value.trim()
    let passre = /^[a-zA-Z0-9]+[!@#$%^&*]$/
    if (passre.test(value)){
        passmsg.textContent= "Valid"
    }else{
        passmsg.textContent = "Invalid"
    }
})

// ####################################################

let sentence = "I love JavaScript and JavaScript is easy."
let sentenceDiv = document.createElement("div");
let sentenceELe = document.createElement("p")
    sentenceELe.textContent= sentence
let resultsen = document.createElement("p")

let matches = sentence.match(/JavaScript/g)

if (matches){
    resultsen.textContent = `${matches[0]}`
}

let form2 = document.getElementById("form2")
let msg2 = document.getElementById("msg")

    form2.onsubmit=function(e1){
        e1.preventDefault()
        msg2.textContent="Form Submitted"
    }

document.body.appendChild(sentenceDiv)
sentenceDiv.appendChild(sentenceELe)
sentenceDiv.appendChild(resultsen)