

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../../../client'), constants = Client.constants;

module.exports = Client.sub({
	getTransactions: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/transactions'
	}),
	addTransaction: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/transactions?responseFields={responseFields}'
	}),
	removeTransaction: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/customer/accounts/{accountId}/transactions/{transactionId}'
	})
});
