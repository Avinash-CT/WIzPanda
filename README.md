# Test Cordova App to reproduce issue with CleverTap

Plugins installed-

```
cr plugin add cordova-plugin-firebase-analytics
cr plugin add cordova-plugin-firebase-crash
cr plugin add cordova-plugin-firebase-messaging
cr platform add android
cordova plugin add cordova-plugin-firebase-dynamiclinks --variable APP_DOMAIN_NAME="kidsgenericstaging.page.link"
cordova plugins add clevertap-cordova --variable CLEVERTAP_ACCOUNT_ID="TEST-RZ7-Z94-K95Z" --variable CLEVERTAP_TOKEN="TEST-4c1-a12" --variable FIREBASE_MESSAGING_VERSION=20.1.+
```