/**
 * ok response
 *
 * @description :: 请求成功
 */

module.exports = function (optionalData, status = 200) {
  return this.res.status(status).send({
    code: 0,
    data: optionalData,
    message: 'success',
  })
}
