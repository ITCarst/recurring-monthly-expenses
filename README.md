# Monthly recurring expenses

Allocate a recurring expense on a monthly basis. 
Add your total income from which your expenses are going to be deducted. 
There are a couple of files which you need to fill like:
 - income date
 - expense recurring date and ammount
 - that's it


## Backend Application
- `expressjs`
- `graphql`
- `mysql`
- `Docker`
- `docker-compose` - to start also the mysql container
- more to be defined either AWS Lambda, cloud sync etc. because it's work in progress the ops are still to be defined

### How to run
- `yarn install`
- `yarn server` to start a localhost express server
    - got to `localhost:8081`
- `yarn server:dev` to monitor changes
- `yarn start`
    - starts a client application
    - `angular ^5`
    


## Client Application - using angular 5 and generated with angular-cli
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.5.3.

### Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Code scaffolding
Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build
Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

### Running unit tests
Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests
Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
