OLED.init(128, 64)
tinkercademy.crashSensorSetup(DigitalPin.P0)
basic.forever(function () {
    if (tinkercademy.crashSensor()) {
        OLED.writeStringNewLine("allt är lugnt")
        pins.digitalWritePin(DigitalPin.P1, 1)
        control.waitMicros(500000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        control.waitMicros(500000)
        pins.digitalWritePin(DigitalPin.P8, 0)
    } else {
        OLED.writeStringNewLine("varning varning varning - någon har tagit din grej")
        pins.digitalWritePin(DigitalPin.P1, 0)
        pins.digitalWritePin(DigitalPin.P8, 1)
        control.waitMicros(50000)
        pins.digitalWritePin(DigitalPin.P8, 0)
        control.waitMicros(50000)
    }
})
