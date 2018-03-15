//Weather icons and images that corresponds with the yahoo weather code.
var weatherIcons = [
  {
    icon:"wi wi-tornado",
    img:"https://images.unsplash.com/photo-1501415753052-e620be3cb38a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8f60be5ea119bcd58da4c39de95779ef&auto=format&fit=crop&w=1267&q=80"
  },
  {
    icon:"wi wi-storm-showers",
    img:"https://images.unsplash.com/photo-1433863448220-78aaa064ff47?ixlib=rb-0.3.5&s=4a7de5c7ee17d5080d68294ec23abffe&auto=format&fit=crop&w=1489&q=80"
  },
  {
    icon:"wi wi-hurricane",
    img:"https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ddd20323bd7b08a8b0e3d3cf6ee49423&auto=format&fit=crop&w=689&q=80"
  },
  {
    icon:"wi wi-thunderstorm",
    img:"https://images.unsplash.com/photo-1513284358928-18e6b0e6f685?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83efc4f09236d781cfce498e9e6185c5&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-thunderstorm",
    img:"https://images.unsplash.com/photo-1513284358928-18e6b0e6f685?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=83efc4f09236d781cfce498e9e6185c5&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-rain-mix",
    img:"https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=152e196f6372da6e3f879333a8816f04&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-rain-mix",
    img:"https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=152e196f6372da6e3f879333a8816f04&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-sleet",
    img:"https://images.unsplash.com/photo-1511131341194-24e2eeeebb09?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca564acbbaae2f5f6f2f230a8822ea52&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-sprinkle",
    img:"https://images.unsplash.com/photo-1519847881070-f23f0c26e3f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64cb9fbf64e85e38d74ae3c5f1d5e250&auto=format&fit=crop&w=1349&q=80"
  },
  {
    icon:"wi wi-sprinkle",
    img:"https://images.unsplash.com/photo-1519847881070-f23f0c26e3f1?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=64cb9fbf64e85e38d74ae3c5f1d5e250&auto=format&fit=crop&w=1349&q=80"
  },
  {
    icon:"wi wi-rain",
    img:"https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=152e196f6372da6e3f879333a8816f04&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-showers",
    img:"https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=152e196f6372da6e3f879333a8816f04&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-showers",
    img:"https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=152e196f6372da6e3f879333a8816f04&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-snow",
    img:"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-0.3.5&s=ae879a5610626bed62934fd0626fc098&auto=format&fit=crop&w=1383&q=80"
  },
  {
    icon:"wi wi-snow",
    img:"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-0.3.5&s=ae879a5610626bed62934fd0626fc098&auto=format&fit=crop&w=1383&q=80"
  },
  {
    icon:"wi wi-snow",
    img:"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-0.3.5&s=ae879a5610626bed62934fd0626fc098&auto=format&fit=crop&w=1383&q=80"
  },
  {
    icon:"wi wi-snow",
    img:"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-0.3.5&s=ae879a5610626bed62934fd0626fc098&auto=format&fit=crop&w=1383&q=80"
  },
  {
    icon:"wi wi-hail",
    img:"https://images.unsplash.com/photo-1489552615259-23c7732e3472?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c33a77e705cd7784afdc29e399832abe&auto=format&fit=crop&w=634&q=80"
  },
  {
    icon:"wi wi-sleet",
    img:"https://images.unsplash.com/photo-1511131341194-24e2eeeebb09?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ca564acbbaae2f5f6f2f230a8822ea52&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-dust",
    img:"https://images.unsplash.com/photo-1467451844471-beed6d563ad7?ixlib=rb-0.3.5&s=b428d2332509e29132e588b6473310e6&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-fog",
    img:"https://images.unsplash.com/photo-1504252060324-1c76e2e09939?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=71c57e3ab62925d3a62689cce328f0f8&auto=format&fit=crop&w=1349&q=80"
  },
  {
    icon:"wi wi-day-haze",
    img:"https://images.unsplash.com/photo-1431203488627-64527eb86dd9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=1d9cd5554dd850fa66f359a5104af6cd&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-smoke",
    img:"https://images.unsplash.com/photo-1483221186507-3cfe60ffb2ad?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=d3410c2a860025c55579bb9683441783&auto=format&fit=crop&w=1489&q=80"
  },
  {
    icon:"wi wi-windy",
    img:"https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fab61fd98bbf61a94a276912d7abc1fc&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-windy",
    img:"https://images.unsplash.com/photo-1505672678657-cc7037095e60?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fab61fd98bbf61a94a276912d7abc1fc&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-snowflake-cold",
    img:"https://images.unsplash.com/photo-1457269449834-928af64c684d?ixlib=rb-0.3.5&s=cfb262c8e74fcdfc13feec1c446b999c&auto=format&fit=crop&w=967&q=80"
  },
  {
    icon:"wi wi-cloudy",
    img:"https://images.unsplash.com/photo-1479688895406-3f032f15f0ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=baea6bb70e62849dd52e485f0889295d&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-night-cloudy",
    img:"https://images.unsplash.com/photo-1517510175585-dc38ed8c263f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=af23c7f39854623a18ab942a9c482fce&auto=format&fit=crop&w=1391&q=80"
  },
  {
    icon:"wi wi-day-cloudy",
    img:"https://images.unsplash.com/photo-1421081177127-339f586c9b49?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=380980f0fdd19c7d4cd5a34384a8cff0&auto=format&fit=crop&w=1349&q=80"
  },
  {
    icon:"wi wi-night-partly-cloudy",
    img:"https://images.unsplash.com/photo-1488251550865-19b3b4ae5734?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cc49d7f0bdde040761e1645b5fa80dbe&auto=format&fit=crop&w=1267&q=80"
  },
  {
    icon:"wi wi-day-cloudy",
    img:"https://images.unsplash.com/photo-1421081177127-339f586c9b49?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=380980f0fdd19c7d4cd5a34384a8cff0&auto=format&fit=crop&w=1349&q=80"
  },
  {
    icon:"wi wi-night-clear",
    img:"https://images.unsplash.com/photo-1479357492746-2f22f66668fb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c136fb85b8f5f5ee8bee22845fe5da0d&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-day-sunny",
    img:"https://images.unsplash.com/photo-1499570023676-b0a761678e07?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=892bb1b67f894e326b77eb3719b429d7&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-night-partly-cloudy",
    img:"https://images.unsplash.com/photo-1488251550865-19b3b4ae5734?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=cc49d7f0bdde040761e1645b5fa80dbe&auto=format&fit=crop&w=1267&q=80"
  },
  {
    icon:"wi wi-day-sunny-overcast",
    img:"https://images.unsplash.com/photo-1464866691624-e6bdc728bedd?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=50e93d23e430eaa4aa54cfd5a054df8f&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-rain-mix",
    img:"https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=152e196f6372da6e3f879333a8816f04&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-hot",
    img:"https://images.unsplash.com/photo-1482417395176-71d0c9e16e42?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=a87f553a86566a2c4bdff1c28566d90c&auto=format&fit=crop&w=634&q=80"
  },
  {
    icon:"wi wi-thunderstorm",
    img:"https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ddd20323bd7b08a8b0e3d3cf6ee49423&auto=format&fit=crop&w=689&q=80"
  },
  {
    icon:"wi wi-thunderstorm",
    img:"https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ddd20323bd7b08a8b0e3d3cf6ee49423&auto=format&fit=crop&w=689&q=80"
  },
  {
    icon:"wi wi-thunderstorm",
    img:"https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ddd20323bd7b08a8b0e3d3cf6ee49423&auto=format&fit=crop&w=689&q=80"
  },
  {
    icon:"wi wi-showers",
    img:"https://images.unsplash.com/photo-1437624155766-b64bf17eb2ce?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=152e196f6372da6e3f879333a8816f04&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-snow",
    img:"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-0.3.5&s=ae879a5610626bed62934fd0626fc098&auto=format&fit=crop&w=1383&q=80"
  },
  {
    icon:"wi wi-snow",
    img:"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-0.3.5&s=ae879a5610626bed62934fd0626fc098&auto=format&fit=crop&w=1383&q=80"
  },
  {
    icon:"wi wi-snow",
    img:"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-0.3.5&s=ae879a5610626bed62934fd0626fc098&auto=format&fit=crop&w=1383&q=80"},
  {
    icon:"wi wi-cloud",
    img:"https://images.unsplash.com/photo-1479688895406-3f032f15f0ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=baea6bb70e62849dd52e485f0889295d&auto=format&fit=crop&w=1350&q=80"
  },
  {
    icon:"wi wi-storm-showers",
    img:"https://images.unsplash.com/photo-1433863448220-78aaa064ff47?ixlib=rb-0.3.5&s=4a7de5c7ee17d5080d68294ec23abffe&auto=format&fit=crop&w=1489&q=80"
  },
  {
    icon:"wi wi-snow", img:"https://images.unsplash.com/photo-1491002052546-bf38f186af56?ixlib=rb-0.3.5&s=ae879a5610626bed62934fd0626fc098&auto=format&fit=crop&w=1383&q=80"
  },
  {
    icon:"wi wi-storm-showers",
    img:"https://images.unsplash.com/photo-1433863448220-78aaa064ff47?ixlib=rb-0.3.5&s=4a7de5c7ee17d5080d68294ec23abffe&auto=format&fit=crop&w=1489&q=80"
  }
]

