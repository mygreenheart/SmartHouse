"use strict"

function Conditioning(name) {
    Devices.call(this, name);
    this._mode = ["cool", "heat", "dry"];
    this._currentMode = this._mode[0];
    this._capacity = 10;
}

Conditioning.prototype = Object.create(Devices.prototype);
Conditioning.prototype.constructor = Devices;

Conditioning.prototype.getMode = function () {
    return this._currentMode;
}

Conditioning.prototype.changeMode = function (mode) {
    switch (mode) {
        case "cool":
            this._currentMode = this._mode[1];
            break;
        case "heat":
            this._currentMode = this._mode[2];
            break;
        case "dry":
            this._currentMode = this._mode[3];
            break;
        default:
            throw "Неверный выбор. Попробуйте [cool, heat, dry]"
    }

    Conditioning.prototype.setCapacity = function (capacity) {
        if (capacity <= 10 && capacity >= 0) {
            this._capacity = capacity;
        }
        else throw "Ввели недопустимое значение"
    }

}
var samsa = new Conditioning("samsung");