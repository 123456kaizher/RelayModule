input.onButtonPressed(Button.A, function () {
    pins.analogWritePin(AnalogPin.P1, 1)
})
input.onButtonPressed(Button.B, function () {
    pins.analogWritePin(AnalogPin.P1, 0)
})
basic.forever(function () {
	
})
