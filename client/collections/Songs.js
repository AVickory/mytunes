// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  // initialize: function () {
  //   this.forEach(function (song) {
  //     song.get('count');
  //     song.set('count', 0);
  //     console.log(count)
  //   });
  // }

});