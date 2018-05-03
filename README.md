## NSS full stack final project 

## THIS IS THE LAST STRAW (hopefully)
## Full stack web app built on SNEP stack! AKA sequelize node express pug

#Track your consumption of single use plastic 

# Start here to initilizate the project

this interface assumes a global installation of psql 
if not already installed

`npm install psql -g`

steps :
to access all required dependencies 
`npm install`


#how to build database and connect to postgres
  **once your project is initiliazed as above**
1. Open in your terminal run `psql` 

2. `CREATE DATABASE plastictracker` create database named plastictracker

3. `\c plastictracker` connect to plastictracker

in the command line you will see "You are now connected to the database"

4. In your config.json file enter the name of the database you created in the previous step

`"database": "plastictracker",`

5. To build the database from the project

run `node build_db`

6. To run the app 

`nodemon app.js` **recommmended** 
** note `npm install -g nodemon` assumed but with no global install add nodemon to your dependencies `npm install --save-dev nodemon`

serving the app will present a login page.  A dummy user is in json in order for developers to login w/o re-registering each time

after login users are presented with a view to select type and quantity of plastic saved 


after login users are presented with a view to select type and quantity of plastic saved 

and/or 

users are presented with a view to select type and quantity of SUP consumed

after submission users are presented with totals of each type of plastic saved by id 

**readme last updated 4/3/2018**



