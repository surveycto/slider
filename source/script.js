/* global $, fieldProperties, setAnswer, getPluginParameter, clearAnswer, getMetaData, setMetaData */

// Find the input element
var input = document.getElementById('myRange')
var slider = document.getElementById('slider_value')

// collect parameters entered in Form Definition
var min = getPluginParameter('min')
var max = getPluginParameter('max')
var step = getPluginParameter('step')
var displayValue = getPluginParameter('display_value')

var fieldType = fieldProperties.FIELDTYPE
var currentValue = fieldProperties.CURRENT_ANSWER

// get parameter values and set the max and min based on these
input.min = parseInt(min)
input.max = parseInt(max)
var stepSize = parseInt(step)

if (fieldType === 'integer') {
  if ((displayValue != null) && (stepSize % 1 !== 0)) {
    input.step = stepSize
  } else {
    input.step = 1
  }
} else if (fieldType === 'decimal') {
  if ((displayValue != null) && (stepSize % 1 !== 0)) {
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
  } else {
    input.disabled = true
  }
}

// Save the user's response (update the current answer)
input.oninput = function () {
  setAnswer(this.value)
  if (displayValue != null) {
    slider.innerHTML = input.value
  }
}

if (currentValue != null) {
  if (displayValue != null) {
    slider.innerHTML = currentValue
  }
  input.value = currentValue
}
