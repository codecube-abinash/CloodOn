$(document).ready(function () {
    $(".dropdown").on("hide.bs.dropdown", function () {
        $(".dropdown-toggle").html('all categories <span class="glyphicon glyphicon-triangle-right"></span></span>');
    });
    $(".dropdown").on("show.bs.dropdown", function () {
        $(".dropdown-toggle").html('all categories <span class="glyphicon glyphicon-triangle-bottom"></span></span>');
    });

    $(".btn-action").on("click", function () {
        $(".btn-action").removeClass('btn-action-active');
        $(this).addClass("btn-action-active");
    });
});