/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

let randomNumber: number

basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function () {
    randomNumber = randint(1, 6)
    basic.showNumber(randomNumber)
})

basic.clearScreen()

input.onButtonPressed(Button.B, function() {
    input.temperature()
})