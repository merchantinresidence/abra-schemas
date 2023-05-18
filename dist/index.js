
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./abra-schemas.cjs.production.min.js')
} else {
  module.exports = require('./abra-schemas.cjs.development.js')
}
