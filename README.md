# A Contractor's Diary

Need to keep a list of clients for your contracting opportunities? Look no further. This React app has full functionality to support independent user auth and dedicated real-time database.

See example here: [luxuriant-glass.surge.sh](https://luxuriant-glass.surge.sh)

## Run app locally

To run this app locally, you will need all the basic dependencies for a React app, Node.js and npm.

### API Dependencies

This app has a dependency on Google's Firebase APIs. To properly set up the app, you will need to create an account and set up a database project.

Run the following command

```
$ cp .env.template .env.local
```

Open this file and add in the requested strings

```
REACT_APP_API_KEY=''
REACT_APP_AUTH_DOMAIN=''
REACT_APP_DATABASE_URL=''
```

### Start the app

To start the app, run the following commands.

```
$ npm i
$ npm run build-css
$ npm start
```
