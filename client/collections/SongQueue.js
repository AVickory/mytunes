// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    console.log(100)
  },

  addSong: function (song) {
    // var len = this.length;
    this.add(song);
    // if(this.length !== len) {
    //   if(this.get('count') >= 1) {
    //     console.log(this.count)
    //     song.set('count', this.get('count') + 1);
    //   } else {
    //     song.set('count', 1);
    //   }
    // }
  },

  playFirst: function () {
    //this.trigger('playFirst', this.at(0));
    this.at(0).play();
    //this.set('currentSong', this.at(0));
  }

});