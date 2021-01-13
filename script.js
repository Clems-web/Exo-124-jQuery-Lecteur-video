// FIXME Assurez vous que ces deux variables contiennent bien les bonnes choses ;-)
let player = $('.player__video').get(0);
let progress = $('.progress__filled').get(0);


$('#play').click(function(){
    if ($(this).hasClass("toggle")) {
        player.play();
        $(this).html("⏸");
    }
    else if (!$(this).hasClass("toggle")) {
        player.pause();
        $(this).html("►");
    }

    $(this).toggleClass("toggle");
});

player.ontimeupdate = function () {
    progress.style.width = Math.floor( (100 / player.duration) * player.currentTime) + "px";
}


