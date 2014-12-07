# accounts-ravelry

A login service for [Ravelry](http://www.ravelry.com) using oauth1. For more info on meteor accounts, see the [meteor project page](https://www.meteor.com/accounts) for more details.


### Setting up defualt auth keys and secret

Once you have a Ravelry api key/secret you can set them up by running metoer with a settings file

```
meteor --settings settings.json
```


settings.json
```
{
  "ravelryKey": "1234",
  "ravelrySecret": "abcd"
}
```

then in server.js

```javascript
Accounts.loginServiceConfiguration.insert({
  service: "ravelry",
  consumerKey: Meteor.settings.ravelryKey,
  secret: Meteor.settings.ravelrySecret
});
```