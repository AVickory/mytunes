// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  events: {
    'ended': function () {
      console.log(this.model);
      this.model.ended();
    }
  },

  initialize: function() {

    // var that = this
    // $(this.el).on('ended', function () {
    //   that.model.ended();
    // });
  },

  setSong: function(song) {
    console.log(8)
    this.model = song;
    this.render();
    console.log(9);
  },

  render: function() {
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }


});
