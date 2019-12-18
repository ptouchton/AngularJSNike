module.exports = function(app) {
    app.get('/api/maa', getMaa);

    function getMaa(req, res, next) {
        var json = [{
            "id": 1017109,
            "name": "John Doe",
            "description":"desc 1"
        },{
            "id": 1017105,
            "name": "Jane Doe",
            "description":"desc 2"
        },{
            "id": 1017110,
            "name": "Bob Jones",
            "description":"desc 3"
        },{
            "id": 1017108,
            "name": "Hank Dyer",
            "description":"desc 4"
        }];
        res.send(json);
    }
};