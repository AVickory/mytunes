var SongQueueCollection = Backbone.Collection.extend({

  model: SongQueue,

  currentQueue: 0,

  initialize: function () {
    this.add();
    console.log(1)

    this.on('dequeue', function (song) {
      if(this.at(this.currentQueue).length >= 1) {
        this.at(this.get('currentQueue')).remove(song);
      }
      if(this.at(this.currentQueue).length >= 1){
        this.at(this.currentQueue).playFirst();  
      } else {
        this.trigger('stop');
      }
    }, this);

    console.log(2)
    
    this.on('add', function () {
      if (this.at(this.currentQueue).length === 1) {
        this.at(this.currentQueue).playFirst();
      }
    }, this);
    console.log(3)
    this.on('ended', function (song) {
      song.dequeue();
    });
    console.log(4);
  },

  addSong: function (song) {
  // var len = this.length;
  this.at(this.currentQueue).addSong(song);
  // if(this.length !== len) {
  //   if(this.get('count') >= 1) {
  //     console.log(this.count)
  //     song.set('count', this.get('count') + 1);
  //   } else {
  //     song.set('count', 1);
  //   }
  // }
  },

  dequeue: function () {

  } 



});