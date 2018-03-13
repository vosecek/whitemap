# whitemap
White map problem

```
npm i
ionic cordova platform add ios
ionic cordova platform add android
```
update signatures in XCode for ios version
```
ionic cordova run android / ionic cordova run ios
```

Open sidemenu and push "Other page", close sidemenu - map is white in Android, map is OK in iOS.

Slide down or up in Other page in the list and pop go back to main page, map is white in both.

The problem occurs in iOS only after sliding up or down. In Android white map problem occurs in almost every case.