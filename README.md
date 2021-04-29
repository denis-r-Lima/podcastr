## Installation

To run the project you will need:

- Node v. 15.8.0
- Docker v. 19.03.8
- Docker Compose v. 1.28.2 

Clone this repository and cd into the project folder:

```bash
cd podcastr
```

## Getting Start

First, start the MongoDB container:

```bash
docker-compose up
#or
docker-compose up -d #for detached mode
```
*Note: Docker-compose will initialize the database and run init-mongo.js to create a db, a user, a collection and to insert the data on the collection

Create one .env.local file with the following env variables:

```bash
DB_URL # normally mongodb://localhost:27017/podcastr
DB_USER #The user that is created on init-mongo.js
DB_PASSWORD #user's password created on init-mongo.js
```
Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000)

