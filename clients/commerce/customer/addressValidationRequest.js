

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
	validateAddress: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/customer/addressvalidation/?responseFields={responseFields}'
	})
});
