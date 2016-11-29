// Current Location Scripts
$(function () {
    //will identify status
    var status = $('#status');
    //dont touch, fully operational ("find out where youre at")
    (function getGeoLocation() {
        status.text('Getting Location...');
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                //will send to the getData function
                var lat = position.coords.latitude;
                var long = position.coords.longitude;
                // Call the getData function, send the lat and long
                getData(lat, long);
            });
        }
        else {
            status.text("Your browser doesn't support Geolocation or it is not enabled!");
        }
    })();
    // Get the data from the wunderground API
    function getData(lat, long) {
        //PUT CODE HERE
        $.ajax({
            url: '//api.wunderground.com/api/ea19bcd1f5d58aa1/geolookup/conditions/q/' + lat + ',' + long + '.json'
            , dataType: "jsonp"
            , success: function (data) {
                console.log(data);
                var cityState = data.location.city + ", " + data.location.state;
                var cityStateTitle = data.location.city + ", " + data.location.state;
                var temp = Math.round(data.current_observation.temp_f);
                var currentConditions = (data.current_observation.weather);
                var feelsLike = ("Feels like: " + data.current_observation.feelslike_f + "°")
                var precipToday = ("Precipitation: " + data.current_observation.precip_today_in + "in");
                var windDir = data.current_observation.wind_dir;
                $("#cityDisplay").text(cityState);
                $('#cityDisplayTitle').text(cityState);
                $("#currentTemp").text(temp + "°");
                $("#summary").text(currentConditions);
                $("#add1").text(feelsLike);
                $("#add2").text(precipToday);
                $('#add3').text("Wind Direction: " + windDir);
                
                $("#cover").fadeOut(250);
            }
        });
    }
    // A function for changing a string to TitleCase
    function toTitleCase(str) {
        return str.replace(/\w+/g, function (txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
        });
    }
});