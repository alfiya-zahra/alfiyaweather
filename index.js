// d82ea20a0c83e7ec211cbef7ed86ee85
//
// api.openweathermap.org/data/2.5/weather?q=Bhopal&appid=d82ea20a0c83e7ec211cbef7ed86ee85

let weather={
  fetchapi:function(city){
    fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=d82ea20a0c83e7ec211cbef7ed86ee85&units=metric")
    .then(response=>response.json())
    .then(data=>this.displayweather(data))
  },
  displayweather: function(data){
    const city=data.name;
    const temp=data.main.temp;
    const windspeed=data.wind.speed;
    const humidity=data.main.humidity;
    document.querySelector(".temperature").innerHTML="temperature : "+temp+"°C";
    document.querySelector(".windspeed").innerHTML="windspeed : "+windspeed+"km/h";
    document.querySelector(".humidity").innerHTML="humidity : "+ humidity+"%";
    document.querySelector(".city").innerHTML="you searched for "+city;
    document.querySelector(".title").innerHTML="showing weather for "+city;
  },
  search : function(){
    this.fetchapi(document.querySelector(".input").value);
  },
};
document.querySelector(".button").addEventListener("click",function(){
  weather.search();
});
