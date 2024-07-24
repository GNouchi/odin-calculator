# odin-calculator
https://www.theodinproject.com/lessons/foundations-calculator


press numbers should record a number for val_1 until a function is pressed
once a function is pressed, numbers should record only ever for val_2
and function press should then trigger operate and change the val1 subtotal before changing the operation


standard:
<!-- input number for val_1 -->
<!-- press function -->
<!-- input number for val_2 -->
<!-- press equals -->

edge :
<!-- press function before values are entered -->
<!-- divide by zero or null -->
<!-- floats -->
<!-- enter val 1 press equals -->
<!-- enter val1 enter function enter val 2 press non equal operator -->
<!-- press two function calls one after another -->

extra:
<!-- add keyboard functionality -->
add backspace button (not doing because of google chrome backspace extension)
add decimal button (would have to rearrange all the button on the calc)
highlight function in use


bugs & etc.:
there is a rare issue where numpad 'enter' triggers clear function when multiple functions are pressed without a null value
--could probably write a helper function to combine the function case statements