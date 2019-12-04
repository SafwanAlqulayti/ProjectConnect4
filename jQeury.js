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
                                var yellowTurn = "Yellow player Turn"
                                var redTurn = "Red player Turn"
                                 var className = " " 
                               
                       
                                 function pleyerTurn(){

                                    if(playerTurnCounter ==  0  ){
                                        className = "Red"
                                    
                                        playerTurnCounter++
                                        $("#H2one").text(yellowTurn)
                                    }else {
                                         
                                            className= "yeloow"
                                            playerTurnCounter--
                                            $("#H2one").text(redTurn)
                                       
                                            
                                        }
            
                                    }
                                    //changing divs colors select all divs
                                $(".content1 >  #firstColumn > div , #secondColumn > div ,#thirdColumn > div ,#lastColumn > div").click ( function (){


                                    pleyerTurn()
                                
                                   //The frist condition check the column using the id , the secend and third checkds the dive classes
                                   //l represent the postion in the arrey to start coloring from the bottom
                                          if(this.id.includes("Lrow" )&&  $(AllColumn[l][0]).hasClass("Red")==false &&  $(AllColumn[l][0]).hasClass("yeloow")==false ){

                                           
                                                    $(AllColumn[l][0]).addClass(className)
                                 

                                                    //filling the column by adding the index
                                                    if(l<=4) {  

                                                    l++
                                                }
                                                /*prevent the player counter from adding new number if the colomn filled
                                                with out it the counter will keep adding and might make the player chose more than 
                                                one div and fill it with the same color and corrapt the game order also it will not start until the column is
                                                full
                                                 */
                                                if (l==4){
                                                
                                                    $(" #lastColumn > div").css("pointer-events", "none");
                                                }
                                                
                                               
                                                }

                                            if(this.id.includes("Trow") &&  $(AllColumn[t][1]).hasClass("Red")==false &&  $(AllColumn[t][1]).hasClass("yeloow")==false ){

                                                $(AllColumn[t][1]).addClass(className)
                                          
                                                  
                                                if(t<=4) {  

                                                    t++
                                                }
                                                if (t==4){
                                                
                                                    $(" #thirdColumn > div").css("pointer-events", "none");
                                                }
                                                
                     
                                            }
                   
                                                if(this.id.includes("Srow" ) &&  $(AllColumn[s][2]).hasClass("Red")==false &&  $(AllColumn[s][2]).hasClass("yeloow")==false ){

                                                $(AllColumn[s][2]).addClass(className)
                                                
                                                     
                                                if(s<=4) {  

                                                    s++
                                                }
                                                if (s==4){
                                                
                                                    $(" #secondColumn > div").css("pointer-events", "none");
                                                }
                                                
               
                                            }
                                     
                                                if(this.id.includes("Frow") &&  $(AllColumn[f][3]).hasClass("Red")==false &&  $(AllColumn[f][3]).hasClass("yeloow")==false ){

                                                $(AllColumn[f][3]).addClass(className)
                                               
                                                
                                                if(f<=4) {  

                                                   
                                                    f++
                                                }
                                                if (f==4){
                                                
                                                    $(" #firstColumn > div").css("pointer-events", "none");
                                                }
                                                
                                               
                                                }
                                                /*check win by counting each possiple win way by counting the length of the columns and rows 
                                                when the game start each length will be 4 */ 
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
                      $("#H2one").text(" ")
                  
                      stopClick()
                     

                            
                });
                //stop the clicking  in the game after each round
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

