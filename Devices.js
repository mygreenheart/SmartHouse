"use strict"

function Devices(name) {
    this._name = name;
    this._isOn = false;
}

Devices.prototype.getName = function () {
    return this._name;
}

Devices.prototype.onOff = function () {
  this._isOn ? this._isOn = false : this._isOn = true;
}

Devices.prototype.setTimeoutOff = function (time) {
    setTimeout(
        this._isOn = false,
        time
    )
}
