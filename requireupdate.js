RequireUpdate = function(callback){
    var willUpdate = false;
    var cb = function(args){
        callback.apply(null, args);
        willUpdate = false;
    };
    this.run = function(number){
        if(_.isUndefined(number) || _.isNull(number))
            number = 0;
        if (! willUpdate) {
            var args = Array.prototype.slice.call(arguments);
            var c = cb.bind(this, args);
            setTimeout(c, number);
            willUpdate = true;
        }
    };
};

// _init = new RequireUpdate(cb);
// _init.run();

// function crawler(url){
//     console.log('hello', url);
// }
// var crawlerYoutubeURL = new RequireUpdate(crawler);
// crawlerYoutubeURL.run('https://www.youtube.com/watch?v=uH1wfrOcvHg');
