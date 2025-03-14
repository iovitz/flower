/**
 * serverError response
 *
 * @description :: 服务端内部错误
 */

const statuses = require('statuses')

module.exports = async function (err) {
  const errorCode = _.get(err, 'raw.code') ?? 500
  const code = Number.isInteger(errorCode) ? errorCode : 500
  const message = _.get(err, 'raw.message')
  if (code < 500) {
    this.res.logger.error('Biz Error', err)
  }
  else {
    this.res.logger.error('Server Internal Error', err)
  }

  return this.res.status(code).send({
    code,
    message: message || statuses(code),
  })
}
