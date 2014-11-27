function Song(songName) {
    this.songName = songName || undefined;
    this.songsList = [];
}

/**
 *  @desc: method to add songs to the songsList
 *  @params: none
 *  @return: (void)
 * */
Song.prototype.addSongs = function () {
    // todo : add a error handler so that this check can be replicated
    var songs = new Song();
    songs.errorMsg();
    this.songsList.push(this.songName);
};


Song.prototype.errorMsg = function () {
    return !this.songName ? "No song added to be played" : "";
};

Song.prototype.persistFavoriteStatus = function (value) {
    // something complicated
    throw new Error("not yet implemented");
};