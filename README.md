# Monthly recurring expenses

Allocate a recurring expense on a monthly basis. 
Add your total income from which your expenses are going to be deducted. 
There are a couple of files which you need to fill like:
 - income date
 - expense recurring date and ammount
 - that's it



## How it works

Add your monthly income:
  - set a date when your income will arrive. E.g. 24th of each month 
  - an ammount e.g. 3000 USD.

Add your recurring expenses:
- Provide an expense name
- Add your expenses one by one (one time operation), fill in some form fileds:
  - ammount, 
  - date when the expense will take place,
  - select a currency (USD, EUR etc.)
  - end date if for instance it's only 1 or 2 months payment (leaving it blank automatically becomes a monthly recurring expenditure)

If you have one time payment like going our for an restaurant make sure to not make it recurring. It will expire on the the first of the next month.
You will have an overview on how much you spent and allowed to spend from your maximum ammount.

Is there a need to categoriesed your expenses? Please ask if so.


## Backend Application
- `expressjs`
- `graphql`
- `mysql` || `sqlite3` - still haven't decided over network capabilities (do you want that???!!!)
    - I can imagine people want to sink there data over multiple devices but....I havent' decied
    - there are the posibilites and I will create a feature toggle 
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


