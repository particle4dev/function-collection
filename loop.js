var impose = function(object, func, args){
    return func.apply(object, args);
};
 
LoopJob = (function(){
    var root = (typeof window !== 'undefined') ? window : global; 
    /**
     * Define class 
     * 
     * @author      <particles4dev@gmail.com>
     * @version     
     * @since       1.0
     *
     * @param d     delay time
     * @param t     a function to execute 
     * @param [o]   a object (has a function to execute)
     **/   
    var f = function(d, t, o){
        /** 
         * Private property
         **/
        var self = this;
        var delay = (d === null) ? 1000 : d;
        var object = (o === null || o === undefined) ? {} : o;   
        var todo = t,
        start = 0, end = 2*delay,
        run = true;
        /** 
         * Public property
         **/
        this.timeoutID = null;
        /** 
         * Get current time
         * 
         * @return          Number
         * @see             void
         **/
        var getTime = function(){                   
            return new Date().getTime();
        };   
        /** 
         * Set a timer to delay
         * 
         * @param value     
         * @return          void
         * @see             void
         **/
        this.setDelay = function(value){
            delay = value;
            start = 0;
            end = 2 * delay;
        };
        /** 
         * Specify a function to execute when the delay time is done
         * 
         * @param func     
         * @return          void
         * @see             void
         **/
        this.setTodo = function(func){
            todo = func;
        };
        /** 
         * 
         * 
         * @param f          
         * @param args          
         * @return          void
         * @see             void
         **/
        var remind = function(func, args){
            if(run === true){
                start = getTime();
                // if(object == null)
                //     func.apply(func, args);
                // else
                    func.apply(object, args);
                var callback = args[args.length-1];
                if(typeof callback == 'function')
                    callback();  
                end = getTime();
                self.setup.apply(self, args);
            }
        };
 
        /** 
         * 
         *
         * @param callback   
         * @return          void
         * @see             void
         **/
        this.setup = function() {                   
            if(run === true){
                var args = [];
                for (var i = 0; i < arguments.length; i++) {
                    args.push(arguments[i]);
                }
                var mt = delay - (end - start);                 
                if(mt > 0){                             
                    this.timeoutID = root.setTimeout(impose, mt, this, remind, [todo, args]);                          
                } 
                else{
                    impose(this, remind, [todo, args]);
                }
            }         
        };
        /** 
         * exits the loop
         *
         * @return          void
         * @see             void
         **/
        this.cancel = function() {
            if(typeof this.timeoutID == "number") {
                root.clearTimeout(this.timeoutID);
                delete this.timeoutID;                      
            }
            run = false;
            return this;
        };
        /** 
         * Get current state
         *
         * @return          void
         * @see             void
         **/
        this.getState = function(){
            return run;
        };

        object.cancel = this.cancel.bind(this);
    };
    return f;  
})();

console.log( "Loop Object" );
var i = 0;
var obj = {
    firstName:'Steve',
    lastName :'Hoang',
    getInformation: function(){
        console.log(i + " My name is " + this.firstName + " " + this.lastName);
        if(i == 9)
            this.cancel();
        i++;
    }
};
var a = new LoopJob(2000, obj.getInformation, obj);
a.setup(function(){
    console.log( 'do callback' );
});
// var id = setTimeout(function(){
//     a.cancel();
// }, 9000);
