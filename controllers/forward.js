const ModelAll = require('../modules/forward')
// 引入jwt做token验证
const jwt = require('jsonwebtoken')
// 解析token
const tools = require('../public/tool')
const ForWardModel = ModelAll.ForWardModel
const UserModel = ModelAll.UserModel
// 统一设置token有效时间,设为10s
const expireTime = '10s'
const secret = require('../public/secret')
class ForWardController {
    /**
     * 创建合约(单个)
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async create(ctx) {
        // 接受客户端
        const req = ctx.request.body
        const token = ctx.header.authorization
        if (token && await tools.verToken(token)) {
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
        } else {
            ctx.status = 401
            ctx.body = {
                code: 401,
                msg: '登录过期,请重新登录'
            }
        }
    }
    
    /**
     * 创建合约(多个)
     * @param ctx
     * @returns {Promise.<void>}
     */
    static async createList(ctx) {
        // 接受客户端
        const req = ctx.request.body
        console.log(req)
        const token = ctx.header.authorization
        if (token && await tools.verToken(token)) {
            if(req.arr) {
                try {
                    // 创建合约模型
                    let ret = await ForWardModel.createForWardList(req.arr)
                    // 使用刚刚创建的id查询合约列表,且返回合约信息
                    // let data = await ForWardModel.getForWardList(ret.id)
    
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
        } else {
            ctx.status = 401
            ctx.body = {
                code: 401,
                msg: '登录过期,请重新登录'
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
        const id = ctx.query.id
        const token = ctx.header.authorization
        if (token && await tools.verToken(token)) {
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
        } else {
            ctx.status = 401
            ctx.body = {
                code: 401,
                msg: '登录过期,请重新登录'
            }
        }
    }

    /**
     * 删除合约
     * @param ctx
     * @return {Promise.<void>}
     */
    static async delete(ctx) {
        const req = ctx.request.body
        const token = ctx.header.authorization
        if (token && await tools.verToken(token)) {
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
        } else {
            ctx.status = 401
            ctx.body = {
                code: 401,
                msg: '登录过期,请重新登录'
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
        const req = ctx.request.body
        const token = ctx.header.authorization
        if (token && await tools.verToken(token)) {
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
        } else {
            ctx.status = 401
            ctx.body = {
                code: 401,
                msg: '登录过期,请重新登录'
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
        const req = ctx.request.body
        if(req.name && req.password) {
            try {
                // 创建合约模型
                let data = await UserModel.login(req)
                let user = {
                    name: req.name,
                    password: req.password
                }
                // 生成token，验证登录有效期
                const token = jwt.sign(user, secret, {expiresIn: expireTime})
                ctx.response.status = 200
                ctx.body = {
                    code: 200, 
                    msg: '用户登录成功',
                    data: data,
                    token: token
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
        const name = ctx.query.name
        const token = ctx.header.authorization
        if (token && await tools.verToken(token)) {
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
        } else {
            ctx.status = 401
            ctx.body = {
                code: 401,
                msg: '登录过期,请重新登录'
            }
        }
    }
}
module.exports = { ForWardController, UserController }