//geolocation
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position){
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    var urlMaps = "https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + ","+ lon + "&key=AIzaSyAMyBdGulRl0Itr9FWNRMhpA0qbgLfvm6o";
    $.getJSON(urlMaps, function(data){
      var urlWeather = "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22(" + lat + "%2C" + lon + ")%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
      var location = data.results[3].formatted_address;
      $.getJSON(urlWeather, function(dataWeather){
        var weatherObj = dataWeather.query.results.channel.item.condition;
        var weatherCode = Number(weatherObj.code);
        var windObj = dataWeather.query.results.channel.wind;
        var atmosphereObj = dataWeather.query.results.channel.atmosphere;
        var forecastObj = dataWeather.query.results.channel.item.forecast;
        var condition = weatherObj.text;
        var icon = "<i class=" + "'" + weatherIcons[weatherCode].icon + "'" + "></i>";
        var img = "url(" + weatherIcons[weatherCode].img + ")";
        var tempF = Number(weatherObj.temp) ;
        var tempHighF = Number(forecastObj[0].high);
        var tempLowF = Number(forecastObj[0].low);
        var tempC = Math.round((tempF - 32) * (5/9));
        var tempHighC = Math.round((tempHighF - 32) * (5/9));
        var tempLowC = Math.round((tempLowF - 32) * (5/9));
        $("body").css({
          "background-image": img
        });
        $("#location").text(location);
        $(".temperature h1").prepend(icon);
        $(".tempDisp").html(tempF);


        $(".conDisp").text(weatherObj.text);
        $(".high").text(tempHighF);
        $(".low").text(tempLowF);
        $(".humidity p").append(atmosphereObj.humidity + "%")
        $(".speed").text(windObj.speed + " MPH");
        $(".direction").text(convertDirection(Number(windObj.direction)));
        forecast(forecastObj,tempF,tempHighF,tempLowF,tempC,tempHighC,tempLowC);
        console.log($(".forecastTemp").contents());
      });
    });
  }, function(){ //error handling
    alert("No location available.");
  });
}

