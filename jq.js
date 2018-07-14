    $("nav div").click(function() {
            $("ul").slideToggle();
            $("ul ul").css("display", "none");
      });
        $("ul li").click(function() {
            $("ul ul").slideUp();
            $(this).find('ul').slideToggle();
      });
        $(window).resize(function() {
            if($(window).width() > 768) {
                  $("ul").removeAttr('style');
            }
      });
     $(function(){
         $("#read2").dialog({
             //width:30px,
             autoOpen: false,
             position: {
                  my: " center",
                  at: " center"
             },
             buttons: {
                  OK: function() {$(this).dialog("close")
                                 }
             }
         });
         
         
         $("#Read").click(function(){
            
           $("#read2").dialog('open');
                 
       });
         });
         
                $("#cl").click(function(){
            $("#abo").toggle(500);
            //$( "#display" ).ide(5000);
            
        });
     