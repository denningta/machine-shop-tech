# Angular Sanity starter project
  This is a starter project with Angular, Sanity, and Tailwindcss meant to get Headless CMS websites up and running quickly.  
  
  Sanity has been modified from its default configuration to a more general and usable format.




# Getting Started

## 1. Install Dependencies
  Run `npm install` in the root directory to install Angular depenedcies.
  
  Run `npm install` in the `sanity` directory to install Sanity dependencies.

## 2. Set up Sanity
  Log in to Sanity and create a new project.

  Copy the project ID and paste into `sanity/sanity.json`.

  ```json
    "api": {
      "projectId": "YOUR_PROJECT_ID",
      "dataset": "production"
    },
  ```

  Run `sanity start` inside the sanity folder to start the sanity development server.

  See the [Sanity Documentation](https://www.sanity.io/docs/getting-started-with-sanity-cli) for more information.

  Navigate to `http://localhost:3333` for the Sanity UI.

## 3. Angular Development server

Run `ng serve` from the root directory for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Type Synching from Sanity to Angular

  This project uses [Sanity Codegen](https://github.com/ricokahler/sanity-codegen) to create an interface file for type checking based on the Sanity schema.

  Run `npx sanity-codegen` in the `sanity` directory.  This will create a global interface file in `src/app/interfaces`.

  Custom types can be created from this interface by using typescript's `Omit` and `Pick` utility types:

  ```ts
  // Refer to Typescript's utility types for useful type helpers:
  // https://www.typescriptlang.org/docs/handbook/utility-types.html#picktype-keys
  //
  // And also intersections:
  // https://www.typescriptlang.org/docs/handbook/unions-and-intersections.html#intersection-types
  type QueryResult = Array<
    Omit<Pick<Schema.BlogPost, 'title'>, 'author'> & {
      author: Schema.Author;
    }
  >;
  ```


## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
