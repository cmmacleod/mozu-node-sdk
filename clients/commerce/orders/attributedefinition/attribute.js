

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
	getAttributes: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/orders/attributedefinition/attributes/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
	}),
	getAttributeVocabularyValues: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/orders/attributedefinition/attributes/{attributeFQN}/VocabularyValues'
	}),
	getAttribute: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/orders/attributedefinition/attributes/{attributeFQN}?responseFields={responseFields}'
	})
});
