# React application repo - this holds the production code that can be seen [running on Github Pages](http://hemmels.github.io/reactapp)
The running code is the gh-pages branch, which we never commit to directly, it is built from the master branch and pushed/deployed with 

    npm run deploy

This sends the code to be minified and sent to github pages.

Useful branch links: Codebase: [master](https://github.com/Hemmels/reactapp/tree/master) Prod code; [gh-pages](https://github.com/Hemmels/reactapp/tree/gh-pages)
You could also go to http://hemmels.github.io for a directory of all my Github Pages projects.

## What is it?
This was created for a technical test as part of an interview process, and is the (React.js) frontend for [the backend which is another Github repo](https://github.com/Hemmels/JavaPerfMon).

## What does it do?
It shows various websites or services, pings them with a Java HTTP client and records the latency. Shows pretty colours and refreshes every 5s.
It should look this this: 

![Screenshot of local](https://i.imgur.com/dTCYZIs.png) (**See Issues below**)

## How does it do it?
We could have used pure React, but this is now a nice "workbench" for showing Java-backend to React-frontend capabilities. We make a call every 5s to our Java app and this @RestController handles the call. We query our datasource to get a list of enabled sites, pings them, and returns the data for the frontend to render.

## Issues/Improvements
**Currently doesn't show anything on Github Pages!!** while I work out how to deploy the backend too as part of 1 project. For now, as long as Springboot is running the backend, and React is also running, it'll play nice locally. (i.e. you have 2 separate projects running)

To improve, we could add a form and a user login that would show "advanced features" like editing the services that are shown, or enabling/disabling or filtering. Right now, to add a service/site to be monitored, we make a simple Post request to endpoints/add with the string.

I had intended to look into email functionality whenever a site "goes red" for more than 3 counts but this would require hosting.
