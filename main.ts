radio.onReceivedString(function (receivedString) {
    action = receivedString
    if (action == "F") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 200)
    } else if (action == "B") {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, 200)
    } else if (action == "R") {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 40)
    } else if (action == "L") {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 0)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 40)
    } else if (action == "S") {
        maqueen.motorStop(maqueen.Motors.All)
    }
})
let action = ""
radio.setGroup(1)
