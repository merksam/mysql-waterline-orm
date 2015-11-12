module.exports = function (app) {
    app.get('/users', function(req, res) {
        app.models.users.find().exec(function(err, models) {
            if(err) return res.json({ err: err }, 500);
            res.json(models);
        });
    });

    app.post('/users', function(req, res) {
        app.models.users.create(req.body, function(err, model) {
            if(err) return res.json({ err: err }, 500);
            res.json(model);
        });
    });

    app.get('/users/:id', function(req, res) {
        app.models.users.findOne({ id: req.params.id }, function(err, model) {
            if(err) return res.json({ err: err }, 500);
            res.json(model);
        });
    });

    app.delete('/users/:id', function(req, res) {
        app.models.users.destroy({ id: req.params.id }, function(err) {
            if(err) return res.json({ err: err }, 500);
            res.json({ status: 'ok' });
        });
    });

    app.put('/users/:id', function(req, res) {
        // Don't pass ID to update
        delete req.body.id;

        app.models.users.update({ id: req.params.id }, req.body, function(err, model) {
            if(err) return res.json({ err: err }, 500);
            res.json(model);
        });
    });
};
