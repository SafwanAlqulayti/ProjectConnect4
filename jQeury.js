window.onload = function() {
 $(document).ready(function(){

          var AllColumn = [ ["#Lrow4","#Trow4","#Srow4" ,"#Frow4"] ,
                             ["#Lrow3","#Trow3","#Srow3","#Frow3"],
                             ["#Lrow2","#Trow2","#Srow2" , "#Frow2"],
                            ["#Lrow1","#Trow1","#Srow1" , "#Frow1"] ]
              
                                var playerTurnCounter = 0
                                var l= 0
                                var t =0
                                var s =0
                                var f =0
                                var className = " "
                                // function pleyerTurn(){

                                //     if(playerTurnCounter ==  0){
                                //         className = "Red"
                                //         playerTurnCounter++
                                //     }else {
                                         
                                //             className= "yeloow"
                                //             playerTurnCounter--
                                //         }
            
                                //     }
                                //     pleyerTurn()
                        
                                //     if(this.id.includes("Lrow") ){
        
                                //                         $(AllColumn[l][0]).addClass(className)
                                //                         $(this).off("click")
                                //                         l++
                                                          
                                                        
                                //                         }
                                
                                 
                                $(".content1 >  #firstColumn > div , #secondColumn > div ,#thirdColumn > div ,#lastColumn > div").click ( function(){
                                    
                                    console.log(className)
                         
                                                if(playerTurnCounter == 0 &&  this.id.includes("Lrow") ){

                                                    $(AllColumn[l][0]).addClass("Red")
                                                        $(this).off("click")
                                                    l++
                                                        playerTurnCounter++
                                                        
                                                    }
                                                    
                                                    else  if(playerTurnCounter == 1  &&  this.id.includes("Lrow"))  {  
                                
                                                        $(AllColumn[l][0]).addClass("yeloow")
                        
                                                        l++
                                                        playerTurnCounter--
                        
                                
                                                    }
                                          


                                         
                                           

                                            if(playerTurnCounter == 0 &&  this.id.includes("Trow") ){

                                                $(AllColumn[t][1]).addClass("Red")
                                                    $(this).off("click")
                                                t++
                                                    playerTurnCounter++
                                                    
                                                }
                                                
                                                else  if(playerTurnCounter == 1  &&  this.id.includes("Trow"))  {  
                            
                                                    $(AllColumn[t][1]).addClass("yeloow")
                    
                                                    t++
                                                    playerTurnCounter--
                    
                            
                                                }
                                                if(playerTurnCounter == 0 &&  this.id.includes("Srow") ){

                                                $(AllColumn[s][2]).addClass("Red")
                                                    $(this).off("click")
                                                s++
                                                    playerTurnCounter++
                                                    
                                                }
                                                
                                                else  if(playerTurnCounter == 1  &&  this.id.includes("Srow"))  {  
                            
                                                    $(AllColumn[s][2]).addClass("yeloow")
                    
                                                    s++
                                                    playerTurnCounter--
                    
                                                }
                                                if(playerTurnCounter == 0 &&  this.id.includes("Frow") ){

                                                $(AllColumn[f][3]).addClass("Red")
                                                    $(this).off("click")
                                                f++
                                                    playerTurnCounter++
                                                    
                                                            }
                                                                else  if(playerTurnCounter == 1  &&  this.id.includes("Frow"))  {  
                            
                                                    $(AllColumn[f][3]).addClass("yeloow")
                    
                                                    f++
                                                    playerTurnCounter--
                    
                                                }

                    });
                 
                                         
    });//ready
}//windo
