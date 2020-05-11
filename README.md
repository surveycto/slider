# Slider
![Preview - two sliders on one screen](/extras/slider.jpg)

# Description
Allows for a continuous slider with no markers along the way (for more subjective ratings)

[![Download now](extras/download-button.png)](https://github.com/surveycto/slider/blob/master/slider.fieldplugin.zip)

# Default SurveyCTO feature support

Feature / Property |	Support
------------------ |  ---------
Supported field type(s) |	integer, decimal
Default values	| Yes
Constraint message	| Uses default behavior
Required message | Uses default behavior
Read only	| Yes (shows the current value, if present)
media:image	| Yes
media:audio	| Yes
media:video	| Yes

# How to use

1. Download the test form [extras/sample-form](https://github.com/SurveyCTO-field-plug-ins/slider-label/blob/master/extras/sample_form/slider_label_sample.xlsx) from this repo and upload it to your SurveyCTO server.
1. Download the [slider.fieldplugin.zip](https://github.com/surveycto/slider/raw/master/slider.fieldplugin.zip) file from this repo, and attach it to the test form on your SurveyCTO server.
1. Make sure to provide the correct parameters (see below).

# Parameters
The plugin can take upto 4 parameters.
1. min - The lowest value in the range of permitted values
2. max - The greatest value in the range of permitted values
3. step - The step attribute is a number that specifies the granularity that the value must adhere to. The default is 1 for integer and 0.1 for decimals
4. display_value (optional) - use this to display the current value of the slider below the slider.  

Example usage is as follows:  

`custom-slider(min="0", max="150", step=5)`  
`custom-slider(min="0", max="1", step=0.01)`  
`custom-slider(min="0", max="100", step=1, display_value='yes')`

# More Resources
-__Test form__

 You can find a form definition in this repo here: [extras/sample_form](https://github.com/surveycto/slider/blob/master/extras/example-form/Example%20form%20-%20slider.xlsx). This form will help you create a sample form to test the functionality of the plugin.

-__Developer documentation__

More instructions for developing and using field plug-ins can be found here: https://github.com/surveycto/Field-plug-in-resources
