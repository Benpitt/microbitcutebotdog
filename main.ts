let sensor = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
if (sensor > 400 && sensor < 2) {
    radio.sendString("" + (sensor))
    basic.showIcon(IconNames.No)
} else {
    basic.showIcon(IconNames.Yes)
}
basic.forever(function () {
	
})
