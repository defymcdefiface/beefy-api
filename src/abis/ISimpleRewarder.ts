const ISimpleRewarder = [
  { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
  { inputs: [], name: 'SimpleRewarderPerSec__InvalidTokenPerSec', type: 'error' },
  { inputs: [], name: 'SimpleRewarderPerSec__OnlyAPTFarm', type: 'error' },
  {
    anonymous: false,
    inputs: [{ indexed: false, internalType: 'uint8', name: 'version', type: 'uint8' }],
    name: 'Initialized',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'user', type: 'address' },
      { indexed: false, internalType: 'uint256', name: 'amount', type: 'uint256' },
    ],
    name: 'OnReward',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferStarted',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: true, internalType: 'address', name: 'previousOwner', type: 'address' },
      { indexed: true, internalType: 'address', name: 'newOwner', type: 'address' },
    ],
    name: 'OwnershipTransferred',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      { indexed: false, internalType: 'uint256', name: 'oldRate', type: 'uint256' },
      { indexed: false, internalType: 'uint256', name: 'newRate', type: 'uint256' },
    ],
    name: 'RewardRateUpdated',
    type: 'event',
  },
  { stateMutability: 'payable', type: 'fallback' },
  {
    inputs: [],
    name: 'acceptOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'apToken',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'aptFarm',
    outputs: [{ internalType: 'contract IAPTFarm', name: '', type: 'address' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [],
    name: 'balance',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'token', type: 'address' }],
    name: 'emergencyWithdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'farmInfo',
    outputs: [
      { internalType: 'uint256', name: 'accTokenPerShare', type: 'uint256' },
      { internalType: 'uint256', name: 'lastRewardTimestamp', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'uint256', name: '_tokenPerSec', type: 'uint256' },
      { internalType: 'address', name: '_owner', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'isNative',
    outputs: [{ internalType: 'bool', name: '', type: 'bool' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [
      { internalType: 'address', name: '_user', type: 'address' },
      { internalType: 'uint256', name: '_aptAmount', type: 'uint256' },
      { internalType: 'uint256', name: 'aptSupply', type: 'uint256' },
    ],
    name: 'onJoeReward',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'owner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pendingOwner',
    outputs: [{ internalType: 'address', name: '', type: 'address' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '_user', type: 'address' }],
    name: 'pendingTokens',
    outputs: [{ internalType: 'uint256', name: 'pending', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'rewardToken',
    outputs: [{ internalType: 'contract IERC20', name: '', type: 'address' }],
    stateMutability: 'pure',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'uint256', name: '_tokenPerSec', type: 'uint256' }],
    name: 'setRewardRate',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'tokenPerSec',
    outputs: [{ internalType: 'uint256', name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: 'newOwner', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'updateFarm',
    outputs: [
      {
        components: [
          { internalType: 'uint256', name: 'accTokenPerShare', type: 'uint256' },
          { internalType: 'uint256', name: 'lastRewardTimestamp', type: 'uint256' },
        ],
        internalType: 'struct ISimpleRewarderPerSec.FarmInfo',
        name: 'farm',
        type: 'tuple',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ internalType: 'address', name: '', type: 'address' }],
    name: 'userInfo',
    outputs: [
      { internalType: 'uint256', name: 'amount', type: 'uint256' },
      { internalType: 'uint256', name: 'rewardDebt', type: 'uint256' },
      { internalType: 'uint256', name: 'unpaidRewards', type: 'uint256' },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'wNative',
    outputs: [{ internalType: 'contract IWrappedNative', name: '', type: 'address' }],
    stateMutability: 'pure',
    type: 'function',
  },
  { stateMutability: 'payable', type: 'receive' },
] as const;
export default ISimpleRewarder;