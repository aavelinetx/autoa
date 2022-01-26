function Eskuineko_intermitentea2 () {
    basic.showLeds(`
        . . . . .
        . . . # #
        . . . # #
        . . . # #
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        Ezkerreko_intermitentea()
    }
    if (receivedNumber == 2) {
        Eskuineko_intermitentea2()
    }
    if (receivedNumber == 3) {
        Limpiaparabrisas()
    }
})
function Limpiaparabrisas () {
    pins.servoWritePin(AnalogPin.P0, 180)
}
function Ezkerreko_intermitentea () {
    basic.showLeds(`
        . . . . .
        # # . . .
        # # . . .
        # # . . .
        . . . . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.pause(500)
}
radio.setGroup(8)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        radio.sendNumber(1)
    } else if (input.buttonIsPressed(Button.B)) {
        radio.sendNumber(2)
    }
    if (input.logoIsPressed()) {
        radio.sendNumber(3)
    }
})
