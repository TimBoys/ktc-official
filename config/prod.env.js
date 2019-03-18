'use strict'
let HOST = process.argv.splice(2)[0] || 'prod';
console.log(HOST);
module.exports = {
  NODE_ENV: '"production"',
	ajaxApi:"https://www.primes-thaitea.com", //客户域
  HOST: '"'+HOST+'"'
}
