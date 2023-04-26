sensor = cuteBot.ultrasonic(cuteBot.SonarUnit.CENTIMETERS)
if sensor < 200 and sensor > 2:
    radio.send_string("" + str((sensor)))
    basic.show_icon(IconNames.NO)
else:
    basic.show_icon(IconNames.YES)

def on_forever():
    radio.set_group(18)
basic.forever(on_forever)
