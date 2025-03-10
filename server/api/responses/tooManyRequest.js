/**
 * tooManyRequest response
 *
 * @description :: 请求过多触发限流
 */

const statuses = require('statuses')

module.exports = async function () {
  return this.res.status(429).send({
    code: 42900,
    message: statuses(429),
  })
}
