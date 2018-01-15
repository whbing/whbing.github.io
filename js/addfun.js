

/*这个主要是文档加载后 增加样式 在animate.js中也写的有*/
$(function() {
    $("body").addClass("loaded");
});
/*以下这个初始化时wow.js*/
new WOW().init();

$(".tag-switch").click(function() {
    if ($("#tag-list-bt").css("display") == "none") {

        $("#tag-list-bt").css("display", "inline-flex");
        $("#tag-cloud-bt").css("display", "none");

        $("#tag-cloud").slideDown(1000);
        $("#tag-list").slideUp(1000);
    } else {
        $("#tag-list-bt").css("display", "none");
        $("#tag-cloud-bt").css("display", "inline-flex");

        $("#tag-list").slideDown(1000);
        $("#tag-cloud").slideUp(1000);
    }
});