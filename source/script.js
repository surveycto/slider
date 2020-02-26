// Find the input element
var input = document.getElementById('myRange');

//collect parameters entered in Form Definition
var parameters = fieldProperties.PARAMETERS;

//get parameter values and set the max and min based on these
input.min = parameters[0].value;
input.max = parameters[1].value;



//Define what happens when the user attempts to clear the response
function clearAnswer() {
    input.innerHTML = '';
} 

//If the field is not marked readonly, then focus on the field
function setFocus() {
    if(!fieldProperties.READONLY){
        input.focus();
    }
}

// Save the user's response (update the current answer)
input.oninput = function() {
    setAnswer(this.value);
}
