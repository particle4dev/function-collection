RequireUpdate = function(callback){
    var willUpdate = false;
    var delay = 0;
    var cb = function(args){
        callback.apply(null, args);
        setTimeout(function () {
            willUpdate = false;
        }, delay);
    };
    this.run = function(number){
        if(_.isUndefined(number) || _.isNull(number))
            delay = 0;
        else
            delay = number;
        if (! willUpdate) {
            var args = Array.prototype.slice.call(arguments, 1);
            var c = cb.bind(this, args);
            willUpdate = true;
            c();
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
