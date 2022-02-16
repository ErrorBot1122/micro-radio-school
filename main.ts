let currentGroup = 0;
radio.setGroup(currentGroup);
basic.showString("RADIO");
basic.showString("CURRENT GROUP");
basic.showNumber(currentGroup);

input.onButtonPressed(Button.A, function () {
    currentGroup += 1;
    radio.setGroup(currentGroup);
    basic.showNumber(currentGroup);
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString);
})
input.onButtonPressed(Button.B, function () {
    currentGroup += -1;
    radio.setGroup(currentGroup);
    basic.showNumber(currentGroup);
})