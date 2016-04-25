Gradle version: 2.13
Database: MySQL

Default database name: four_finance
Default port: 8081

Default user: admin@4finance.com
Default password: 12345+

For development use gradle task 'bootRun' with variable -Dprofile=dev .
For use on server run 'build' task, then to start application, use cmd command: 'java -jar loan-app-0.0.1.jar' .
Jar will be created in build/libs folder.
You can override default port: 'java -jar loan-app-0.0.1.jar --server.port=8083'.
Same for all other parameters from application.properties, like 'spring.datasource.url' or 'spring.datasource.username'.




