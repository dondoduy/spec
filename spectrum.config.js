module.exports = { };
let config = {
  keystoreTypes: [ 'v3', 'ledger', 'cold', ... ], // whitelist of available keystore types
  availableNetworks: [ 'eth-mainnet', 'eth-kovan', ... ], // whistlist of networks available
  enabledNetworks: [ 'eth-mainnet', 'eth-kovan', ... ], // whistlist of auto-connected networks
  defaultNetsoks: [ 'eth-mainnet', 'eth-kovan', ... ], // whistlist of default-selected networks
  publicPath: '/path/', // string to prefix the app path (if serving from a non-root path)
  menuStyle: 'hidden', // (or `hamburger`, `hidden`) menu appearance
  persistCore: true, // save the accounts and config in localStorage between reloads (potential security issues!)
  themeFolder: 'some_node_module/semantic-ui', // location of semantic-ui variables & overrides to be used as theme
  // dapplet settings
  dappletName: 'Digix KYC System', // title to apepar in the menu
  dappletIcon: 'id card', // icon to appear in the menu
  dappletPath: '/kyc', // default path for dapplet route, leave undefiend for base path
}

if (typeof window !== 'undefined') { // for in-browser only
  config = Object.assign(config, {
    dapplet: () => require('@digix/marketplace-ui').default, // function returning dapplet root component
    reducers: { // dapplet reducers will be added based on the keys passed here
      digixMarketplace: {
        src: require('@digix/marketplace-ui/src/reducer').default, // reducer file
        persist: true, // all state under `digixMarketplace` will be persisted in localStorage
      },
      kycSystem: {
        src: require('@digix/kyc-system/spectrum/reducer').default, // reducer file
        persist: ['userInfo', 'kycForm', 'authToken'], // whitelist of these state sub-keys will be included
      },
    },
  });
}

module.exports = config;
