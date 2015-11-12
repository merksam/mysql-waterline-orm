module.exports = function (app) {
    require('./DefaultRoute')(app);
    require('./UsersRoute')(app);
};