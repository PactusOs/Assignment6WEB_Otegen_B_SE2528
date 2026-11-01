$(document).ready(function () {
    console.log("jQuery is ready!");

    $("#changeSelectors").click(function () {
        $("#idExample").text("Changed with an ID selector (#idExample).");
        $(".classExample").html("Changed with a <strong>class selector</strong>.");
        $("h4").css("color", "#f05267");
    });

    $("#hideText").click(function () {
        $("#visibilityText").hide();
    });

    $("#showText").click(function () {
        $("#visibilityText").show();
    });

    $("#toggleText").click(function () {
        $("#visibilityText").toggle();
    });

    $("#fadeOut").click(function () {
        $("#fadeImage").fadeOut(500);
    });

    $("#fadeIn").click(function () {
        $("#fadeImage").fadeIn(500);
    });

    $("#fadeToggle").click(function () {
        $("#fadeImage").fadeToggle(500);
    });

    $("#slideUp").click(function () {
        $("#slidePanel").slideUp(400);
    });

    $("#slideDown").click(function () {
        $("#slidePanel").slideDown(400);
    });

    $("#slideToggle").click(function () {
        $("#slidePanel").slideToggle(400);
    });

    var itemNumber = 2;

    $("#addItem").click(function () {
        itemNumber++;
        $("#itemList").append("<li>Item " + itemNumber + "</li>");
    });

    $("#prependItem").click(function () {
        itemNumber++;
        $("#itemList").prepend("<li>Item " + itemNumber + "</li>");
    });

    $("#removeItem").click(function () {
        $("#itemList li:last").remove();
    });

    $("#changeImage").click(function () {
        var currentImage = $("#attributeImage").attr("src");

        if (currentImage === "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/PHONE.jpg/960px-PHONE.jpg") {
            $("#attributeImage").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Scorpion_Image.jpg/960px-Scorpion_Image.jpg");
            $("#attributeImage").attr("alt", "Scorpion");
        } else {
            $("#attributeImage").attr("src", "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/PHONE.jpg/960px-PHONE.jpg");
            $("#attributeImage").attr("alt", "Mobile phones");
        }
    });

    $("#changeLink").click(function () {
        $("#resourceLink").attr("href", "https://api.jquery.com/");
        $("#resourceLink").text("Open jQuery API Documentation");
    });

    $("#nameInput, #emailInput").on("input", function () {
        $("#liveName").text($("#nameInput").val());
        $("#liveEmail").text($("#emailInput").val());
    });

    $("#liveForm").on("submit", function (event) {
        event.preventDefault();
    });

    $("#basicAnimate").click(function () {
        $("#basicBox").stop(true, true).animate({
            width: 120,
            height: 120,
            left: 110
        }, 800);
    });

    $("#basicReset").click(function () {
        $("#basicBox").stop(true, true).css({
            width: 80,
            height: 80,
            left: 0
        });
    });

    $("#sequenceAnimate").click(function () {
        $("#sequenceBox").stop(true, true).css({
            left: 0,
            top: 0,
            width: 80,
            height: 80
        }).animate({ left: 140 }, 500)
          .animate({ top: 100 }, 500)
          .animate({ width: 45, height: 45 }, 500)
          .animate({ left: 0, top: 0, width: 80, height: 80 }, 600);
    });

    $("#combinedAnimate").click(function () {
        $("#combinedBox").stop(true, true).animate({
            left: 110,
            top: 50,
            width: 120,
            height: 120,
            opacity: 0.35
        }, 900);
    });

    $("#combinedReset").click(function () {
        $("#combinedBox").stop(true, true).css({
            left: 0,
            top: 0,
            width: 80,
            height: 80,
            opacity: 1
        });
    });

    $(".accordion-title").click(function () {
        $(this).next(".accordion-content").stop(true, true).slideToggle(350);
    });
});
