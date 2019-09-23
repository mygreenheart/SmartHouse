"use strict"

function Conditioning(name, mode, capacity){
    this._name = name;
    this._mode = mode;
    this._capacity = capacity;
}

Conditioning.prototype.getName = function(){
    return this._name;
};

Conditioning.prototype.changeMode = function(mode){
    if(mode === true){
        this._mode = mode;
        return console.log("Выбран режим обогрева");
    }
    else{
        this._mode = false;
        return console.log("Выбран режим охлождения");
    }
}

Conditioning.prototype.setCapacity = function(capacity){
    if(capacity <= 100 && capacity >= 0){
        this._capacity = capacity;
        return console.log("Мощность кондиционера установлена: ", capacity);
    }
    else{
        console.log("Вы ввели неправильное значение, попробуйте значение от 0 до 100");
    }
}

var samsa = new Conditioning("samsung")