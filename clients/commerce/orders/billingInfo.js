

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../../client'), constants = Client.constants;

module.exports = Client.sub({
	getBillingInfo: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/orders/{orderId}/billinginfo?draft={draft}&responseFields={responseFields}'
	}),
	setBillingInfo: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/orders/{orderId}/billinginfo?updatemode={updateMode}&version={version}&responseFields={responseFields}'
	})
});
