var DownvoteView = Backbone.View.extend({
  
  tagName: 'td',

  template: _.template('Downvote'),

  events: {
    'click': function(e) {
      e.stopPropagation();
      this.model.set('voteCount', this.model.get('voteCount') - 1);
    }
  },

  render: function() {
    return this.$el.html(this.template());
  }
  
});