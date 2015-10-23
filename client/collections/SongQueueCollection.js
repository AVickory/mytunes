var SongQueueView = Backbone.Collection.extend({

  model: SongQueue,

  initialize: function () {
    this.add(new SongQueue);
    this.set('currentQueue', this.at(0));
  }




}