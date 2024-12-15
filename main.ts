bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Dollar), function () {
    let Blank = 0
    Blank_fill_2()
    pins.analogWritePin(Blank, 1023)
    if (input.buttonIsPressed(Button.A)) {
        pins.analogWritePin(Blank, 0)
    }
})
bluetooth.onBluetoothConnected(function () {
    basic.showString("Bluetooth connected")
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showString("Bluetooth disconnected")
})
function Blank_fill_2 () {
    basic.showLeds(`
        # . # . #
        . . . . .
        # . # . #
        . . . . .
        # . # . #
        `)
    basic.pause(100)
    basic.clearScreen()
}
function Blank_fill () {
    basic.showIcon(IconNames.Chessboard)
    basic.pause(100)
    basic.clearScreen()
}
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.Hash), function () {
    for (let index = 0; index < 10; index++) {
        Blank_fill()
    }
})
bluetooth.setTransmitPower(7)
bluetooth.startUartService()
