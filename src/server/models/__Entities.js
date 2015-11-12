Waterline = require('waterline');

module.exports = function (orm) {
    var User =  Waterline.Collection.extend(require('./UserEntity.js'));

    orm.loadCollection(User);
};
