const mongoose = require('mongoose');
const { HOST, PORT, DATABASE_NAME } = require('../enums/DatabaseEnums');

class Database {
  constructor() {
    this.connection = null;
  }

  /**
  * @returns {mongoose.connection}
  */
  connect() {
    if (!this.connection) {
      mongoose.connect(`mongodb://${HOST}:${PORT}/${DATABASE_NAME}`, { useNewUrlParser: true, useUnifiedTopology: true });

      this.connection = mongoose.connection;
    }

    return this.connection;
  }
}

module.exports = Database;
