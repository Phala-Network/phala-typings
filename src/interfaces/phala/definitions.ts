export default {
    types: {
        Address: 'MultiAddress',
        BlockRewardInfo: {
            computeTarget: 'U256',
            onlineTarget: 'U256',
            seed: 'U256'
        },
        EcdsaSignature: '[u8; 65]',
        EthereumAddress: 'H160',
        EthereumTxHash: 'H256',
        LookupSource: 'MultiAddress',
        MinerStatsDelta: {
            numPower: 'i32',
            numWorker: 'i32'
        },
        PayoutPrefs: {
            commission: 'u32',
            target: 'AccountId'
        },
        PayoutReason: {
            _enum: {
                ComputeReward: null,
                OnlineReward: null
            }
        },
        RoundInfo: {
            round: 'u32',
            startBlock: 'BlockNumber'
        },
        RoundStats: {
            computeWorkers: 'u32',
            fracTargetComputeReward: 'u32',
            fracTargetOnlineReward: 'u32',
            onlineWorkers: 'u32',
            round: 'u32',
            totalPower: 'u32'
        },
        Score: {
            features: 'Vec<u32>',
            overallScore: 'u32'
        },
        StashInfo: {
            controller: 'AccountId',
            payoutPrefs: 'PayoutPrefs'
        },
        WorkerInfo: {
            lastUpdated: 'u64',
            machineId: 'Vec<u8>',
            pubkey: 'Vec<u8>',
            score: 'Option<Score>',
            state: 'WorkerStateEnum'
        },
        WorkerStateEnum: {
            _enum: {
                Empty: null,
                Free: null,
                Gatekeeper: null,
                Mining: 'BlockNumber',
                MiningPending: null,
                MiningStopping: null
            }
        }
    }
}
