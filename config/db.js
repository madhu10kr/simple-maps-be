const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost:27017/data',{ useNewUrlParser: true,useUnifiedTopology: true }).then(data => console.log("Db connected")).catch(err => console.log(err))

module.exports = mongoose;