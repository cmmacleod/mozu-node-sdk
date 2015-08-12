

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
	getDiscounts: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/admin/discounts/?startIndex={startIndex}&pageSize={pageSize}&sortBy={sortBy}&filter={filter}&responseFields={responseFields}'
	}),
	getDiscountContent: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}/content?responseFields={responseFields}'
	}),
	getDiscount: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}?responseFields={responseFields}'
	}),
	generateRandomCoupon: Client.method({
		method: constants.verbs.GET,
		url: '{+tenantPod}api/commerce/catalog/admin/discounts/generate-random-coupon?responseFields={responseFields}'
	}),
	createDiscount: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/discounts/?responseFields={responseFields}'
	}),
	associateCouponSet: Client.method({
		method: constants.verbs.POST,
		url: '{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}/couponsets/'
	}),
	updateDiscountContent: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}/content?responseFields={responseFields}'
	}),
	updateDiscount: Client.method({
		method: constants.verbs.PUT,
		url: '{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}?responseFields={responseFields}'
	}),
	deleteDiscount: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}'
	}),
	disassociateCouponSet: Client.method({
		method: constants.verbs.DELETE,
		url: '{+tenantPod}api/commerce/catalog/admin/discounts/{discountId}/couponsets/'
	})
});
