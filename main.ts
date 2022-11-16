basic.showIcon(IconNames.House)
basic.forever(function () {
    if (input.pinIsPressed(TouchPin.P0)) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
        music.playTone(262, music.beat(BeatFraction.Double))
        servos.P2.setAngle(180)
        basic.pause(1000)
        servos.P2.setAngle(0)
        basic.pause(1000)
    }
})
