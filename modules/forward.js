// 引入mysql配置文件
const db = require('../config/db')
const Sequelize = db.sequelize
// 引入数据表模型
const ForWard = Sequelize.import('../schema/forward')
const User = Sequelize.import('../schema/user')
ForWard.sync({force: false}) // 自动创建表
User.sync({force: false})

// 合约
class ForWardModel {
    /**
     * 创建合约模型(单个)
     * @param data
     * @returns {Promise<*>}
     */
    static async createForWard(data) {
        return await ForWard.create({
            name: data.name,
            id: data.id,
            price: data.price,
            deposit: data.deposit
        })
    }

    /**
     * 创建合约模型(列表)
     * @param data
     * @returns {Promise<*>}
     */
    static async createForWardList(data) {
        return await ForWard.bulkCreate(data, {updateOnDuplicate:['name', 'id', 'price', 'deposit']})
    }

    /**
     * 查询合约列表
     * @param id 合约id
     * @returns {Promise<Model}
     */
    static async getForWardList(id) {
        return await ForWard.findOne({
            where: {
                id: id
            }
        })
    }
    /**
     * 删除合约
     * @param id 合约id
     * @returns {Promise<*>}
     */
    static async deleteForward(id) {
        return await ForWard.destroy({
            where: {
                id: id
            }
        })
    }
}

// 用户
class UserModel {
    /**
     * 创建用户
     * @param data
     * @returns {Promise<*>}
     */
    static async createUser(data) {
        return await User.create({
            name: data.name,
            password: data.password
        })
    }

    /**
     * 查询用户信息
     * @param name 用户姓名
     * @returns {Promise<Model>}
     */
    static async getUser(name) {
        return await User.findOne({
            where: {
                name: name
            }
        })
    }

    /**
     * 用户登录
     * @param data
     * @returns {Promise<*>}
     */
    static async login(data) {
        return await User.findOne({
            where: {
                name: data.name,
                password: data.password
            }
        })
    }
}
module.exports = { ForWardModel, UserModel }