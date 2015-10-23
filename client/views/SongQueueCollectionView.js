var SongQueueCollectionView =Backbone.View.extend({
  initialize: function () {
    this.render();
  },

  render: function () {
    var buttons = "<button class='prev'>prev</button><button class='add'>add</button><button class='next'>next</button>";
    this.$el.html(buttons).append(new SongQueueView(this.model.get('currentSongQueue').render()));
  }



});