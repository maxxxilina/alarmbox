OLED.init(128, 64)
tinkercademy.crashSensorSetup(DigitalPin.P0)
basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P2)) {
        OLED.writeStringNewLine("--- inga problem --- ")
        pins.digitalWritePin(DigitalPin.P1, 1)
        control.waitMicros(500000)
        pins.digitalWritePin(DigitalPin.P1, 0)
        control.waitMicros(500000)
        pins.digitalWritePin(DigitalPin.P8, 0)
        if (tinkercademy.crashSensor()) {
        	
        } else {
            OLED.writeStringNewLine("varning varning alarm")
            pins.digitalWritePin(DigitalPin.P1, 0)
            pins.digitalWritePin(DigitalPin.P8, 1)
            control.waitMicros(50000)
            pins.digitalWritePin(DigitalPin.P8, 0)
            control.waitMicros(50000)
        }
    } else {
        OLED.writeStringNewLine("skriv in kod")
    }
})
