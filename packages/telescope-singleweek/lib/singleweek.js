Telescope.menuItems.add("viewsMenu", {
  route: 'postsSingleWeekDefault',
  label: 'singleweek',
  description: 'posts_of_a_single_week'
});

Posts.views.add("singleweek", function (terms) {
  return {
    find: {
      postedAt: {
        $gte: terms.after,
        $lt: terms.before
      }
    },
    options: {
      sort: {sticky: -1, score: -1}
    }
  };
});