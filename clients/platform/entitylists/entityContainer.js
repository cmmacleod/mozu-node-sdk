

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
	getEntityContainer: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/platform/entitylists/{entityListFullName}/entityContainers/{id}?responseFields={responseFields}'
	}),
	getEntityContainers: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/platform/entitylists/{entityListFullName}/entityContainers?pageSize={pageSize}&startIndex={startIndex}&filter={filter}&sortBy={sortBy}&responseFields={responseFields}'
	})
});
