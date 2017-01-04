var log = require('./server/libs/log')(module);
var NewsModel = require('./server/libs/mongoose').NewsModel;

log.info('Creating a new DB...');

NewsModel.remove({}, function(err) {
    var news = new NewsModel({ date: new Date(), title: 'Welcome!', message: 'This is test Welcome message.' });
    news.save(function(err, article) {
        if(err) return log.error(err);
        else log.info("New user - %s:%s",article.title, article.message);
    });
});

log.info('done!');