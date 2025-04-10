// const PROXY_CONFIG = {
//   "/api/v1": {
//     "target": "https://translator-backend-cp-388868.apps.cluster1.emea.cp.int.kn",
//     "secure": true,
//     "logLevel": "debug",
//     "changeOrigin": true
//   }
// }

// For local
const PROXY_CONFIG = {
  "/api/v1": {
    "target": "http://localhost:8000",
    "secure": false,
    "logLevel": "debug",
  }
}

module.exports = PROXY_CONFIG;
