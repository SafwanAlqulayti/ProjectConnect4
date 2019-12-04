window.onload = function() {
 $(document).ready(function(){

          var AllColumn = [ ["#Lrow4","#Trow4","#Srow4" ,"#Frow4"] ,
                             ["#Lrow3","#Trow3","#Srow3","#Frow3"],
                             ["#Lrow2","#Trow2","#Srow2" , "#Frow2"],
                            ["#Lrow1","#Trow1","#Srow1" , "#Frow1"] ]

                               var   counter = 0
                                var playerTurnCounter = 0
                                var l= 0
                                var t =0
                                var s =0
                                var f =0
                                var q=0
                                var redScore = 0
                                var yelloScore = 0
                                 var className = " " 
                               
                       
                                 function pleyerTurn(){

                                    if(playerTurnCounter ==  0  ){
                                        className = "Red"
                                      
 
                                        playerTurnCounter++
                                    }else {
                                         
                                            className= "yeloow"
                                            playerTurnCounter--
                                       
                                            
                                        }
            
                                    }
                                    //changing divs colors
                                $(".content1 >  #firstColumn > div , #secondColumn > div ,#thirdColumn > div ,#lastColumn > div").click ( function (){


                                    pleyerTurn()
                                
                                   //prevent over write
                                          if(this.id.includes("Lrow" )&&  $(AllColumn[l][0]).hasClass("Red")==false &&  $(AllColumn[l][0]).hasClass("yeloow")==false ){

                                                    $(AllColumn[l][0]).addClass(className)
                                 

                                                    if(l<3) {  

                                                    l++
                                                }
                                                
                                               
                                                }

                                            if(this.id.includes("Trow") &&  $(AllColumn[t][1]).hasClass("Red")==false &&  $(AllColumn[t][1]).hasClass("yeloow")==false ){

                                                $(AllColumn[t][1]).addClass(className)
                                          
                                                  
                                                if(t<3) {  

                                                    t++
                                                }
                     
                                            }
                   
                                                if(this.id.includes("Srow" ) &&  $(AllColumn[s][2]).hasClass("Red")==false &&  $(AllColumn[s][2]).hasClass("yeloow")==false ){

                                                $(AllColumn[s][2]).addClass(className)
                                                
                                                     
                                                if(s<3) {  

                                                    s++
                                                }
               
                                            }
                                     
                                                if(this.id.includes("Frow") &&  $(AllColumn[f][3]).hasClass("Red")==false &&  $(AllColumn[f][3]).hasClass("yeloow")==false ){

                                                $(AllColumn[f][3]).addClass(className)
                                               
                                                
                                                if(f<3) {  

                                                   
                                                    f++
                                                }
                                               
                                                }
                                                //check win
                                                if($(".c1 ").not(".Red").length == 0  ||$(".c2").not(".Red").length == 0 ||
                                                $(".c3").not(".Red").length == 0 || $(".c4").not(".Red").length == 0 ||
                                                $(".r2").not(".Red").length == 0 ||  $(".r1").not(".Red").length == 0 ||
                                                $(".r3").not(".Red").length == 0 ||  $(".r4").not(".Red").length == 0 ||
                                                $(".d1").not(".Red").length == 0 || $(".d2").not(".Red").length == 0 
                        
                                                ){
                                                    alert("Red wins")
                                                    redScore ++
                                                    $("#RedCounter").text(redScore)
                                                     stopClick()
                                                    
                                                  }
                           
                                                  else if( $(".c2").not(".yeloow").length == 0 || $(".c1").not(".yeloow").length == 0 ||
                                                  $(".c3").not(".yeloow").length == 0 || $(".c4").not(".yeloow").length == 0||
                                                  $(".r2").not(".yeloow").length == 0 ||  $(".r1").not(".yeloow").length == 0 ||
                                                  $(".r3").not(".yeloow").length == 0 ||  $(".r4").not(".yeloow").length == 0  ||
                                                  $(".d1").not(".yeloow").length == 0 || $(".d2").not(".yeloow").length == 0 ){
                                                      alert("yellow win")
                                                      yelloScore ++
                                                      $("#YelloCounter").text(yelloScore)
                                                       stopClick()

                                                  }
                                                  else if ($(".box1").not(".yeloow").length==8 && $(".box1").not(".Red").length==8 ){
                                                      alert("it is a tie")
                                                 stopClick()

                                                  }
                                                
                    });
 //reset every thing
                $("#Restart").click(function(){
                    $(" #firstColumn > div , #secondColumn > div ,#thirdColumn > div ,#lastColumn > div").removeClass("Red yeloow")
                   playerTurnCounter = 0
                     l= 0
                     t =0
                     s =0
                     f =0
            
                  
                      className = " " 
                  
                      stopClick()

                            
                });
                //stop the game after each round
                function stopClick()
                {
                    if( q ==  0){
                        $(" #firstColumn > div , #secondColumn > div ,#thirdColumn > div ,#lastColumn > div").css("pointer-events", "none");
                        q++
                   
                    }else if (q ==1 ){

                    $(" #firstColumn > div , #secondColumn > div ,#thirdColumn > div ,#lastColumn > div").css("pointer-events", "auto");
                    q--
                  
                }}
                                     
    });//ready
}

