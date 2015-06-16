Meteor.startup(function () {

  Template.posts_weekly.helpers({
    weeks: function () {
      var weeksArray = [];
      // var weeks = this.weeks;
      var weeks = Session.get('postsWeeks');
      for (var i = 0; i < weeks; i++) {
        weeksArray.push({
          date: moment().subtract(i, 'weeks').startOf('week').toDate(),
          index: i
        });
      }
      return weeksArray;
    },
    context: function () {
      var context = {
        terms: {
          view: "singleweek",
          date: this.date,
          after: moment(this.date).startOf('week').toDate(),
          before: moment(this.date).endOf('week').toDate()
        }
      };
      return context;
    },
    loadMoreWeeksUrl: function () {
      var count = parseInt(Session.get('postsWeeks')) + weeksPerPage;
      return '/weekly/' + count;
    }
  });

});
