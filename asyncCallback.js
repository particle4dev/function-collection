// http://jsbin.com/wumuko/1/edit
AsyncCallback = function(){
  this._instance = null;
  this._waitList = [];
};
_.extend(AsyncCallback.prototype, {
  constructor: AsyncCallback,
  setInstance: function(ins){
    if(!_.isObject(ins))
      throw new Error('instance must be a object');
    this._instance = ins;
  },
  run: function(func){
    if(!this._instance)
      return this._waitList.push(func);
    this._bind(func)();
  },
  _bind: function(func){
    return _.bind(func, this._instance);
  },
  flush: function(){
    if(this._instance){
      var self = this;
      _.each(this._waitList, function(func){
        self._bind(func)();
      });
      this.resetWaitList();
    }
  },
  resetWaitList: function(){
    // reset
    this._waitList = [];
  },
  runLastWaitList: function(){
    var func = this._waitList.pop();
    this._bind(func)();
  }
});

// test
var b = {
  _name: 'le hoang'
};
var t = new AsyncCallback();
t.run(function(){
  console.log('hello', this._name);
});
t.run(function(){
  console.log('hello du ma', this._name);
});
t.setInstance(b);
t.runLastWaitList();
