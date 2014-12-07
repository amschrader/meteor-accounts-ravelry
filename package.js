Package.describe({
  summary: "Login service for Ravelry accounts",
  name: "amschrader:accounts-ravelry",
  git: "https://github.com/amschrader/accounts-ravelry.git",
  version: "0.1.0"
});

Package.on_use(function(api) {
  api.use('underscore@1.0.1', ['server']);  
  api.use('accounts-base@1.1.2', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth@1.1.2', ['client', 'server']);
  api.use('amschrader:ravelry@0.1.0', ['client', 'server']);

  api.use('http@1.0.8', ['client', 'server']);

  api.add_files('ravelry-login-button.css', 'client');
  api.add_files('ravelry.js');
  api.add_files('ravelry-common.js', ['client', 'server']);
});