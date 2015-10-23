var SongQueueCollectionView =Backbone.View.extend({
  initialize: function () {
    this.render();

    // this.collection.on('add remove', function () {
    //   this.render();
    // });
  },

  render: function () {
    var buttons = "<button class='prev'>prev</button><button class='add'>add</button><button class='next'>next</button>";
    console.log(12)
    console.log(this.collection)
    this.$el.html(buttons).append(( new SongQueueView({collection: this.collection.at(this.collection.currentSongQueue)}) ).render());
  }



});