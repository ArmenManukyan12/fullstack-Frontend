# Frontend e-commerce

## Description

This is an e-commerce frontend project is designed specifically for a sports shoes store. It includes seamless authorization and authentication, user login and registration, as well as  admin panel with easy-to-use CRUD functionality for managing store's products and categories.


## Features

* User registration and login
* Authentication via JWT
* Product cart
* Admin panel
* Design CSS, Material


### Installing

```
https://github.com/ArmenManukyan12/fullstack-Frontend
cd .. spoerts shoes
npm install
```

## Getting Started

To test the application

* default request port http://localhost:3000

```
Start the application
    npm start
```
# Backend e-commerce

## Description

This e-commerce backend aplication project is ready for most basic core tasks like authorization, authentication, email verification and CRUD.

## Features

* User registration and login
* Authentication via JWT
* Email confirmation
* CRUD for products
* sqlite database


### Installing

```
https://github.com/ArmenManukyan12/fullstack-Backend
cd ..  backend_sqlite_sequelize_cli
npm install
```

## Getting Started

To test the application

* Create sqlite database and choose a username and password for it
* Create config.json file and add the database data as in the example
```
  {
  "development": {
    "storage":"./database.db",
    "dialect": "sqlite"
  },
  "test": {
    "storage":"./database.db",
    "dialect": "sqlite"
  },
  "production": {
    "storage":"./database.db",
    "dialect": "sqlite"
  }
}
```

* Create .env file and add 
    * PORT = port(the port on which you want to send a request)
    * T_SECRET = secret(the password with which the token will be issued)
    * EMAIL = email(the email from which you want to send a code for verification)
    * EMAIL_PASSWORD = password (Enable 2 factor authentication and click on app passwords (gmail example: https://support.google.com/mail/answer/185833?hl=en))

```
Create the database tables
    npx sequelize-cli db:migrate

Start the application
    npm start
```

## Authors

Contributors names and contact info

ex. Armen Manukyan
ex. https://github.com/ArmenManukyan12