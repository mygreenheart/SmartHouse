"use strict"

function Devices(name,type){
    this._name = name;
    if(type == "column"){
        this._typeDevice = type;
    }
   else if(type == "conditiong"){
         this._typeDevice = type;
   }
   else throw "Ввели неправильное значение устройства"

}

Devices.prototype.getName = function (){
    return this._name;
}

Devices.prototype.getMode = function(){
    return this._currentMode;
}

var d = new Devices("jbl","column");