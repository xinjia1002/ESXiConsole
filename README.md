# ESXiConsole Project

This is an initial project for ESXi host. It supposed to finish the following functions,

* Login/Authentication to host
* Summary Screen showing VM's on the host & datastores available
* Single switch button to enable/disable SSH on the host. Button should reflect SSH service state ('on' or ‘off')

However, so far only the login page is finished. The project was stuck on the Cross-Domain issue.  
I tried implementing the SDK like the sample of VimService to build a proxy for the application, 
but I can't get the VimService running successfully. It seems like it requires a pfx certificate. 
I tried creating a pfx on my local machine but no good luck.


## Getting Started

To get you started you can simply clone the repository and install the dependencies:

### Prerequisites

You need git to clone the repository. You can get git from
[http://git-scm.com/](http://git-scm.com/).

I also use a number of node.js tools to initialize and test angular-seed. You must have node.js and
its package manager (npm) installed.  You can get them from [http://nodejs.org/](http://nodejs.org/).

### Clone the project

Clone the repository using [git][git]:

```
git clone https://github.com/xinjia1002/ESXiConsole.git
```

### Install Dependencies

Two kinds of dependencies are required in this project: tools and angular framework code.  The tools help
manage and test the application.

* We get the tools we depend upon via `npm`, the [node package manager][npm].
* We get the angular code via `bower`, a [client-side code package manager][bower].

To install the application, you can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`.  Two new folders will be created.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the angular framework files


### Run the Application

To run the application, just type in the following commands

```
npm start
```

Now browse to the app at `http://localhost:8000/app/index.html`.


## Directory Layout

```
app/                    --> all of the source files for the application
  content/              --> the css and picture resource
    css/                --> css folder
      app.js                     --> default stylesheet
    svg/                --> svg folder
      app.js                     --> SVG resource
  core/                 --> the core componet
    config.js                 --> the place we set the configureations
    constants.js              --> constants we may use in the angular
    core.module.js            --> declare the core module 
    localStorage.js           --> we may want to cache the login info on the local object
    requestConfig.js          --> modify the requests to comply our need
    session.js                --> save vim object info
  directives/           -- generic directives used for interface
  lib/                  -- 3rd part libary
    flings/                   --> the vSphere SDK
  login/                -- login componet
    login.html                --> login page
    login.module.js           --> declare the login module
    loginCtrl.js              --> login control
  services/             -- service componet
    service.module.js         --> servcie module
    vimService.js             --> the factory to call the web service through SDK
  summary/              --> the module for ESXi summary info
    summary.modul.js          --> the summary module
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
```
