"use strict"

function SmartHouse(name) {
    this._name = name;
    this._devices = [];
}
SmartHouse.prototype.getDevices = function(){
    return this._devices;
}

SmartHouse.prototype.getDeviceByName = function(name){
    var device = this._devices.find(function(){
        if(this._name === name){
            return name;
        }
    })
    return device;
}

SmartHouse.prototype.addDevice = function (name) {
    var newDevice = new Devices(name);
    this._devices.push(newDevice);
}

SmartHouse.prototype.deleteDeviceByName = function(name){
    var device = this._devices.indexOf(name);
    device.toString().slice(name);

}

var sh = new SmartHouse("sh1");
