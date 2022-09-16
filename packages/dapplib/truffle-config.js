require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'give close brown slab carpet rifle noble huge hockey kangaroo army giggle'; 
let testAccounts = [
"0xb837ad197505f2b71917e7a7bd62ecbf59ec8ff8854d803ca2a212ed0d8c19e0",
"0x3a128e7261b972e67b2ef49f50ea1eaeba68e4d59501f942e751a2b6f74f0b29",
"0x0d84ffef5edc904c9c27db8832786c31c6ce81e7a73cf62e9b7650f8f8b98228",
"0xc0aedb7b37f759dfa71305dd8193bae869702c9c949ba46db1e1e261fe38a6ed",
"0x264751aa9d022d46e307813d63d35a98d764617d704f80ee9f7e6f26a497a17f",
"0x7d4af34d0d7561a7213b4d124abfb92fc865023ab7fa27578996322627881051",
"0xaba3d16626c6260dd4d50b520e46c3d3bcd9728b632aba979424beed2f31d63d",
"0x0de376a91598a969efce356dcd72ebb33afc5d24a4b3900acac4f6d1bd3710fe",
"0x3d7d4bbd8d1e37dda2e0507db1cff86a5ca4859d6bf2425b079f110d2f83b29a",
"0x58416cff37692bbe2009c711b43b8e19fbb08e77b22e3c81d30e195289826499"
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

