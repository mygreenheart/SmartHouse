"use strict"

function Column(name, mode) {
    this._name = name;
    this._mode = mode;
    this._volume = 2;
    this.playlist = ["The Beatles - Let it be", "Eminem - Rap god", "Iggy Pop - Passenger", "Queen - Bohemian Rhapsody", "Ляпис Трубецкой - Евпатория"]
    this._currentSong = this.playlist[0];

}
Column.prototype.getName = function () {
    return this._name;
};



Column.prototype.chooseMode = function (mode) {
    if(mode == "aux" || mode == "bluetooth" || mode == "radio") {
        this._mode = mode;
    } else  throw "Ввели неправильное значени, попробуйте выбрать из [AUX, BLUETOOTH, RADIO]"
};

Column.prototype.getMode = function () {
    return this._mode;
}

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
    return this._currentSong;
}


Column.prototype.chooseSong = function (songName) {
    if (this.playlist.indexOf(songName) > 0) {
        this._currentSong = songName;
    }
    else throw "Exeption"
}

Column.prototype.playSong = function () {
    return console.log("Сейчас играет", this._currentSong);

}

Column.prototype.playRandomSong = function () {
    currentSong = this.playlist[Math.floor(Math.random() * this.playlist.length)];//Возвращает рандомный элемент массива playlist
    this._currentSong = currentSong;
    return console.log("Сейчас играет", currentSong);

}




var jbl = new Column("JBL", "aux", 6);
