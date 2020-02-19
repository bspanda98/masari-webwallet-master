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
	txCoinbaseMinConfirms: 60, // corresponds to CRYPTONOTE_MINED_MONEY_UNLOCK_WINDOW in Monero
	addressPrefix: 158,
	integratedAddressPrefix: 158,
	addressPrefixTestnet: 33,
	integratedAddressPrefixTestnet: 34,
	subAddressPrefix: 52,
	subAddressPrefixTestnet: 73,
	feePerKB: new JSBigInt('400000000'),//20^10 - for testnet its not used, as fee is dynamic.
	dustThreshold: new JSBigInt('1000000000'),//10^10 used for choosing outputs/change - we decompose all the way down if the receiver wants now regardless of threshold
	defaultMixin: 12, // default value mixin

	idleTimeout: 30,
	idleWarningDuration: 20,

	coinSymbol: 'ETRX',
	openAliasPrefix: "etrx",
	coinName: 'traaittPlatform',
	coinUriPrefix: 'traaittplatform:',
	avgBlockTime: 17,
	maxBlockNumber: 500000000,

	donationAddresses : []
};
