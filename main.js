var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var apiResult = JSON.parse(this.responseText);

        console.log(apiResult.name);
        console.log(apiResult.weather[0].description);

    }
};
xmlhttp.open('GET', 'http://api.openweathermap.org/data/2.5/weather?q=62249,us&appid=6efff70fe1477748e31c17d1c504635f', true);
xmlhttp.send();
