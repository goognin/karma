const Web3 = require('web3');
const abi = require('./contracts/abi_karma');

const web3 = new Web3();
web3.setProvider(new web3.providers.HttpProvider('https://mainnet.infura.io/'));


module.exports = function (app) {

    let contractAddress = "****";

    let getTotalSupply = (contract) => {
        return new Promise((resolve, reject) => {
            contract.totalSupply((err, totalSupply) => {
                if (err) reject(err);
                else resolve(totalSupply);
            });
        });
    };

    let getTokenCreationCap = (contract) => {
        return new Promise((resolve, reject) => {
            contract.tokenCreationCap((err, tokenCreationCap) => {
                if (err) reject(err);
                else resolve(tokenCreationCap);
            });
        });
    };

    let progressStat = {
        progress: 1,
        total_supply: 1,
        token_cap: 1
    };

    function updateData() {
        let contractApi = web3.eth.contract(abi).at(contractAddress);
        let totalSupply = {};
        getTotalSupply(contractApi)
            .then((result) => {
                totalSupply = result;
                return getTokenCreationCap(contractApi);
            })
            .then((result) => {
                progressStat = {
                    progress: totalSupply.dividedBy(result) * 100,
                    total_supply: totalSupply.dividedBy('1e+18') * 1,
                    token_cap: result.dividedBy('1e+18') * 1
                };
            });
        console.log("Update from network " + new Date());
        setTimeout(updateData, 10000);
    }

    setTimeout(updateData, 10000);

    app.get('/progress', (req, res) => {
            res.send(progressStat);
        }
    );
};
