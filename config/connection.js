const { connect, connection } = require('mongoose');

//add this to env file?
const connectionString =
  process.env.MONGODB_URI || 'mongodb://localhost:27017/studentsDB';

connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection;
