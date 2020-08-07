$("h1").click(function(){
    $(this).text("i was changed!")
    
})
$("input").eq(0).keypress(function(){
    
    $("input").eq(1).addClass("turnBlue")
})

$("input").eq(0).keypress(function( event ){
    if(event.which === 13) {
        $("h3").toggleClass("turnRed");
    }
})
