export const ELEMENTS = {
    cart: {
        baseCart: '#cart_info',
        baseCartValue: '.cart_total .cart_total_price',
        baseProductImage: '.cart_product a img',
        baseProductName: '.cart_description h4 a',
        baseProductPrice: '.cart_price p',
        baseProductQuantity: '.cart_quantity button',
        btnProceedToCheckout: '#cart_items .check_out'
    },
    checkout: {
        baseDeliveryAddress: '#address_delivery',
        baseBillingAddress: '#address_invoice',
        baseAddressTitle: '.address_title h3',
        baseAddressName: '.address_firstname',
        baseAddressStreet: '.address_address1',
        baseAddressCityStateCode: '.address_city',
        baseAddressCountry: '.address_country_name',
        baseAddressPhone: '.address_phone',
        btnProceedToPayment: '.check_out[href="/payment"]'
    },
    login: {
        form: 'form[action="/login"]',
        title: '.login-form h2',
        email: '[data-qa="login-email"]',
        password: '[data-qa="login-password"]',
        btnLogin: '[data-qa="login-button"]'
    },
    navbar: {
        login: '.navbar-nav [href="/login"]',
        products: '.navbar-nav [href="/products"]',
        userLogged: '.navbar-nav .fa-user'
    },
    payment: {
        btnConfirmOrder: '[data-qa="pay-button"]',
        cardName: '[data-qa="name-on-card"]',
        cardNumber: '[data-qa="card-number"]',
        cardMonthExpiry: '[data-qa="expiry-month"]',
        cardYearExpiry: '[data-qa="expiry-year"]',
        cardSecurityCode: '[data-qa="cvc"]',
    },
    products: {
        baseProduct: '.product-image-wrapper',
        baseProductImage: '.productinfo img',
        baseProductName: '.productinfo p',
        baseProductPrice: '.productinfo h2',
        btnAddToCard: '.add-to-cart',
        btnViewCart: '.modal-content [href="/view_cart"]'
    },
    resumeOrder: {
        baseOrderStatus: '[data-qa="order-placed"]',
        btnDownloadInvoice: '.check_out[href^="/download_invoice"]'
    }
}