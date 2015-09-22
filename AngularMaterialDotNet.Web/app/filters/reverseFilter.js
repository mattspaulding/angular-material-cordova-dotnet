'use strict';
app.filter('reverse', function () {
    return function (items) {
        if (!items || !items.length) { return; }
        return items.slice().reverse();
    };
});