var _publishCursor = function (cursor, sub, collection, options) {
    var observeHandle = cursor.observeChanges({
        added: function (id, fields) {
            if(options && _.isFunction(options.beforeAdded))
                fields = options.beforeAdded.call(sub, id, fields);
            sub.added(collection, id, fields);
        },
        changed: function (id, fields) {
            if(options && _.isFunction(options.beforeChanged))
                fields = options.beforeChanged.call(sub, id, fields);
            sub.changed(collection, id, fields);
        },
        movedBefore: function (id, fields) {
            if(options && _.isFunction(options.movedBefore))
                fields = options.movedBefore.call(sub, id, fields);
        },
        removed: function (id) {
            sub.removed(collection, id);
        }
    });
    console.info('[publications][' + collection + ']', 'subscribe by ' + sub.userId);
    sub.onStop(function () {
        console.warn('[publications][' + collection + ']', 'unsubscribe by ' + sub.userId);
        observeHandle.stop();
    });
};
