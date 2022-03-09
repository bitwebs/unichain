var unichain = require('../..')
var ram = require('random-access-memory')

module.exports = function create (key, opts) {
  return unichain(ram, key, opts)
}
