"use strict"

function Column(name, mode, volume,currentSong) {
    this._name = name;
    this._mode = mode;
    this._volume = volume;
    this._currentSong = currentSong;
    this.playlist = ["The Beatles - Let it be", "Eminem - Rap god", "Iggy Pop - Passenger", "Queen - Bohemian Rhapsody", "Ляпис Трубецкой - Евпатория"]
   /*this._playlist = function() {
       var playlist = {
           "Iggy Pop": "The Passenger",
           "Queen": ["Radio GaGa", "Bohemian Rhapsody", "Another One Bites The Dust"],
           "Ляпис Трубецкой": ["Танцуй", "Евпатория"]
       };
   }*/
}
Column.prototype.getName = function(){
    return this._name;
};

Column.prototype.chooseMode = function(mode){
   switch(mode){
       case "aux":
           return this._mode = "aux";
           break;
        case "bluetooth":
           return this._mode = "bluetooth";
           break;
        case "radio":
            return this._mode = "radio";
            break;
        default: 
            console.log("Ввели неправильное значени, попробуйте выбрать из [AUX, BLUETOOTH, RADIO]")
   }
};

Column.prototype.getMode = function(){
    return this._mode;
}

Column.prototype.volumeUp = function(){
    return this._volume =  this._volume+2;
}

Column.prototype.volumeDown = function(){
    return this._volume =  this._volume-2;
}

Column.prototype.showPlaylist = function(){
    return console.dir(this.playlist);
}

/*Column.prototype.addToPlaylist = function(nameSinger, nameSong){
  Object.assign(this.playlist, {nameSinger: nameSong});
}*/

Column.prototype.playSong = function(currentSong){
    
    currentSong = this.playlist[Math.floor(Math.random()*this.playlist.length)];//Возвращает рандомный элемент массива playlist
    this._currentSong = currentSong;
    return console.log("Сейчас играет",currentSong);
 
}

var jbl = new Column("JBL","aux",6);