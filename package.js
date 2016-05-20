Package.describe({
  name: 'dmitrymemco:errors',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Механизм отображения ошибок приложения пользователю',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.3.2.4');
  api.use(['minimongo', 'mongo-livedata', 'templating'], 'client');
  api.add_files(['errors.js', 'errors_list.html', 'errors_list.js'], 'client');
  if (api.export)
    api.export('Errors');

});