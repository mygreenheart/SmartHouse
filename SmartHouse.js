"use strict"

function SmartHouse(name) {
    this._name = name;
    this._devices = [];
}
SmartHouse.prototype.getDevices = function () {
    return this._devices;
}

SmartHouse.prototype.getDeviceByName = function (name) {
    var device = this._devices.find(function (e) {
        return e.getName().getName() === name;
    })
    return device ;
}

SmartHouse.prototype.addDevice = function (name) {
    var newDevice = new Devices(name);
    this._devices.push(newDevice);
}

SmartHouse.prototype.deleteDeviceByName = function (name) {
   /*  for (var i in this._devices) {
        if (this._devices[i].getName() == this._devices[name] ){
            console.log("111");
            this._devices.splice[i, 1];
            
        }
    } */

    var device = this._devices.filter(function (e) {
        return e.getName().getName() !== name;
    })
    this._devices = device ;
}

var sh = new SmartHouse("sh1");

sh.addDevice(new Conditioning("lg"));
sh.addDevice(new Column("jbl"));
sh.addDevice(new Column("jbl2"));
sh.getDeviceByName("lg").onOff();
console.dir( sh.getDeviceByName("lg") );
console.dir( sh.getDevices() );
sh.deleteDeviceByName("jbl");
console.dir( sh.getDevices() );