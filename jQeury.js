window.onload = function() {


   $(document).ready(function(){
    //    $("#lastRow >div").click( function(){
    //        $("#lastRow >div").addClass("Red");

    //     });
        $("#lastRow >div").click(function(){
        
            $(this).addClass("Red");
            $(this).off("click")
            $(this).trigger
        }) ;
        
        // $("#lastRow >div").click(function(){
        
        //     $(this).addClass("yeloow");
        //     $(this).off("click")
        // }) ;
        $("#secondRow >div").click(function(){
        
            $(this).addClass("Red");
            $(this).off("click")
            $(this).trigger
        }) ;$("#firstRow >div").click(function(){
        
            $(this).addClass("Red");
            $(this).off("click")
            $(this).trigger
        }) ;$("#thirdRow >div").click(function(){
        
            $(this).addClass("Red");
            $(this).off("click")
            $(this).trigger
        }) ;



   })  ;

}
