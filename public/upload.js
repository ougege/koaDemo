// 封装upload.js
const multer = require('koa-multer')
const path = require('path')
const destPath = path.join(__dirname, '../uploadImgs')
// 配置
let storage = multer.diskStorage({
  // 文件保存路径
  destination: (req, file, cb) => {
    cb(null, destPath)
  },
  // 修改文件名称
  filename: (req, file, cb) => {
    let fileFormat = (file.originalname).split('.')
    // 最后一项就是后缀名
    cb(null, Date.now() + '.' + fileFormat[fileFormat.length - 1])
  }
})
// 加载配置
let upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 // 限制1M
  }
})
module.exports = upload