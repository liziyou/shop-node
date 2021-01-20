const CONF = {
    //开启服务的端口
    port: '5757',
    /**
     * MySQL 配置
     */
    mysql: {
        host: 'localhost',
        port: 3306,
        user: 'root',
        db: 'nodemysql',
        pass: 'root123456',
        char: 'utf8mb4'
    }
}

module.exports = CONF