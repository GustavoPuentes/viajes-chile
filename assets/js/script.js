$(function () {
    $('[data-toggle="tooltip"]').tooltip()

    $("a").click(function(event){
        if (this.hash !== "") {
            event.preventDefault();

            var gato = this.hash;

            $("html, body").animate({
                scrollTop: $(gato).offset().top
            }, 800, function(){
                window.location.hash = gato;
            });           
        }
    });

    $(window).scroll(function(){
        if ($(this).scrollTop() > 50) {
         $(".bg-scroll").addClass("celeste");
        } else {
         $(".bg-scroll").removeClass("celeste");
        }
     });



  })