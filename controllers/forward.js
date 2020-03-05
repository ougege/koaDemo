const ModelAll = require('../modules/forward')
const ForWardModel = ModelAll.ForWardModel
const UserModel = ModelAll.UserModel
class ForWardController {
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
                let ret = await ForWardModel.createForWard(req)
                // 使用刚刚创建的id查询合约列表,且返回合约信息
                let data = await ForWardModel.getForWardList(ret.id)

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
        // let id = ctx.params.id
        let id = ctx.query.id
        if (id) {
            try {
                // 查询合约详情模型
                let data = await ForWardModel.getForWardList(id)
                ctx.response.status = 200
                if (data) {
                    ctx.body = {
                        code: 200,
                        msg: '查询成功',
                        data
                    }
                } else {
                    ctx.response.status = 404
                    ctx.body = {
                        code: 404,
                        msg: '未找到',
                        data: err
                    }
                }
                
            } catch (err) {
                ctx.response.status = 403
                ctx.body = {
                    code: 403,
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

    /**
     * 删除合约
     * @param ctx
     * @return {Promise.<void>}
     */
    static async delete(ctx) {
        let req = ctx.request.body
        if (req.id) {
            try {
                // 删除合约模型
                let data = await ForWardModel.deleteForward(req.id)
                ctx.response.status = 200
                ctx.body = {
                    code: 200, 
                    msg: '删除成功',
                    data
                }
            } catch(err) {
                ctx.response.status = 412
                ctx.body = {
                    code: 412,
                    msg: '删除合约失败',
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
}

class UserController {
    /**
     * 创建用户
     * @params ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        // 接受客户端
        let req = ctx.request.body
        if(req.name && req.password) {
            try {
                // 创建合约模型
                let data = await UserModel.createUser(req)

                ctx.response.status = 200
                ctx.body = {
                    code: 200, 
                    msg: '创建用户成功',
                    data
                }
            } catch(err) {
                ctx.response.status = 412
                ctx.body = {
                    code: 412,
                    msg: '创建用户失败',
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
     * 用户登录
     * @params ctx
     * @returns {Promise.<void>}
     */
    static async login(ctx) {
        // 接受客户端
        let req = ctx.request.body
        if(req.name && req.password) {
            try {
                // 创建合约模型
                console.log(req)
                let data = await UserModel.login(req)
                console.log(data)
                ctx.response.status = 200
                ctx.body = {
                    code: 200, 
                    msg: '用户登录成功',
                    data
                }
            } catch(err) {
                ctx.response.status = 412
                ctx.body = {
                    code: 412,
                    msg: '登录失败',
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
     * 获取用户详情
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async detail(ctx) {
        let name = ctx.query.name
        if (name) {
            try {
                // 查询用户信息详情
                let data = await UserModel.getUser(name)
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
                msg: '用户姓名必须要传'
            }
        }
    }
}
module.exports = { ForWardController, UserController }