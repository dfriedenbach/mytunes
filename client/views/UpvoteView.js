var UpvoteView = Backbone.View.extend({
  
  tagName: 'td',

  template: _.template('Upvote'),

  events: {
    'click': function(e) {
      e.stopPropagation();
      this.model.set('voteCount', this.model.get('voteCount') + 1);
      console.log("Upvoted!");
    }
  },

  render: function() {
    return this.$el.html(this.template());
  }

});