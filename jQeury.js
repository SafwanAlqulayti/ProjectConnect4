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
                                var redScore = 0
                                var atStart =  $(".content1 >  #firstColumn > div , #secondColumn > div ,#thirdColumn > div ,#lastColumn > div").clone()
                              

                                

                                var className = " " 
                                
                                function pleyerTurn(){

                                    if(playerTurnCounter ==  0){
                                        className = "Red"
                                        playerTurnCounter++
                                    }else {
                                         
                                            className= "yeloow"
                                            playerTurnCounter--
                                        }
            
                                    }
                
                                    
                                $(".content1 >  #firstColumn > div , #secondColumn > div ,#thirdColumn > div ,#lastColumn > div").click ( function(){

                                     
                                    pleyerTurn()
                                     
                                     
                         
                                                if(this.id.includes("Lrow") ){

                                                    $(AllColumn[l][0]).addClass(className)
                                                        
                                                    l++
                                                    //if < 4 in one state
                                                }

                                            if(this.id.includes("Trow") ){

                                                $(AllColumn[t][1]).addClass(className)
                                                  
                                                t++
                     
                                            }
                   
                                                if(this.id.includes("Srow") ){

                                                $(AllColumn[s][2]).addClass(className)
                                                     
                                                s++
               
                                            }
                                     
                                                if(this.id.includes("Frow") ){

                                                $(AllColumn[f][3]).addClass(className)
                                                    
                                                f++
                                                }
                                             
                        if($(".c1").not(".Red").length == 0  ||$(".c2").not(".Red").length == 0 ||
                        $(".c3").not(".Red").length == 0 || $(".c4").not(".Red").length == 0 ||
                        $(".r2").not(".Red").length == 0 ||  $(".r1").not(".Red").length == 0 ||
                        $(".r3").not(".Red").length == 0 ||  $(".r4").not(".Red").length == 0 ||
                        $(".d1").not(".Red").length == 0 

                        ){
                            alert("Red wins")
                            $("#H2id").append("<p>Red Now</p>" + (redScore+1) )
                          }

                          else if( $(".c2").not(".yeloow").length == 0 || $(".c1").not(".yeloow").length == 0 ||
                          $(".c3").not(".yeloow").length == 0 || $(".c4").not(".yeloow").length == 0||
                          $(".r2").not(".yeloow").length == 0 ||  $(".r1").not(".yeloow").length == 0 ||
                          $(".r3").not(".yeloow").length == 0 ||  $(".r4").not(".yeloow").length == 0  ||
                          $(".d1").not(".yeloow").length == 0 ){
                              alert("Yeloow win")
                          }
                          else if (counter == 16){
                              alert("it is a tie")
                          }
                          counter ++
                                                // for(i=0 ; i<AllColumn.length ; i++){
                                                //     for(j=0 ; j<AllColumn[i].length ; j ++){
                               
                                                //        if($(AllColumn[i][j]).hasClass("Red") == true && redCounter < 4){
                                                //             redCounter++
                                                //             alert("sss")
                                                            
                                                //        } 
                                                      
                                                //     }
                                                // }
                                           
                                                


                    });

                    // function check(){
                    //     var arrCheck = [".c1",".c2",".c3"]
                    //     for(i =0 ; i< arrCheck.length ; i ++){
                    //         if($(i).not(".yeloow").length  == 0){
                    //             alert("yeloow win")
                    //         }
                    //     }
                    // }
           
                    
                         
                           
                             
                // $("#Restart").click(function(){

                //     $( $(".content1 >  #firstColumn > div , #secondColumn > div ,#thirdColumn > div ,#lastColumn > div")).replaceWith() 
                // })           
                       
                 
                                         
    });//ready
}//windo
