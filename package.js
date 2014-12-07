Package.describe({
  summary: "Login service for Ravelry accounts",
  name: "amschrader:accounts-ravelry",
  git: "https://github.com/amschrader/accounts-ravelry.git",
  version: "0.1.0"
});

Package.on_use(function(api) {
  api.use('underscore', ['server']);  
  api.use('accounts-base', ['client', 'server']);
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('amschrader:ravelry', ['client', 'server']);

  api.use('http', ['client', 'server']);

  api.add_files('ravelry-login-button.css', 'client');
  api.add_files('ravelry.js');
  api.add_files('ravelry-common.js', ['client', 'server']);
});