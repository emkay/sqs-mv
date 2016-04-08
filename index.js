'use strict'
const sqs = require('sqs')

module.exports = (from, to, opts) => {
  const configFrom = opts.config || opts.configFrom
  const configTo = opts.configTo || configFrom
  const workers = opts.workers || 1

  let qFrom = sqs(configFrom)
  let qTo = sqs(configTo)

  qFrom.pull(from, workers, (event, cb) => {
    qTo.push(to, event, (err) => {
      if (!err) {
        cb()
      }
    })
  })
}
