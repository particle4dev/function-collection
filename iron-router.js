/**
 * How to use ?
 */
Router.getCurrentRouterName = function(){
    return Router.current().route.name;
};
Router.reload = function(){
    var current = Router.current();
    Router.go(current.route.name, current.params);
};
