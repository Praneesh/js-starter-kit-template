//Make sure our code is transpiled before our tests run
require('babel-register')();

// Disabling webpack features that Mocha does not understand
require.extensions['.css'] = function() {}
