const router = require('koa-router')()
const ForWardController = require('../controllers/forward')
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
router.get('/forward/:id', ForWardController.detail)

module.exports = router
