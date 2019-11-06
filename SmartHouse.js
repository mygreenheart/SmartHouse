"use strict"

function SmartHouse(name) {
    this._name = name;
    this._devices = [];
}
SmartHouse.prototype.getDevices = function () {
    return this._devices;
}

SmartHouse.prototype.getDeviceByName = function (name) {
    var device = this._devices.find(function () {
        if (name === name) {
            return name;
        }
    })
    return device;
}

SmartHouse.prototype.addDevice = function (name) {
    var newDevice = new Devices(name);
    this._devices.push(newDevice);
}

SmartHouse.prototype.deleteDeviceByName = function (name) {
    var device = this._devices.indexOf(name);
    if(device > -1){
        this._devices.splice(device,1);
    }else throw "Ввели неверное название"
    }
   

var sh = new SmartHouse("sh1");

sh.addDevice(new Conditioning("lg"));
sh.addDevice(new Column("jbl"));
sh.addDevice(new Column("jbl2"));

console.log(sh.getDevices());
