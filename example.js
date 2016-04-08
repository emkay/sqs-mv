const config = {
  arn: '',
  access: '',
  secret: ''
}

const opts = {
  config: config,
  workers: 10
}

const sqsMv = require('.')

sqsMv('some-queue', 'some-other-queue', opts)
