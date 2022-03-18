if (process.env.NODE_ENV === 'production') {
  module.exports = require('./keys_prod');
} else {
  module.exports = require('./keys_dev');
}

// module.exports = {
//   mongoURI: 'mongodb+srv://unshelvd_admin:YifZ39iKBWmh3g1m@unshelvd.ek5yq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
//   secretOrKey: 'secret'
// };