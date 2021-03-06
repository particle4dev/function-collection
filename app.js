/**
    APP = {
        helper - {
            Pipeline
        }

        COLLECTION
        
    }
 */
APP = {};
APP.namespace = function (ns_string) {
    var parts = ns_string.split('.'),
    parent = APP,
    i;
    // strip redundant leading global
    if (parts[0] === "APP") {
        parts = parts.slice(1);
    }
    for (i = 0; i < parts.length; i += 1) {
        // create a property if it doesn't exist
        if (typeof parent[parts[i]] === "undefined") {
            parent[parts[i]] = {};
        }
        parent = parent[parts[i]];
    }
    return parent;
};
/**
 * configuration
 *
 */
var _options = {};
var VALID_KEYS = [
    'sportsdatallcKey'
    //stripe key
];
APP.config = function(options) {
    //get
    if(_.isString(options)){
        if(!_options[options])
            throw new Error(options + ' is not set');
        return _options[options];
    }
    //set
    _.each(_.keys(options), function (key) {
        if (!_.contains(VALID_KEYS, key)) {
            throw new Error("Invalid key " + key);
        }
    });
    _.each(VALID_KEYS, function (key) {
        if (key in options) {
            if (key in _options) {
                throw new Error("Can't set " + key + " more than once");
            } 
            else {
                _options[key] = options[key];
            }
        }
    });
};
/**
 * settings
 *
 */
APP.settings = function(setting) {
    if(Meteor.isServer)
        throw new Error('only run in client right now');
    var user = Meteor.user();
    if(!user)
        return;
    return user.settings[setting];
};
Users = Meteor.users;
