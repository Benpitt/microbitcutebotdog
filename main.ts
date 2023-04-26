let sensor = 0
radio.setGroup(18)
basic.forever(function () {
    basic.showNumber(sensor)
    sensor = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sensor < 200 && sensor > 2) {
        radio.sendString("" + (sensor))
    } else {
    	
    }
})
