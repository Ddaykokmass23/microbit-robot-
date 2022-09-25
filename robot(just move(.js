radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P1, 1)
    }
    if (receivedNumber == 2) {
        pins.digitalWritePin(DigitalPin.P0, -1)
        pins.digitalWritePin(DigitalPin.P0, -1)
    }
    if (receivedNumber == 3) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P0, 0)
    }
    if (receivedNumber == 4) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P0, 1)
    }
})
radio.setGroup(1)
