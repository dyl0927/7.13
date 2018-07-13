require.config({
    paths: {
        'jquery': 'libs/jquery-2.1.1.min',
        'index': 'index'
    }
});
require(['jquery', 'index'], function ($, index) {
    index.rander
})