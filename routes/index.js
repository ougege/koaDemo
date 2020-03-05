const router = require('koa-router')()
const ControllerAll = require('../controllers/forward')
const ForWardController = ControllerAll.ForWardController
const UserController = ControllerAll.UserController
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
// 创建合约
router.post('/forward/create', ForWardController.create)
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
module.exports = router
