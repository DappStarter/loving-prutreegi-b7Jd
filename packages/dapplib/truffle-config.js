require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hockey knife olympic system index return six purse include clinic flush spy'; 
let testAccounts = [
"0x1337319938b73992f2ab6d2d9198ad9d7e4182ca1efb2c773703cfbe6667cd95",
"0x1cd09e56d4565b34635b4cb79f373141fde00eb5a8231e8f50fd89a17c0b7c74",
"0x3913b33d4a7de2a0dd6b6396bb336f1c1fb78cb338fdddf5292411fe6c05d2e4",
"0x8773afda680d7120a0cfc1f5b549bf7f64168c8d6e0057e0dbf6623192dc0c64",
"0x1d445703ea0f962d73a43ec7654a99a6a7ac4e11a2de92567a6df1fc5f10fd55",
"0x9811f4603c5ecf298ff0daf9de519fa2210da0bcd3649da04ae42206003c0ad4",
"0x7170459c6792db2d21c0c993dc35060a8e70b16402629d9a1b68d959a540144f",
"0xe73b20b44486754bf607cb985dafca82c5297b7db67ed8df1fedcc4da1d0e8cb",
"0x4054d129008e6476f27bdd232d0c1867fd1c84e5de933d76ed376d084aa8f150",
"0x9450e9932fd3402838ca04450ff4dffa36979d8ae5a4615f79ca7802a639dea5"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

