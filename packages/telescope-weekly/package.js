Package.describe({
  name: "telescope:weekly",
  summary: "Telescope weekly view",
  version: "0.20.5",
  git: "https://github.com/TelescopeJS/Telescope.git"
});

Package.onUse(function (api) {

  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'telescope:core@0.20.5',
    'telescope:singleweek@0.20.5',
  ]);

  api.addFiles([
    'package-tap.i18n',
    'lib/weekly.js',
    'lib/routes.js',
  ], ['client', 'server']);

  api.addFiles([
    'lib/client/templates/posts_weekly.html',
    'lib/client/templates/after_week.html',
    'lib/client/templates/before_week.html',
    'lib/client/templates/posts_weekly.js',
    'lib/client/stylesheets/weekly.scss',
    ], ['client']);

  api.addFiles([
    "i18n/de.i18n.json",
    "i18n/en.i18n.json",
    "i18n/es.i18n.json",
    "i18n/fr.i18n.json",
    "i18n/it.i18n.json",
    "i18n/zh-CN.i18n.json",
  ], ["client", "server"]);

});
