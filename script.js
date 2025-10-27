// To get event from the input tag
function LoginUser() {
  const Email = document.getElementById("email").value
  const Password = document.getElementById("password").value;
//  Temporary demo login
if(Email === "user@gmail.com" && Password === "12345"){
    localStorage.setItem("loggedIn",true)
    window.location.href="weather.html"
}else{
    alert("Invalid credentails ! Try again ")
}
}
