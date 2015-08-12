

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
	getSoftAllocations: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/admin/softallocations/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
	}),
	getSoftAllocation: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/admin/softallocations/{softAllocationId}?responseFields={responseFields}'
	}),
	addSoftAllocations: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/softallocations/'
	}),
	convertToProductReservation: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/softallocations/convert'
	}),
	renewSoftAllocations: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/softallocations/renew'
	}),
	updateSoftAllocations: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/catalog/admin/softallocations/'
	}),
	deleteSoftAllocation: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/catalog/admin/softallocations/{softAllocationId}'
	})
});
