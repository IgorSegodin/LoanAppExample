Tested on
Gradle version: 2.13
Database: MySQL 5.6
Environment: Windows 7
Browser: Chrome 49

Default database user: root
Default database password: root
Default database name: four_finance
Default port: 8081

Default user: admin@4finance.com
Default password: 12345+

For development use gradle task 'bootRun' with variable -Dprofile=dev .
For javascript hot reload you should run separate task 'bundleWatch' with variable -Dprofile=dev. If reloading doesn't happened in IntellijIdea, try to press ctrl + s (save).
Sometimes node and gradle processes are not stopped correctly (known issue in gradle + Idea i guess), it can lead to build errors, so you should kill them manually from time to time.
For use on server run 'build' task, then to start application, use cmd command: 'java -jar loan-app-0.0.1.jar' .
Jar will be created in build/libs folder.
You can override default port: 'java -jar loan-app-0.0.1.jar --server.port=8083'.
Same for all other parameters from application.properties, like 'spring.datasource.url' or 'spring.datasource.username'.

TODO better error description on UI, fields highlighting
TODO new User registration
TODO loan table pagination, filtering, sorting


React redux doc
https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options

React thunk doc
https://github.com/gaearon/redux-thunk