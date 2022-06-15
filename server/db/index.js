const mongoose = require('mongoose');

mongoose
  .connect('mongodb://127.0.0.1:27017/podcasts')
  .then(() => {
    console.log('mongoose is on');
  })
  .catch((err) => console.log(err));



module.exports = mongoose;
