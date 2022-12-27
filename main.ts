radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 5) {
        ESTADO = 4
    } else {
        ESTADO = 1
        BolaX = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    if (PalaX > 0) {
        PalaX += -1
    }
})
input.onButtonPressed(Button.B, function () {
    if (PalaX < 4) {
        PalaX += 1
    }
})
let ESTADO = 0
let BolaX = 0
let PalaX = 0
PalaX = 2
let PalaY = 4
BolaX = 2
let BolaY = 0
ESTADO = 1
radio.setGroup(1)
basic.forever(function () {
    basic.clearScreen()
    if (ESTADO == 1) {
        led.plot(BolaX, BolaY)
        led.plot(PalaX, PalaY)
        led.plot(PalaX + 1, PalaY)
    } else if (ESTADO == 2) {
        led.plot(BolaX, BolaY)
        led.plot(PalaX, PalaY)
    } else if (ESTADO == 3) {
        led.plot(PalaX, PalaY)
        led.plot(PalaX + 1, PalaY)
    } else if (ESTADO == 4) {
        basic.showIcon(IconNames.Heart)
    } else {
        basic.showIcon(IconNames.Skull)
    }
})
loops.everyInterval(500 - control.millis() / 1000000, function () {
    if (ESTADO == 1) {
        BolaY += 1
        if (BolaY == 4) {
            if (BolaX == PalaX || BolaX == PalaX + 1) {
                ESTADO = 2
            } else {
                ESTADO = 0
                radio.sendNumber(5)
            }
        }
    } else if (ESTADO == 2) {
        BolaY += -1
        BolaX = PalaX
        if (BolaY == 0) {
            ESTADO = 3
            radio.sendNumber(BolaX)
        }
    } else {
    	
    }
})
