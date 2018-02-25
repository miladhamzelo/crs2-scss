Corporate Reporting System - v2
---
**Here are the main components/services available in the application.**

**Core Module:**
All the common services/models/components.

**AppConfig:**
All the application level constants are defined here.

**Logger:**
provides logging service for the entire application. It is bootstraped at the application level so it is available to all the feature modules. This is a sigleton service.

**Exception Service:**
provides exception handling service for the entire application. This is also a singleton service.

**Shared module:**
All the components/services/pipes/directives which can be shared across the application should go here. Footer and Spinner components are there for now.

**Third party libraries:**
Font Awesome, pace-js, ngx-logger, angulartics2, primeng, ng2-dragula, ng2-validation, ng-http-loader, perfect-scrollbar

> **Note:**
> Each feature module should have its own router defined within the module. In this way, we can lazy load them as when the user requires those modules. Field One module is already configured in this way.
> 
> A concept called ‘Barrel’ is used in this project. We group all the components/services/pipes/directives/models in one class per module and export them. In this way we don’t have to write multiple import statements for every component we are creating. It will be easy for other developers to use the existing components when they import this module in their module.

**To add a new thrid party library to the application:**
* In the command project go to the project root directory and type npm install <third-party-lib-name> --save <kbd>Enter</kbd>
* Open angular-cli.json and add the path for the respective Javascript and CSS files under ‘scripts’ and ‘styles’ sections.

**To remove a new thrid party library to the application:**
* In the command project go to the project root directory and type npm uninstall <third-party-lib-name> --save <kbd>Enter</kbd>
* Open angular-cli.json and remove the path for the respective Javascript and CSS files under ‘scripts’ and ‘styles’ sections.

**To create a component:**
``` html
ng g component <component-name>
```

*Same is true for Directive, Pipe, Service, Class, Interface, Enum and Module. Just replace ‘component’ in the above command with the respective attribute.*

**To run unit tests:** *(unit test cases should be defined as a prerequisite)*
```bash
ng test
```

**To run end to end tests:**
```bash
ng e2e
```

**To lint the application:**
```bash
ng lint
```

**To run the project in development mode:**
```bash
ng serve
```

**To build the application for dev environment:**
```bash
ng build
```

**To build the application for production:** *(this includes code linting and tree shaking)*
```bash
ng build --prod
```

**Logger settings:** 
We can set the logger level to filter what we want to display in the logs. This can be set at ‘app.component.ts’. Just change the LoggerLevel to whatever we want and restart the application. The logger will log everything with higher or equal priority to the current level set. Here is the hierarchy for our reference.
* 0 – Level.OFF
* 1 – Level.ERROR
* 2 – Level.WARN
* 3 – Level.INFO
* 4 – Level.DEBUG
* 4 – Level.LOG

COMPODOC:
---------
**How to install in our development environment:**
- Make sure your git and node instances are going through MBUSA proxy.
- Install Compodoc globally.
```
npm install –g @compodoc/compodoc
```
- Go to your project’s root directory and run
```
compodoc.cmd –p src/tsconfig.json
```
*‘tsconfig.json’ is tweaked to have all the necessary information for compodoc*
- It will create all the documents in ‘documentation’ directory under project root.
- If you want to see the documentation in your development environment, run *(it will run on 8080 by default)*
```
compodoc.cmd –s
```
- This documentation will only be included in the dev build. It will not be included in QA and production builds in order to reduce the final ear size.

**Sample comment for a method:**
```javascript
/**
* @param {string} param1  mention parameter name here {@link link your method here}
*
* @example
* This is a good example
*
* @returns      whatever your method returns
*/
```
github: https://github.com/compodoc/compodoc

Website: https://compodoc.github.io/compodoc/
