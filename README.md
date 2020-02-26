# Slider
![Preview - two sliders on one screen](/extras/preview.jpg)

# Description
Allows for a continuous slider with no markers along the way (for more subjective ratings)

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
To use this plug-in as-is, just download the slider.fieldplugin.zip file from this repo, and attach it to your form.

To create your own field plug-in using this as a template, follow these steps:

1. Fork this repo

2. Make changes to the files in the `source` directory.

  -Note: be sure to update the `manifest.json` file as well.
  
3. Zip the updated contents of the `source` directory.

4. Rename the .zip file to *yourpluginname*.fieldplugin.zip (replace *yourpluginname* with the name you want to use for your plug-in).

5. You may then attach your new .fieldplugin.zip file to your form as normal.

# Parameters
There should be two parameters included. The first represents the minimum value of the range and the second represents the maximum value of the range. For example to create a slider range from 0 to 150, you can use this apprearance
`custom-slider(A="0", B="150")`

# More Resources
-__Test form__
You can find a form definition in this repo here: extras/test-form. This form will help you compare your text field plug-in to the default text field. Click here for instructions.

-__Developer documentation__
More instructions for developing and using field plug-ins can be found here: https://github.com/surveycto/Field-plug-in-resources
