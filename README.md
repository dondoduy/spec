#  Lightsuite

Code react-redux app for developing dapp UIs.

## Features

Spec is a platform that provides a growing base of functionality for you to use in your own applications

* Create, Edit, Remove Networks
* Create, Edit, Remove ERC20 Tokens
* Create, Edit, Remove Accounts
* Import v3 wallet
* Account Types
  * v3 (encrypted json)
  * Ledger nano
  * ~ Offline
  * Multisig (+ deploy, manage users, sign other's multisig transaction)
* Send Base Tokens (ETH, KETH, ETC)
* Send Token (any ERC20 token)
* Modular Dapplets
  * ~ Generic Transaction Signer
  * ETC Redemption
  * DigiAssets (closed source ATM)
* 1st class mobile support (progressive web app)
* Offline mode (don't need an internet connection)
* ~ QR code reading & writing (android/desktop)
* Optimized bundles
* Service worker for push-updates

~ QR code scanner working on dev version of chrome android

## Developing

Spec is in early developer release mode. We will be adding more resources as time goes on, but if you're feeling adventurous, you experiment with Spec today.

Ensure you have the following installed:

* node 8.x
* npm 5.x

Then clone this repo, and

```
npm install
npm start
```
## Config

See `spectrum.config.js`. By default, and for development use an empty config object (`{}`).

For specific builds (including a standalone dapplet), you can customise the config file with the following options:

``` javascript
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
```


## Scripts

See `package.json` for scripts:

* `npm start` Start webpack dev server
* `npm run build` Build static files to `./docs/`
* `npm run test` Run jest & cucumber tests
* `npm run test:jest` Jest Snapshot & Enzyme Unittests
* `npm run test:watch` Watch Just Tests
* `npm run test:cucumber` WebdriverIO Acceptance Tests
* `npm run stats` Bundle analyzer
* `npm run lint` Code validator
* `npm run serve` Serve static files from `./docs/` in localhost:8080
* TODO `npm run deploy`

## License

BSD-3-clause, 2017

Distributions must include the "Powered by Spec" link in the Main Menu or Footer.
