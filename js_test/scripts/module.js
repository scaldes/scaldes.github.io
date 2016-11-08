//jQuery function to implement modularization

$(function() {
    $("#page-footer").load("/js_test/modules/header.html", function(result){
        $("#page-header").append($(this).find("div").html());
    });
    $("#page-footer").load("/js_test/modules/footer.html");
});