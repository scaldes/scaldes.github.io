//jQuery function to implement modularization

$(function() {
    $("#page-footer").load("/web_project/js/modules/header.html", function(result){
        $("#page-header").append($(this).find("div").html());
    });
    $("#page-footer").load("/web_project/js/modules/footer.html");
});