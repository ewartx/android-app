setTimeout(function() {
    var oakbridgeSrc = $("#oakbridgeImg").data("src");
    var time = new Date().getTime();
    $("#oakbridgeImg").attr("src", oakbridgeSrc + "&time="+time);

    var knightSrc = $("#knightbridgeImg").data("src");
    var time = new Date().getTime();
    $("#knightbridgeImg").attr("src", knightSrc + "&time="+time);
}, 250);  