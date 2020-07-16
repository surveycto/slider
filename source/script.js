// Find the input element
var input = document.getElementById('myRange')
var slider = document.getElementById('slider_value')

// collect parameters entered in Form Definition
var parameters = fieldProperties.PARAMETERS
var fieldType = fieldProperties.FIELDTYPE
var currentValue = fieldProperties.CURRENT_ANSWER

// get parameter values and set the max and min based on these
input.min = parameters[0].value
input.max = parameters[1].value
var stepSize = parameters[2].value

if (fieldType === 'integer') {
  if ((parameters[3] != null) && (stepSize % 1 === 0)) {
    input.step = stepSize
  } else {
    input.step = 1
  }
} else if (fieldType === 'decimal') {
  if ((parameters[3] != null) && (stepSize % 1 !== 0)) {
    input.step = stepSize
  } else {
    input.step = 0.1
  }
}

// Define what happens when the user attempts to clear the response
function clearAnswer () {
  input.innerHTML = ''
}

// If the field is not marked readonly, then focus on the field
function setFocus () {
  if (!fieldProperties.READONLY) {
    input.focus()
  }
}

// Save the user's response (update the current answer)
input.oninput = function () {
  setAnswer(this.value)
  if (parameters[3] != null) {
    slider.innerHTML = input.value
  }
}

if (currentValue != null) {
  if (parameters[3] != null) {
    slider.innerHTML = currentValue
  }
  input.value = currentValue
}
