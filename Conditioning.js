"use strict"

export default function Conditioning(name) {
    this._name = name;
    this._mode = ["sleep", "cool", "heat", "dry"];
    this._currentMode = this._mode[0];
    this._capacity = 10;
}

Conditioning.prototype.getName = function () {
    return this._name;
};

Conditioning.prototype.getMode = function () {
    return this._currentMode;
}

Conditioning.prototype.onOff = function () {
    if (this._currentMode == "sleep") {
        this._currentMode = this._mode[1];
    }
    else this._currentMode = this._mode[0];
}

Conditioning.prototype.changeMode = function (mode) {
    if (mode == "cool" || mode == "heat" || mode == "dry") {
        this._currentMode = mode;
    } else throw "Ввели неправильное значени, попробуйте выбрать из [COOL, HEAT, DRY]"
}

Conditioning.prototype.setCapacity = function (capacity) {
    if (capacity <= 10 && capacity >= 0) {
        this._capacity = capacity;
    }
    else throw "Ввели недопустимое значение"
}

Conditioning.prototype.setTimeoutOff = function (time) {
    setTimeout(
        this._currentMode = this._mode[0],
        time
    )
}

var samsa = new Conditioning("samsung")