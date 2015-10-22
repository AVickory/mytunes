// AppView.js - Defines a backbone view class for the whole music app.
var AppView = Backbone.View.extend({

  initialize: function(params) {
    this.playerView = new PlayerView({model: this.model.get('currentSong')});
    this.libraryView = new LibraryView({collection: this.model.get('library')});

    // change:currentSong - this is Backbone's way of allowing you to filter events to
    // ONLY receive change events for the specific property, 'currentSong'
    this.model.on('change:currentSong', function(model) {
      console.log(6)
      this.playerView.setSong(model.get('currentSong'));
      console.log(7)
    }, this);


    this.playerView.$el.on('ended', this.model.get('songQueue').dequeue, this.model);
  },

  render: function() {
    return this.$el.html([
      this.playerView.$el,
      this.libraryView.$el
    ]);
  }

});
