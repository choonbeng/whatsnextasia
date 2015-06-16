var getDateURL = function (moment) {
  return Router.path('postsSingleWeek', {
    year: moment.year(),
    month: moment.month() + 1,
    week: moment.date()
  });
};


Template.single_week_nav.onCreated(function(){

  $(document).unbind('keyup'); //remove any potential existing bindings to avoid duplicates

  var currentDate = moment(this.data.terms.date).startOf('week');
  var this_week = moment(new Date()).startOf('week');

  $(document).bind('keyup', 'left', function(){
    Router.go($('.prev-link').attr('href'));
  });

  $(document).bind('keyup', 'right', function(){
    if(Users.is.admin(Meteor.user()) || this_week.diff(currentDate, 'weeks') > 0)
      Router.go($('.next-link').attr('href'));
  });

});

Template.single_week_nav.helpers({
  currentDate: function(){
    var currentDate = moment(this.terms.date);
    var this_week = moment(new Date());
    var diff = this_week.diff(currentDate, 'weeks');
    if (diff === 0) {
      return i18n.t("this_week");
    }
    if (diff === 1) {
      return i18n.t("last_week");
    }
    return currentDate.format("dddd, MMMM Do YYYY");
  },
  previousDateURL: function(){
    var currentDate = moment(this.terms.date);
    var newDate = currentDate.subtract(1, 'weeks');
    return getDateURL(newDate);
  },
  showPreviousDate: function(){
    // TODO
    return true;
  },
  nextDateURL: function(){
    var currentDate = moment(this.terms.date);
    var newDate = currentDate.add(1, 'weeks');
    return getDateURL(newDate);
  },
  showNextDate: function(){
    var currentDate = moment(this.terms.date).startOf('week');
    var this_week = moment(new Date()).startOf('week');
    return Users.is.admin(Meteor.user()) || (this_week.diff(currentDate, 'weeks') > 0);
  }
});
