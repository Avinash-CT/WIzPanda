cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-firebase-analytics.FirebaseAnalytics",
      "file": "plugins/cordova-plugin-firebase-analytics/www/FirebaseAnalytics.js",
      "pluginId": "cordova-plugin-firebase-analytics",
      "merges": [
        "cordova.plugins.firebase.analytics"
      ]
    },
    {
      "id": "cordova-plugin-firebase-crash.FirebaseCrash",
      "file": "plugins/cordova-plugin-firebase-crash/www/FirebaseCrash.js",
      "pluginId": "cordova-plugin-firebase-crash",
      "merges": [
        "cordova.plugins.firebase.crashlytics"
      ]
    },
    {
      "id": "cordova-plugin-firebase-messaging.FirebaseMessaging",
      "file": "plugins/cordova-plugin-firebase-messaging/www/FirebaseMessaging.js",
      "pluginId": "cordova-plugin-firebase-messaging",
      "merges": [
        "cordova.plugins.firebase.messaging"
      ]
    },
    {
      "id": "cordova-plugin-firebase-dynamiclinks.FirebaseDynamicLinks",
      "file": "plugins/cordova-plugin-firebase-dynamiclinks/www/FirebaseDynamicLinks.js",
      "pluginId": "cordova-plugin-firebase-dynamiclinks",
      "merges": [
        "cordova.plugins.firebase.dynamiclinks"
      ]
    },
    {
      "id": "clevertap-cordova.CleverTap",
      "file": "plugins/clevertap-cordova/www/CleverTap.js",
      "pluginId": "clevertap-cordova",
      "clobbers": [
        "CleverTap"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-whitelist": "1.3.4",
    "cordova-support-android-plugin": "1.0.2",
    "cordova-plugin-firebase-analytics": "5.0.0",
    "cordova-plugin-firebase-crash": "3.0.0",
    "cordova-plugin-firebase-messaging": "5.0.1",
    "cordova-plugin-firebase-dynamiclinks": "5.0.0",
    "clevertap-cordova": "2.3.3"
  };
});