var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

        //storing our API object inside of the apiresult
          var apiResult = JSON.parse(this.responseText);

        // variables for weather informatoin
        var findName = document.createTextNode(apiResult.name);
        var findDescription = document.createTextNode(apiResult.weather[0].description);

        //add weather information to the screen
        var cityName = document.getElementById("city");
        var weatherDescription = document.getElementById("description");

        cityName.appendChild(findName);
        weatherDescription.appendChild(findDescription);

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=62249,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
