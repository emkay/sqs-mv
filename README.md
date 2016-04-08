# sqs-mv
move SQS messages

## Install

`npm i sqs-mv`

## Use

```javascript
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
```

This is useful for moving from one queue to another. 

:warning:
This will constantly `pull` and move message until you quit the process.
It also does not preserve the messages in the original queue, so :bee: careful of that too.

I use this for moving things from a dead letter queue back to the original once I have examined the messages.
