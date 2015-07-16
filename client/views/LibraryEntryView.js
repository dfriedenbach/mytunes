// LibraryEntryView.js - Defines a backbone view class for the entries
// that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  template: _.template('<td>(<%= artist %>)</td><td><%= title %></td><td>(Play Count: <%= playCount %>)</td><td>Votes: <%= voteCount %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
    }
  },

  render: function(){
    this.$el.children().detach();
    this.$el.html(this.template(this.model.attributes));
    return this.$el.append(new UpvoteView({model: this.model}).render()).append(new DownvoteView({model: this.model}).render());
  }

});
