const ForWardModel = require('../modules/forward')
class forWardController {
    /**
     * 创建合约
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        // 接受客户端
        let req = ctx.request.body
        if(req.name && req.id && req.price && req.deposit) {
            try {
                // 创建合约模型
                const ret = await ForWardModel.createForWard(req)
                // 使用刚刚创建的id查询合约列表,且返回合约信息
                const data = await ForWardModel.getForWardList(ret.id)

                ctx.response.status = 200
                ctx.body = {
                    code: 200, 
                    msg: '创建合约成功',
                    data
                }
            } catch(err) {
                ctx.response.status = 412
                ctx.body = {
                    code: 412,
                    msg: '创建合约失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416
            ctx.body = {
                code: 200,
                msg: '参数不全'
            }
        }
    }

    /**
     * 获取合约详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx) {
        let id = ctx.params.id
        if (id) {
            try {
                // 查询合约详情模型
                let data = await ForWardModel.getForWardList(id)
                ctx.response.status = 200
                ctx.body = {
                    code: 200,
                    msg: '查询成功',
                    data
                }
            } catch (err) {
                ctx.response.status = 412
                ctx.body = {
                    code: 412,
                    msg: '查询失败',
                    data: err
                }
            }
        } else {
            ctx.response.status = 416
            ctx.body = {
                code: 416,
                msg: '合约id必须要传'
            }
        }
    }
}

module.exports = forWardController