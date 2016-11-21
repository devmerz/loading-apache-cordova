cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-spinner-dialog.SpinnerDialog",
        "file": "plugins/cordova-plugin-spinner-dialog/www/spinner.js",
        "pluginId": "cordova-plugin-spinner-dialog",
        "merges": [
            "window.plugins.spinnerDialog"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-spinner-dialog": "1.3.1",
    "cordova-plugin-whitelist": "1.3.0"
};
// BOTTOM OF METADATA
});