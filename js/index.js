AOS.init()

$(document).on("click", function(){
    $("video").each(function(){
        if (!$(this).is(":in-viewport")) {
            $(this)[0].pause()
        }
    })
})
