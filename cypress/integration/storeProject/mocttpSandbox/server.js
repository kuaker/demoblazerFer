const mockServer = require('mockttp').getLocal();

// Before each test, start a fresh server:
mockServer.start(8080);

// After each test, stop your server:
mockServer.stop();