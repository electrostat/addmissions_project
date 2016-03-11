//HOW DO I ALTER THE PAGE? THAT'S THE QUESTION...
// use element.onfocus for the input field? --> edit the innerHTML? how does one do that from the script?
var myArray = ["Hello", "Bonjour", "Gutentag"];

function didThisWork(){
    console.log("Holla");
};

function returnTextInput () {
  var userInput = document.getElementById("textInput").value;
    document.write(userInput);
    
    console.log("conection functions");
    console.log(userInput);
};


    function keepStylin () {

        console.log("connection functions");
    };

//window.onload = function addMe(){ 
//    
//    document.getElementById(newGreeting).innerHTML = "Marhaban";
//}
//
//function runRepeats() {
//    var newElement = document.getElementById(newGreeting);
//    newElement.innerHTML = "Marhaban";
//    
////    console.log("here's something");
////    console.log(myArray);
////    return "connection complete!";
//};
//
//    
//
//    
//
//
//
//
//var phrases = ["Hello!", "Bonjour!", "Gutentag!", "Ni Hao!", "Hola!"]
//var boxInput = document.getElementById("thePrompt");
//
//handlTheEvent = function (boxInput) {
//    //IF BLOCK
//    var boxInput = parseInt(boxInput)
//    
//    if (boxInput == NaN || boxInput % 1 != 0) {
//        return "Please enter a whole number between 0 and 10"
//        //do you want to try to clear the box and start over? 
//    } else if (boxInput < 0 || boxInput > 10) {
//        return "Please enter a whole number between 0 and 10"
//    } else {
//        continue
//    } 
//    //END IF BLOCK
//    
//    //LOOP BLOCK
//    
//    for (i = 0; i <= boxInput, i++) {
//        return phrases
//        
//        if (count == 11){break}
//    }
//    
//    
////end of function
//}
//
//
//to get the button: http://www.w3schools.com/js/js_htmldom_elements.asp
//http://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_style_fontsize2
//
//http://www.poetryfoundation.org/poem/175772
//
//
//so you have an array of objects, tell it how many times you need it, and when you call the functions, the parameter should be user input (a text box -- you have the if-else be that if Nan then have an error pop up) sya onClick, run a function that grabs textbox.text and pass to the function in your javascript -- convert to integer (or bigger) -- 
//
//
//working with the array -- 
//ClickEvent(boxInput) {
//    returnArray = newArray[];
//    
//    for(i = 0; i < boxInput; i++){
//        returnArray.add(phrases);
//            OR 
//        returnArray.add(phrases)[0];
//        returnArray.add(phrases)[1];
//        returnArray.add(phrases)[2];
//    }
//    
//    return returnArray; 
//}
//    