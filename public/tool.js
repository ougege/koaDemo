const getToken = require('jsonwebtoken')
const secret = require('../public/secret')
exports.verToken = function(token) {
    return new Promise((resolve, reject) => {
        const info = getToken.verify(token, secret)
        resolve(info)
    })
}