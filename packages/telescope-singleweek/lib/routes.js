/**
 * Controller for single week view
 */
Posts.controllers.singleweek = Posts.controllers.list.extend({

  view: 'singleweek',
  
  template: 'single_week', // use single_week template to get prev/next week navigation

  data: function() {
    var currentDate = this.params.week ? new Date(this.params.year, this.params.month-1, this.params.week) : Session.get('this_week');
    var terms = {
      view: 'singleweek',
      date: currentDate,
      after: moment(currentDate).startOf('week').toDate(),
      before: moment(currentDate).endOf('week').toDate()
    };
    return {terms: terms};
  },

});

Meteor.startup(function () {

  // Digest

  Router.route('/week/:year/:month/:week', {
    name: 'postsSingleWeek',
    controller: Posts.controllers.singleweek
  });

  Router.route('/week', {
    name: 'postsSingleWeekDefault',
    controller: Posts.controllers.singleweek
  });

});
