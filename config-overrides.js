const rewireParity = require('react-app-rewire-parity');
const proxyParity = require('parity-react-dapp/proxy');

module.exports = {
  webpack: (config) => rewireParity(config),
  devServer: (configFunction) => proxyParity(configFunction)
};
