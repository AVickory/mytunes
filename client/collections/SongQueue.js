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
      if(this.length) {
        this.remove(song);
      }
      if(this.length){
        this.playFirst();  
      }

    }, this)
  },

  addSong: function (song) {
    this.add(song);
  },

  // dequeue: function (currentSong) {
  //   console.log(99)
  //   this.remove(this.at(0));
  //   if(this.length){
  //     this.playFirst();  
  //   }
  //   console.log(2)
  // },

  playFirst: function () {
    //this.trigger('playFirst', this.at(0));
    this.at(0).play();
    //this.set('currentSong', this.at(0));
  }

});