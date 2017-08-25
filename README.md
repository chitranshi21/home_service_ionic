
Progressive Web App for Home Service
===============================
<img src="https://image.ibb.co/bLbbP5/home_service.jpg" alt="home_service" border="0"/>

Home Service is a Progressive Web App that is build out of <a href="https://ionicframework.com/">Ionic2</a>. It can be integrated with any backend service that understands REST API.

> **Example**
> one Example of Service integration is included in the src/providers/service.ts



[TOC]


Demo
--------
the app is hosted on <a target="_blank"  href="https://chitranshi21.github.io/home_service/">Home Service</a>, by default it takes up the look and feel of an android app, so it would best look on a browser in an android device. Although you can add platform which include -

 - Android
 - iOS
 - Windows
 <br/>
<a href="https://ibb.co/ch0d45"><img src="https://preview.ibb.co/g4LNWk/home_service_main_page.png" alt="home_service_main_page" border="0"></a>
<br/>
**Landing Page** - This is the landing page that uses the grid layout for Menu.
<br/>
<br/>
<a href="https://ibb.co/iACmrk"><img src="https://preview.ibb.co/dm7KBk/Screen_Shot_2017_08_25_at_4_57_33_PM.png" alt="Screen_Shot_2017_08_25_at_4_57_33_PM" border="0"></a>
<br/>
**Service Page** - This is the service page, with multi-select option for each category
<br/>
<br/>
<a href="https://ibb.co/iQ17xQ"><img src="https://preview.ibb.co/n9n2Wk/Screen_Shot_2017_08_25_at_5_00_03_PM.png" alt="Screen_Shot_2017_08_25_at_5_00_03_PM" border="0"></a>
<br/>
**Address Page** - This is the Address page, where the user can enter his/her address details. It is integrated with google maps, and uses cordova native support to get location and set marker.


Installation
----------------
In order to run it, you need to install <a href="https://nodejs.org/en/">NodeJS</a> in your local environment. Then you need to install the ionic CLI along with Cordova.

> *Run command*
> >npm install -g cordova ionic

you can add platform like iOS or Windows using the command
> ionic cordova platform add android
> ionic cordova platform add ios

In order to run, go to the project directory and run.

> *Run command*
> >ionic serve

To view the project in platform mode you can start the server with the command
> ionic serve --lab
