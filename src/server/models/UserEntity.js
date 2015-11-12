var User = {
    identity: 'users',
    connection: 'mysql',

    attributes: {
        id: 'integer',
        name: 'string',
        pass: 'string',
        email: 'string',
        hash: 'string'
    }
};

module.exports = User;