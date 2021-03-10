const INDEX = {
	href: '/index.vue',
	route: '/',
	url: '/',
}

const PRODUCT = {
	PRODUCT_LIST: {
		href: '/product/index.vue',
		route: '/product',
		url: '/product',
	},
	PRODUCT_DETAIL: {
		href: '/product/detail.vue',
		route: '/product/detail/:slug',
		url: '/product/detail',
	},
	PRODUCT_SEARCH: {
		href: '/product/search.vue',
		route: '/product/search',
		url: '/product/search',
	},
}

const ORDER = {
	CART: {
		href: '/order/cart.vue',
		route: '/order/cart',
		url: '/order/cart',
	},
	CHECKOUT: {
		href: '/order/checkout.vue',
		route: '/order/delivery',
		url: '/order/delivery',
	},
	ORDER_LIST: {
		href: '/order/list.vue',
		route: '/order',
		url: '/order',
	},
}

const FAVORIT = {
	href: '/favorit.vue',
	route: '/favorit',
	url: '/favorit',
}

const PROFILE = {
	href: '/profile.vue',
	route: '/profile',
	url: '/profile',
}

const HISTORY = {
	href: '/history.vue',
	route: '/history',
	url: '/history',
}

module.exports = {
	INDEX,
	...PRODUCT,
	...ORDER,
	FAVORIT,
	PROFILE,
	HISTORY,
}
