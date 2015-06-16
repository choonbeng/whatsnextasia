/**
 * Controller for weekly view
 */
Posts.controllers.weekly = Posts.controllers.list.extend({

  view: "weekly",

  template: function() {
    // use a function to make sure the template is evaluated *after* any template overrides
    // TODO: still needed?
    return 'posts_weekly';
  },

  data: function () {
    this.weeks = this.params.weeks ? this.params.weeks : weeksPerPage;
    Session.set('postsWeeks', this.weeks);
    return {
      weeks: this.weeks
    };
  }

});

Meteor.startup(function () {

  Router.route('/weekly/:weeks?', {
    name: 'postsWeekly',
    template: 'posts_weekly',
    controller: Posts.controllers.weekly
  });

});
