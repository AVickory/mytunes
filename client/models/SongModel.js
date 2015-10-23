// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  // intialize: function () {
  //   this.set('count', 0);
  //   console.log(this.count);
  // },

  defaults: {
    'count': 0
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  },

  enqueue: function () {
    console.log(this);
    if(this.get('count')) {
      this.set('count', this.get('count') + 1);
    } else {
      this.set('count', 1);
    }
    this.trigger('enqueue', this);

  },

  ended: function () {
    // this.trigger('songEnd', this);
    this.trigger('ended', this);
  },

  dequeue: function () {
    this.trigger('dequeue', this)
  }

});
