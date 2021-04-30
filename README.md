# Map-app

### Prerequisites

1. Install node and watchman
``brew install node && brew install watchman``

2. Install CocoaPods
3. ``sudo gem install cocoapods``

### Install

1. Clone  
``git clone git@github.com:lehtaku/map-app.git``

2. Install packages  
``cd map-app && npm install``

3. Install iOS Pods  
``cd ios && pod install``

### Running app

``npx react-native run-ios``

**Notice**

After first start up, app is asking for pemission to use the device location. You can't see your own location before selecting "Allow while using app", and reload the app with CMD + R.
