![](/assets/logo.png)
# 🚀 GoBarber API

## 🔗 Table of contents
- [Features](#features)
- [Installation](#installation)
- [Starting](#starting)
- [Status codes](#status)
- [License](#license)

## 💼 Features <a name="features"/>

- Appointments CRUD
- Users CRUD

This is one application from GoStack Bootcamp, organized by [Rocketseat](https://rocketseat.com.br/).

This project uses [Node.js](https://nodejs.org/en/), [Express](https://expressjs.com/pt-br/), [TypeScript](https://www.typescriptlang.org/) and [TypeORM](https://typeorm.io/#/).

## 📂 Installation <a name="installation"/>

First of all, it is important that you have installed [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/).

So, run this command in terminal:
```
git clone https://github.com/fernandogatto/go-barber-api.git
```

## 📭 Starting <a name="starting"/>

In project, open ```package.json```file and in final of line ```dev:server``` change the ```--host``` to your IP machine.

So, run the following command in order in terminal:
```
// Configure the database schema
yarn typeorm

// Start the server
yarn dev:server
```

## ⚙ Status codes <a name="status"/>

| Status   | Description           |
| ---      | ---                   |
| 200      | OK                    |
| 400      | BAD REQUEST           |
| 401      | UNAUTHORIZED          |
| 404      | NOT FOUND             |
| 500      | INTERNAL SERVER ERROR |

## 📕 License <a name="license"/>

Released in 2020. This project is under the [MIT License](https://choosealicense.com/licenses/mit/).

Build with 💜 by [Fernando Gatto](https://github.com/fernandogatto/).
