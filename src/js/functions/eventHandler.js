module.exports = {
    triggerEvent: (storage) => {
        var length = module.exports.event.negative.length;
        var event = module.exports.event.negative[Math.ceil(Math.random() * (length-1))];
        alert(event.message);
        if (event.type == 'hardware') {
            storage.storageClass.reduceCounterOfPc(event.faktor, event.item);
        } else if(event.type == 'usd') {
            storage.storageClass.reduceUsdValue(event.faktor);
        }
        var html = $('#newsfeed-block').html();
        var newElem = '<h4 class="card-title">Personal Event!</h4>';
        newElem += '<p>'+event.message+'</p>';
        $('#newsfeed-block').html(html + newElem);
    },
    triggerNews: (id, type) => {
        var html = $('#newsfeed-block').html();
        var newElem = '<h4 class="card-title">'+module.exports.news[type][id].headline+'</h4>';
        newElem += '<p>'+module.exports.news[type][id].body+'</p>';
        $('#newsfeed-block').html(html + newElem);
    },
    initJson: () => {
        var d1 = $.Deferred();
        var d2 = $.Deferred();
        $.getJSON("data/news.json", {
            format: "json"
        })
        .done(function(data) {
            $.each(data, function(i, item) {
                module.exports.news = data;
            });
            d1.resolve();
        });
        $.getJSON("data/event.json", {
            format: "json"
        })
        .done(function(data) {
            $.each(data, function(i, item) {
                module.exports.event = data;
            });
            d2.resolve();
        });
        return $.when( d1, d2 );
    },
    event: {},
    news: {}
}