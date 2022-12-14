const { MongoClient } = require("mongodb");
const dbo = "mongodb://localhost:27017/";
const client = new MongoClient(dbo, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

var dbConnection;
// alternative export option - methods as objects
module.exports = {
  connectToServer: function (callback) {
    client.connect(function (err, db) {
      // Verify we got a good "db" object
      if (db) {
        dbConnection = db.db("pubsDB");
        console.log("Successfully connected to MongoDB.");
      }
      return callback(err);
    });
  },

  getDb: function () {
    return dbConnection;
  },
  getObjectId: function () {
    var ObjectId = require("mongodb").ObjectId;
    return ObjectId;
  },
};
