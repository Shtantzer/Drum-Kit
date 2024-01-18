//Detektiranje pritiska misa

var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfDrumButtons; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function () { 
        
    var buttonInnerHTML = this.innerHTML;

    console.log(buttonInnerHTML);

    
    });
}

//Detektiranje tipkovnice

document.addEventListener("keypress", function (e) {
    
    console.log(e);
});







