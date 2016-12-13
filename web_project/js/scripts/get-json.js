$(function () {
    
    $.getJSON("/web_project/js/project.json", function (data) {
        console.log(data);
        var morning1 = (data["Missionary Schedule"].mornings);
        var morning2 = (data["Missionary Schedule"].breakfast);
        var day1 = (data["Missionary Schedule"]['Personal Study']);
        var day2 = (data["Missionary Schedule"]['Companion Study']);
        var day3 = (data["Missionary Schedule"]['Begin Proselyting']);
        var day4 = (data["Missionary Schedule"]['Lunch and Dinner']);
        var night1 = (data["Missionary Schedule"]['End of the day']);
        var night2 = (data["Missionary Schedule"].rest);
        var time1 = (data["Missionary Schedule"].Schedule[0]);
        var time2 = (data["Missionary Schedule"].Schedule[1]);
        var time3 = (data["Missionary Schedule"].Schedule[2]);
        var time4 = (data["Missionary Schedule"].Schedule[3]);
        var time5 = (data["Missionary Schedule"].Schedule[4]);
        var time6 = (data["Missionary Schedule"].Schedule[5]);
        var time7 = (data["Missionary Schedule"].Schedule[6]);
        var time8 = (data["Missionary Schedule"].Schedule[7]);
        var morning1 = (data["Mission Life"].mornings);
        var morning2 = (data["Mission Life"].breakfast);
        var day1 = (data["Mission Life"]['Personal Study']);
        var day2 = (data["Mission Life"]['Companion Study']);
        var day3 = (data["Mission Life"]['Begin Proselyting']);
        var day4 = (data["Mission Life"]['Lunch and Dinner']);
        var night1 = (data["Mission Life"]['End of the day']);
        var night2 = (data["Mission Life"].rest);
        var time1 = (data["Mission Life"]['6:30am']);
        var time2 = (data["Mission Life"]['7:30am']);
        var time3 = (data["Mission Life"]['8am']);
        var time4 = (data["Mission Life"]['9am']);
        var time5 = (data["Mission Life"]['10am']);
        var time6 = (data["Mission Life"]['12pm-5pm']);
        var time7 = (data["Mission Life"]['9am-9pm']);
        var time8 = (data["Mission Life"]['10:30pm']);
        $('#morning1').text(morning1);
        $('#morning2').text(morning2);
        $('#day1').text(day1);
        $('#day2').text(day2);
        $('#day3').text(day3);
        $('#day4').text(day4);
        $('#night1').text(night1);
        $('#night2').text(night2);
        $('#time1').text(time1);
        $('#time2').text(time2);
        $('#time3').text(time3);
        $('#time4').text(time4);
        $('#time5').text(time5);
        $('#time6').text(time6);
        $('#time7').text(time7);
        $('#time8').text(time8);
    })
})