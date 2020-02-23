// 引入mysql配置文件
const db = require('../config/db')
const Sequelize = db.sequelize
// 引入数据表模型
const ForWard = Sequelize.import('../schema/forward')
ForWard.sync({force: false}) // 自动创建表
class ForWardModel {
    /**
     * 创建合约模型
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
     * 查询合约列表
     * @param id 文章id
     * @returns {Promise<Model}
     */
    static async getForWardList(id) {
        return await ForWard.findOne({
            where: {
                id
            }
        })
    }
}

module.exports = ForWardModel