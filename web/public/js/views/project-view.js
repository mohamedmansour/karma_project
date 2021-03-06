nyuad.Views.ProjectView = Backbone.View.extend({
   el: "#main-content",

   template: _.template($("#project-view-template").html()),
   task_template: _.template($("#task-list-template").html()),
   contributors_template: _.template($("#contributor-list-template").html()),
   comments_template: _.template($("#comment-list-template").html()),

   events: {
      "click .contribute": "contribute",
      "click .comment": "comment"
   },

   initialize: function() {
      this.listenTo(this.model, "change", this.render);

      this.model.fetch();
   },

   render: function() {
      this.model.initialize();
      this.$el.html(this.template(this.model.toJSON()));

      var tasks = this.model.get("tasks_projects");
      var that = this;
      _.each(tasks, function (task) {
         that.$("#task-list").append(that.task_template(task));
      });

      var contributors = this.model.get("contributing_users");
      _.each(contributors, function (contributor) {
         that.$("#contributor-list").append(that.contributors_template(contributor));
      });
      var comments = this.model.get("comments");
      _.each(comments, function (comment) {
         that.$("#comment-list").append(that.comments_template(comment));
      });
      return this;
   },

   contribute: function (e) {
      e.preventDefault();
      var value = $("#moneyAmount").val();
      var funding = this.model.get("current_fund") || 0;
      funding += value;
      this.model.set("current_fund", funding);

      var contribs  = this.model.get("contributing_users");
      contribs.push({
         user_id: nyuad.id,
         name: nyuad.name
      });

      this.model.set("contributing_users", contribs);
      this.render();
   },

   comment: function(e) {
      e.preventDefault();
      var comments = this.model.get("comments");

      var comment = $("#comment").val();
      comments.push({
         user_id: nyuad.id,
         name: nyuad.name,
         comment: comment
      });

      this.model.set("comments", comments);
      this.render();
   }
});
