let global : any = typeof window !== 'undefined' ? window : self;
global.config = {
	apiUrl:typeof window !== 'undefined' && window.location ? window.location.href.substr(0,window.location.href.lastIndexOf('/')+1)+'api/' : 'https://traaittwallet.com/api/',
	trustedDaemonsAddresses:[
		'https://us-east.traaittnode.com:23896/'
	],
	phpRelay:typeof window !== 'undefined' ? true : false,
	mainnetExplorerUrl: "https://traaittchain.com/",
	mainnetExplorerUrlHash: "https://traaittchain.com/transaction.html?hash={ID}",
	mainnetExplorerUrlBlock: "https://traaittchain.com/block.html?height={ID}",
	testnetExplorerUrl: "",
	testnetExplorerUrlHash: "",
	testnetExplorerUrlBlock: "",
	testnet: false,
	coinUnitPlaces: 2,
	txMinConfirms: 10,         // corresponds to CRYPTONOTE_DEFAULT_TX_SPENDABLE_AGE in Monero
	txCoinbaseMinConfirms: 120, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	addressPrefix: 158,
	integratedAddressPrefix: 0,
	addressPrefixTestnet: 0,
	integratedAddressPrefixTestnet: 0,
	subAddressPrefix: 0,
	subAddressPrefixTestnet: 0,
	feePerKB: new JSBigInt('100'),//20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('0'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 1, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: '',
	openAliasPrefix: "etrx",
	coinName: 'traaittPlatform',
	coinUriPrefix: 'traaittplatform:',
	avgBlockTime: 17,
	maxBlockNumber: 500000000,

	donationAddresses : []
};
