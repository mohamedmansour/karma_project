nyuad.Views.ProjectView = Backbone.View.extend({

   template: _.template($("#project-view-template").html()),
   events: {
      // Stuff
   },

   initialize: function () {
      this.render();
   },

   render: function () {
      this.el.html(this.model.toJSON());
      return this;
   }
});