const options = {
    verbose: console.debug
};
const db = require('better-sqlite3')('articles.sqlite', options);

export default db;
