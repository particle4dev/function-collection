Register = (function () { 
    return function () {
        var list = {}, arr = [];
        this.set = function (name, obj) {
            if(list[name])
                throw new Error(name + ' is exists');
            list[name] = obj;
            arr.push(obj);
        };
        this.get = function (name) {
            if(_.isString(name))
                return list[name];
            return arr[name];
        };
        this.isSet = function (name) {
            return !!list[name];
        };
        this.length = function () {
            return arr.length;
        };
        this.forEach = function (func) {
            _.each(list, func);
        };
    };
})();
