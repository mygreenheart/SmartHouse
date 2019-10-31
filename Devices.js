"use strict"
import Column from "./Column.js"
import Conditioning from "./Conditioning.js"

function Devices(name,type){
    this._name = name;
    if(type == "column"){
        this._typeDevice = Column;
    }
   else if(type == "conditiong"){
         this._typeDevice = Conditioning;
   }
   else throw "Ввели неправильное значение устройства"

}

Devices.prototype.getName = function (){
    return this._name;
}

var d = new Devices("jbl","column");