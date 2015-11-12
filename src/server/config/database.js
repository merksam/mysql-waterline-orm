module.exports = function (mysqlAdapter) {
    var config = {

        adapters: {
            'default': mysqlAdapter,
            mysql: mysqlAdapter
        },
        connections: {
            mysql: {
                adapter : 'mysql',
                host    : 'localhost',
                user    : 'root',
                password: 'root',
                database: 'tracker'
            }
        },
        defaults: {
            migrate: 'alter'
        }
    };

    return config;
};