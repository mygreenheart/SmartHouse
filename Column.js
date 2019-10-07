"use strict"


function Column(name, mode) {
    this._name = name;
    this._mode = mode;
    this._volume = 50;
    this._currentSong = playlist[0];
    this.playlist = ["The Beatles - Let it be", "Eminem - Rap god", "Iggy Pop - Passenger", "Queen - Bohemian Rhapsody", "Ляпис Трубецкой - Евпатория"]
}
Column.prototype.getName = function(){
    return this._name;
};



Column.prototype.chooseMode = function(mode){
   switch(mode){
       case "aux":
            this._mode = "aux";
           break;
        case "bluetooth":
            this._mode = "bluetooth";
           break;
        case "radio":
             this._mode = "radio";
            break;
        default: 
        throw "Ввели неправильное значени, попробуйте выбрать из [AUX, BLUETOOTH, RADIO]"
   }
};

Column.prototype.getMode = function(){
    return this._mode;
}

Column.prototype.volumeUp = function(){
    if(this._volume >= 0 && this._volume <= 100){
        this._volume =  this._volume+2;
    }
    else throw "Громкость выходит за пределы доступного";

}

Column.prototype.volumeDown = function(){
    if(this._volume >= 0 && this._volume <= 100){
        this._volume =  this._volume-2;
    }
    else throw "Громкость выходит за пределы доступного";

}

Column.prototype.volumeShow = function(){
    return this._volume;
}    

Column.prototype.showPlaylist = function(){
    return this.playlist;
}


Column.prototype.playSong = function(currentSong){
    
    currentSong = this.playlist[Math.floor(Math.random()*this.playlist.length)];//Возвращает рандомный элемент массива playlist
    this._currentSong = currentSong;
    return console.log("Сейчас играет",currentSong);
 
}



var jbl = new Column("JBL","aux",6);