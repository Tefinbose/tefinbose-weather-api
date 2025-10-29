// To get event from the input tag
function LoginUser() {
  const Email = document.getElementById("email").value;
  const Password = document.getElementById("password").value;
  //  Temporary demo login
  if (Email === "user@gmail.com" && Password === "12345") {
    localStorage.setItem("loggedIn", true);
    window.location.href = "weather.html";
  } else {
    alert("Invalid credentails ! Try again ");
  }
}

function apiCall() {
  const APIKEY = "a675693d8fa6fe5b085213982dd5ec3b";
  const city = document.getElementById("c-name").value.trim();
//   console.log(city);
  if(!city){
    alert("please enter the city name")
    return;
  }
  let details = ""

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`;

  const promise = fetch(url).then((response) => {
    response.json().then((data) => {
        console.log(data);
        // Sunrise
        const sunrise= new Date(data.sys.sunrise*1000).toLocaleTimeString()
        const sunset = new Date (data.sys.sunset*1000).toLocaleTimeString()
        details =`
       <div id="weatherInfo" class="mt-6 text-center">
       <h1 class="text-center mb-1 font-bold text-2xl">${data.name}</h1>
       <p> <i class="fa-solid fa-temperature-three-quarters"></i> ${data.main.temp} </p>
    <img class="mx-auto w-20 h-20" src="
       https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
        <p><i class="fa-solid fa-droplet"></i>${data.main.humidity} </p>
         <p><i class="fa-solid fa-wind"></i> ${data.wind.speed}</p>
         <p><i class="fa-solid fa-sun"></i>${sunrise}</p>
       <p> <i class="fa-solid fa-sun-plant-wilt"></i> ${sunset}</p>
      
       

        `
      document.getElementById("weather-content").innerHTML=details
    }).catch((error)=>{
        console.log(error);
        
    })
  })
}
