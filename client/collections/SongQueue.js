// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function(){
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
    this.on('ended', function() {
      this.at(0).dequeue();
    }, this);
    this.on('dequeue', function(song) {
      if (song === this.at(0)) {
        this.remove(song);
        if (this.length >= 1) {
          this.playFirst();
        }
      } else {
        this.remove(song);
      }
    }, this);
  },

  playFirst: function(){
    this.at(0).play();
  }

});