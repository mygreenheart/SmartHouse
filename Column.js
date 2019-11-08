"use strict"


function Column(name) {

    this._mode = ["aux", "bluetooth", "radio"];
    this._currentMode = this._mode[0];
    this._volume = 50;
    this.playlist = ["The Beatles - Let it be", "Eminem - Rap god", "Iggy Pop - Passenger", "Queen - Bohemian Rhapsody", "Ляпис Трубецкой - Евпатория"]
    this._currentSong = this.playlist[0];
    Devices.call(this, name);

}

Column.prototype = Object.create(Devices.prototype);


Column.prototype.getMode = function () {
    return this._currentMode;
}

Column.prototype.chooseMode = function (mode) {
    switch (mode) {
        case "aux":
            this._currentMode = this._mode[1];
            break;
        case "bluetooth":
            this._currentMode = this._mode[2];
            break;
        case "radio":
            this._currentMode = this._mode[3];
            break;
        default:
            throw "Неверный выбор. Попробуйте [aux,bluetooth,radio]"
    }

};


Column.prototype.volumeUp = function () {
    if (this._volume < 100) {
        this._volume = this._volume + 2;
    }
    else throw "Громкость выходит за пределы доступного";

}

Column.prototype.volumeDown = function () {
    if (this._volume > 0) {
        this._volume = this._volume - 2;
    }
    else throw "Громкость выходит за пределы доступного";

}

Column.prototype.getVolume = function () {
    return this._volume;
}

Column.prototype.getPlaylist = function () {
    return this.playlist;
}

Column.prototype.getSong = function () {
    return this.playSong[this._currentSong];
}

Column.prototype.chooseSong = function (songName) {
    if (this.playlist.indexOf(songName) > 0) {
        this._currentSong = songName;
    } else throw "Exeption"
}

Column.prototype.playSong = function () {
    return console.log("Сейчас играет", this._currentSong);

}

Column.prototype.playRandomSong = function () {
    this._currentSong = this.playlist[Math.floor(Math.random() * this.playlist.length)];//Возвращает рандомный элемент массива playlist
    return console.log("Сейчас играет", this._currentSong);

}



