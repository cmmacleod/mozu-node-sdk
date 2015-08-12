

//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by CodeZu.     
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

var Client = require('../../client'), constants = Client.constants;

module.exports = Client.sub({
	getPropertyTypes: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/content/propertytypes/?pageSize={pageSize}&startIndex={startIndex}&responseFields={responseFields}'
	}),
	getPropertyType: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/content/propertytypes/{propertyTypeName}?responseFields={responseFields}'
	}),
	createPropertyType: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/content/propertytypes/?responseFields={responseFields}'
	}),
	updatePropertyType: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/content/propertytypes/{propertyTypeName}?responseFields={responseFields}'
	}),
	deletePropertyType: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/content/propertytypes/{propertyTypeName}'
	})
});
