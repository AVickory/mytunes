// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {

    this.on('ended', function (song) {
      song.dequeue();
    });

    this.on('add', function () {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('dequeue', function (song) {
      if(this.length >= 1) {
        this.remove(song);
      }
      if(this.length >= 1){
        this.playFirst();  
      } else {
        this.trigger('stop')
      }

    }, this)
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