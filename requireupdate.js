RequireUpdate = function(callback){
    var willUpdate = false;
    var cb = function(){
        callback();
        willUpdate = false;
    };
    this.run = function(){
        if (! willUpdate) {
            setTimeout(cb, 0);
            willUpdate = true;
        }
    };
};

// _init = new RequireUpdate(cb);
// _init.run();
