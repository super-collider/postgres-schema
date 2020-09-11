# Running migration
After doing an `npm install`, run `./node_modules/.bin/babel-node ./scripts/migrate.js`, it will run any migrations that have yet to be run in the schema

# Testing
Run `docker-compose up` which will start a test postgres server.  Then you can run `npm run test` and it will reinit the db every test and run all the unit tests