function forecast(forecastData,tempF,tempHighF,tempLowF,tempC,tempHighC,tempLowC){
  var forecastTempHighF1 = Number(forecastData[1].high);
  var forecastTempHighF2 = Number(forecastData[2].high);
  var forecastTempHighF3 = Number(forecastData[3].high);
  var forecastTempHighF4 = Number(forecastData[4].high);
  var forecastTempHighF5 = Number(forecastData[5].high);
  var forecastTempLowF1 = Number(forecastData[1].low);
  var forecastTempLowF2 = Number(forecastData[2].low);
  var forecastTempLowF3 = Number(forecastData[3].low);
  var forecastTempLowF4 = Number(forecastData[4].low);
  var forecastTempLowF5 = Number(forecastData[5].low);
  var forecastTempHighC1 = Math.round((forecastData[1].high - 32 ) * (5/9));
  var forecastTempHighC2 = Math.round((forecastData[2].high - 32 ) * (5/9));
  var forecastTempHighC3 = Math.round((forecastData[3].high - 32 ) * (5/9));
  var forecastTempHighC4 = Math.round((forecastData[4].high - 32 ) * (5/9));
  var forecastTempHighC5 = Math.round((forecastData[5].high - 32 ) * (5/9));
  var forecastTempLowC1 = Math.round((forecastData[1].low - 32 ) * (5/9));
  var forecastTempLowC2 = Math.round((forecastData[2].low - 32 ) * (5/9));
  var forecastTempLowC3 = Math.round((forecastData[3].low - 32 ) * (5/9));
  var forecastTempLowC4 = Math.round((forecastData[4].low - 32 ) * (5/9));
  var forecastTempLowC5 = Math.round((forecastData[5].low - 32 ) * (5/9));
  console.log(typeof forecastTempHighC4);
  $("#fahrenheit").on("click", function(e){
    e.preventDefault();
    $({
      someValue: tempC,
      someValue2: tempHighC,
      someValue3: tempLowC,
      someValue4: forecastTempHighC1,
      someValue5: forecastTempHighC2,
      someValue6: forecastTempHighC3,
      someValue7: forecastTempHighC4,
      someValue8: forecastTempHighC5,
      someValue9: forecastTempLowC1,
      someValue10: forecastTempLowC2,
      someValue11: forecastTempLowC3,
      someValue12: forecastTempLowC4,
      someValue13: forecastTempLowC5
    }).animate({
      someValue: tempF,
      someValue2: tempHighF,
      someValue3: tempLowF,
      someValue4: forecastTempHighF1,
      someValue5: forecastTempHighF2,
      someValue6: forecastTempHighF3,
      someValue7: forecastTempHighF4,
      someValue8: forecastTempHighF5,
      someValue9: forecastTempLowF1,
      someValue10: forecastTempLowF2,
      someValue11: forecastTempLowF3,
      someValue12: forecastTempLowF4,
      someValue13: forecastTempLowF5
    }, {
        duration: 1000,
        easing:'swing',
        step: function() {
        $(".tempDisp").text(Math.round(this.someValue));
        $(".high").text(Math.round(this.someValue2));
        $(".low").text(Math.round(this.someValue3));
        $(".forecastH1").text(Math.round(this.someValue4));
        $(".forecastH2").text(Math.round(this.someValue5));
        $(".forecastH3").text(Math.round(this.someValue6));
        $(".forecastH4").text(Math.round(this.someValue7));
        $(".forecastH5").text(Math.round(this.someValue8));
        $(".forecastL1").text(Math.round(this.someValue9));
        $(".forecastL2").text(Math.round(this.someValue10));
        $(".forecastL3").text(Math.round(this.someValue11));
        $(".forecastL4").text(Math.round(this.someValue12));
        $(".forecastL5").text(Math.round(this.someValue13));
      }
    });
    $("#celsius").removeClass("selected");
    $("#fahrenheit").addClass("selected");
  });
  $("#celsius").on("click", function(e){
    e.preventDefault();
    $({ 
      someValue: tempF,
      someValue2: tempHighF,
      someValue3: tempLowF,
      someValue4: forecastTempHighF1,
      someValue5: forecastTempHighF2,
      someValue6: forecastTempHighF3,
      someValue7: forecastTempHighF4,
      someValue8: forecastTempHighF5,
      someValue9: forecastTempLowF1,
      someValue10: forecastTempLowF2,
      someValue11: forecastTempLowF3,
      someValue12: forecastTempLowF4,
      someValue13: forecastTempLowF5
    }). animate(
      {
        someValue: tempC,
        someValue2: tempHighC,
        someValue3: tempLowC,
        someValue4: forecastTempHighC1,
        someValue5: forecastTempHighC2,
        someValue6: forecastTempHighC3,
        someValue7: forecastTempHighC4,
        someValue8: forecastTempHighC5,
        someValue9: forecastTempLowC1,
        someValue10: forecastTempLowC2,
        someValue11: forecastTempLowC3,
        someValue12: forecastTempLowC4,
        someValue13: forecastTempLowC5
      }, {
        duration: 1000,
        easing:'swing',
        step: function() {
        $(".tempDisp").text(Math.round(this.someValue));
        $(".high").text(Math.round(this.someValue2));
        $(".low").text(Math.round(this.someValue3));
        $(".forecastH1").text(Math.round(this.someValue4));
        $(".forecastH2").text(Math.round(this.someValue5));
        $(".forecastH3").text(Math.round(this.someValue6));
        $(".forecastH4").text(Math.round(this.someValue7));
        $(".forecastH5").text(Math.round(this.someValue8));
        $(".forecastL1").text(Math.round(this.someValue9));
        $(".forecastL2").text(Math.round(this.someValue10));
        $(".forecastL3").text(Math.round(this.someValue11));
        $(".forecastL4").text(Math.round(this.someValue12));
        $(".forecastL5").text(Math.round(this.someValue13));
      }
    });
    $("#fahrenheit").removeClass("selected");
    $("#celsius").addClass("selected");
   });
  for(var i=1; i<6; i++){
    $(".forecast").append(
      "<div class='fcol'><p>"+ forecastData[i].day + "</p><p><i class='" + weatherIcons[forecastData[i].code].icon + "'></i></p><p><span class='forecastH" + i + "'>" + forecastData[i].high + "</span>&deg;/<span class='forecastL" + i + "'>" + forecastData[i].low + "</span>&deg;</p>"
    );
  }
}
//converts yahoo wind direction in unit degrees to compass direction
function convertDirection(direction){
  if((direction >= 348.75 && direction <= 360) || (direction >=0 && direction < 11.25)){
    return "N";
  }
  if(direction >= 11.25 && direction < 33.75){
    return "NNE";
  }
  if(direction >= 33.75 && direction < 56.25){
    return "NE";
  }
  if(direction >= 56.25 && direction < 78.75){
    return "ENE";
  }
  if(direction >= 78.75 && direction < 101.25){
    return "E";
  }
  if(direction >= 101.25 && direction < 123.75){
    return "ESE";
  }
  if(direction >= 123.75 && direction < 146.25){
    return "SSE";
  }
  if(direction >= 168.75 && direction < 191.25){
    return "S";
  }
  if(direction >= 191.25 && direction < 213.75){
    return "SSW";
  }
  if(direction >= 213.75 && direction < 236.25){
    return "SW";
  }
  if(direction >= 236.25 && direction < 258.75){
    return "WSW";
  }
  if(direction >= 258.75 && direction < 281.25){
    return "W";
  }
  if(direction >= 281.25 && direction < 303.75){
    return "WNW";
  }
  if(direction >= 303.75 && direction < 326.25){
    return "NW";
  }
  if(direction >= 326.25 && direction < 348.75){
    return "NNW";
  }
}
