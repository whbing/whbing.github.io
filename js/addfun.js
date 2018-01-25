

/*这个主要是文档加载后 增加样式 在animate.js中也写的有*/
$(function() {
    $("body").addClass("loaded");
});
/*以下这个初始化时wow.js*/
new WOW().init();

// highlight
hljs.initHighlightingOnLoad();

//标签列表与标签云的显示切换
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

/* 增加active样式，没用上
$(".header-menu a").click(function(){
    $(".header-menu a").removeClass("active");
    $(this).addClass("active");
})
*/