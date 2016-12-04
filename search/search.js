$('#query').keyup(function(){
  // All code will be inside of this block
  
    var value = $('#query').val();
    var rExp = new RegExp(value, "i");
    

 $.getJSON("http://autocomplete.wunderground.com/aq?query=" + value + "&cb=?", function (data) {
      // Intercept the menu link clicks
  $("searchResults").on("click", "a", function(evt) {
    evt.preventDefault();
  console.log(data);
     // Begin building output
    var output = '<ol>';
    $.each(data.RESULTS, function(key, val) {
      if (val.name.search(rExp) != -1) {
        output += '<li>';
        output += '<a href="http://www.wunderground.com' + val.l + '" title="See results for ' + val.name + '">' + val.name + '</a>';
        output += '</li>';
      }
    }); // end each
//    output += '</ol>';
//    $("#searchResults").html(output); // send results to the page
//  }); // end getJSON
//    }); // end keyup
//// Get the data from the wunderground API
//    function getData(lat, long) {
//        //PUT CODE HERE
//        $.ajax({
//            url: '//api.wunderground.com/api/ea19bcd1f5d58aa1/geolookup/conditions/q/' + lat + ',' + long + '.json'
//            , dataType: "jsonp"
//            , success: function (data) {
//                console.log(data);
//                var cityState = data.location.city + ", " + data.location.state;
//                var cityStateTitle = data.location.city + ", " + data.location.state;
//                var temp = Math.round(data.current_observation.temp_f);
//                var high = Math.round(data.forecast.simpleforecast.forecastday[0].high.fahrenheit + "°");
//      var low = Math.round(data.forecast.simpleforecast.forecastday[0].low.fahrenheit + "°");
//                var currentConditions = (data.current_observation.weather);
//                var feelsLike = ("Feels like: " + data.current_observation.feelslike_f + "°")
//                var precipToday = ("Precipitation: " + data.current_observation.precip_today_in + "in");
//                var windDir = data.current_observation.wind_dir;
//                $("#cityDisplay").text(cityState);
//                $('#cityDisplayTitle').text(cityState);
//                $("#currentTemp").text(temp + "°");
//                $('#high').text(high);
//                $('#low').text(low);
//                $("#summary").text(currentConditions);
//                $("#add1").text(feelsLike);
//                $("#add2").text(precipToday);
//                $('#add3').text("Wind Direction: " + windDir);
//                
//                $("#cover").fadeOut(250);
//            }
//        });
//    }
//    // A function for changing a string to TitleCase
//    function toTitleCase(str) {
//        return str.replace(/\w+/g, function (txt) {
//            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//        });
//    }
//});
//// Intercept the menu link clicks
//    $("#page-nav").on("click", "a", function (evt) {
//        evt.preventDefault();
//        // With the text value get the needed value from the weather.json file
//        var jsonCity = $(this).text(); // Franklin, etc...
//        console.log(jsonCity);
//        $.ajax({
//            url: "/menu-activity/scripts/weather.json"
//            , dataType: "json"
//            , success: function (data) {
//                console.log(data);
//                console.log(data[jsonCity]);
//                var zip = data[jsonCity].zip;
//                console.log(zip);
//                getData(zip);
//            }
//        });
//    });
