
$(document).on("keypress", function(event){   

    var change = event.key;
    
   keyClick(change);
 })

$(".drum").on("click", function(){

    var buttonClick = $(this).html();
    
    keyClick(buttonClick);
})
//      this code loop through each element selected
//     $(".drum").each(function(index, element){

//         $(element).on("click", function(){

//         // $(element).html("see");
//         var clickCheck = $(element).html();

//         keyClick(clickCheck);

//         })

// }) 




 function keyClick(detect){

    switch (detect) {
        case "w":
            var tom1 = new Audio("drumtones/Tom1.wav");
            tom1.play();
           break;
    
        case "a":
            var tom2 = new Audio("drumtones/Tom2.wav");
             tom2.play();
           break;
    
        case "s":
        var tom3 = new Audio("drumtones/Tom3.wav");
             tom3.play();
           break;
    
        case "d":
            var tom4 = new Audio("drumtones/Tom4.wav");
                 tom4.play();
            break;
               
        case "j":
            var snare = new Audio("drumtones/snare.wav");
                snare.play();
            break; 
        
        case "k":
            var cymbal = new Audio("drumtones/cymbal.wav");
                cymbal.play();
            break; 
    
        case "l":
            var kick = new Audio("drumtones/kick.wav");
                kick.play();
            break; 
    
        default: console.log("free me");
    }

 }
   

