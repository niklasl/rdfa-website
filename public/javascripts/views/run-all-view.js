window.RunAllView = Backbone.View.extend({

  initialize: function () {
    this.setElement($("button#run-all"));
    this.model.bind('change', this.render, this);
    this.model.bind('reset', this.render, this);
  },

  // Test events
  events: {
    "click": "run"
  },

  render: function(event) {
    if (this.model.running !== "running") {
      this.$el.button('reset');
    }
  },

  run: function (event) {
    this.$el.button('loading');
    this.model.run();
  }
});
