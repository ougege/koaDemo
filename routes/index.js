const router = require('koa-router')()
const ControllerAll = require('../controllers/forward')
const ForWardController = ControllerAll.ForWardController
const UserController = ControllerAll.UserController
// 封装了upload
const upload = require('../public/upload')
router.get('/', async (ctx, next) => {
  await ctx.render('index', {
    title: 'Hello Koa 2!'
  })
})

router.get('/string', async (ctx, next) => {
  ctx.body = 'koa2 string'
})

router.get('/json', async (ctx, next) => {
  ctx.body = {
    title: 'koa2 json'
  }
})
// 创建合约(单个)
router.post('/forward/create', ForWardController.create)
// 创建合约(多个)
router.post('/forward/createList', ForWardController.createList)
// 获取合约详情
router.get('/forward/detail', ForWardController.detail)
// 删除合约
router.post('/forward/delete', ForWardController.delete)
// 创建用户
router.post('/user/create', UserController.create)
// 获取用户详情
router.get('/user/detail', UserController.detail)
// 用户登录
router.post('/user/login', UserController.login)
// 删除用户
// router.post('/user/delete', UserController.delete)
// 上传图片
router.post('/upload', upload.single('file'), async(ctx, next) => {
  ctx.body = {
    filename: ctx.req.file.filename
  }
})
module.exports = router
