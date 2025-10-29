function mode () {
    const toggleButton = document.getElementById("toggle-button")
toggleButton.addEventListener('click',()=>{
    if(toggleButton.innerHTML === "ON"){
        toggleButton.innerHTML="OFF"
        document.body.style.backgroundColor = "black"
        document.body.style.color= ""
    }
    else if(toggleButton.innerHTML === "OFF"){
        toggleButton.innerHTML = "ON"
        document.body.style.backgroundColor= "white"
        document.body.style.color ="black"
    }
})
}

