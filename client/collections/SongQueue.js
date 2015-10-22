// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    this.currentSong = null;

    this.on('songEnd', function () {
      this.dequeue();
    });
  },

  addSong: function (song) {
    this.add(song);
  },

  dequeue: function (currentSong) {
    this.shift();
    console.log('shifted?');
    console.dir(this);
    this.playFirst();
  },

  playFirst: function () {
    this.trigger('playFirst', this.at(0));
    //this.set('currentSong', this.at(0));
  }

});