# Questionnaire app
A demonstration application that fetches data from an API and displays it nicely in a list, using navigation too to detailed view.

### Project preparation

* Go to the project folder,
* open a terminal window and type ```yarn install``` to install packages dependencies.

### How to run the app

Type ```expo start``` or ```yarn start``` in the command line to start the expo interface to run the app on simulator or
real devices.

### Running into issues

#### Network issues:

As the provided API url is not encrypted using SSL, you have to follow step 1 in the below url
<br>For iOS
=> [1. Add App Transport Security exception](https://reactnative.dev/docs/integration-with-existing-apps#1-add-app-transport-security-exception)
<br>For Android
=> [usesCleartextTraffic](https://developer.android.com/guide/topics/manifest/application-element#usesCleartextTraffic)
