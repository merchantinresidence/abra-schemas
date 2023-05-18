var schema = {
	all: {
		"product-price": {
			html: "<div class=\"price price--on-sale\">\n  <div class=\"price__container\">\n    <div class=\"price__regular\">\n      <span class=\"visually-hidden visually-hidden--inline\">Regular price</span>\n      <span class=\"price-item price-item--regular\">\n        {{ original_price }}\n      </span>\n    </div>\n    <div class=\"price__sale\">\n        <span class=\"visually-hidden visually-hidden--inline\">Regular price</span>\n        <span>\n          <s class=\"price-item price-item--regular\">\n            {{ original_price }}\n          </s>\n        </span>\n      <span class=\"visually-hidden visually-hidden--inline\">Sale price</span>\n      <span class=\"price-item price-item--sale price-item--last\">\n        {{ final_price }}\n      </span>\n    </div>\n  </div>\n</div>\n",
			type: "product",
			selector: "#MainContent .price:not(.price--end)"
		},
		"cart-drawer-subtotal": {
			html: "<div class=\"cart-drawer__footer\">\n  <div class=\"totals\" role=\"status\">\n    <h2 class=\"totals__subtotal\">Subtotal</h2>\n    <p class=\"totals__subtotal-value\">{{ subtotal_price }}</p>\n  </div>\n  <div>\n    <ul class=\"discounts list-unstyled\" role=\"list\" aria-label=\"Discount\">\n      <li class=\"discounts__discount discounts__discount--end\">\n        <svg aria-hidden=\"true\" focusable=\"false\" class=\"icon icon-discount color-foreground-text\" viewBox=\"0 0 12 12\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M7 0h3a2 2 0 012 2v3a1 1 0 01-.3.7l-6 6a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4l6-6A1 1 0 017 0zm2 2a1 1 0 102 0 1 1 0 00-2 0z\"\n            fill=\"currentColor\">\n          </path>\n        </svg>\n        {{ code }}\n        (-{{ total_discount }})\n      </li>\n    </ul>\n  </div>\n  <small class=\"tax-note caption-large rte\">Taxes and shipping calculated at checkout</small>\n</div>\n",
			type: "cart",
			selector: "#CartDrawer .cart-drawer__footer"
		},
		"cart-drawer-items-code": {
			html: "<ul class=\"discounts list-unstyled\" role=\"list\" aria-label=\"Discount\"><li class=\"discounts__discount\"><svg aria-hidden=\"true\" focusable=\"false\" class=\"icon icon-discount color-foreground-text\" viewBox=\"0 0 12 12\"><path fill-rule=\"evenodd\" clip-rule=\"evenodd\" d=\"M7 0h3a2 2 0 012 2v3a1 1 0 01-.3.7l-6 6a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4l6-6A1 1 0 017 0zm2 2a1 1 0 102 0 1 1 0 00-2 0z\" fill=\"currentColor\"></path></svg>{{ code }}</li></ul>",
			item: "#CartDrawer .cart-item",
			type: "cart-item",
			selector: ".cart-item__details .discounts"
		},
		"cart-drawer-items-price": {
			html: "<div class=\"product-option\">\n  <span class=\"visually-hidden\">\n    Regular price\n  </span>\n  <s class=\"cart-item__old-price product-option\">{{ original_price }}</s>\n  <span class=\"visually-hidden\">\n    Sale price\n  </span>\n  <strong class=\"cart-item__final-price product-option\">\n    {{ final_price }}\n  </strong>\n</div>\n",
			item: "#CartDrawer .cart-item",
			type: "cart-item",
			selector: ".cart-item__details div.product-option"
		},
		"cart-drawer-items-line-price": {
			html: "<div class=\"cart-item__price-wrapper\">\n  <span class=\"visually-hidden\">\n    Regular price\n  </span>\n  <s class=\"cart-item__old-price price price--end\">\n    {{ original_line_price }}\n  </s>\n  <span class=\"visually-hidden\">\n    Sale price\n  </span>\n  <span class=\"price price--end\">\n    {{ final_line_price }}\n  </span>\n</div>",
			item: "#CartDrawer .cart-item",
			type: "cart-item",
			selector: ".cart-item__totals .cart-item__price-wrapper"
		}
	},
	cart: {
		"cart-subtotal": {
			html: "<div class=\"js-contents\">\n  <div class=\"totals\">\n    <h2 class=\"totals__subtotal\">Subtotal</h2>\n    <p class=\"totals__subtotal-value\">{{ subtotal_price }}</p>\n  </div>\n\n  <div>\n    <ul class=\"discounts list-unstyled\" role=\"list\" aria-label=\"Discount\">\n      <li class=\"discounts__discount discounts__discount--position\"><svg aria-hidden=\"true\" focusable=\"false\"\n          class=\"icon icon-discount color-foreground-text\" viewBox=\"0 0 12 12\">\n          <path fill-rule=\"evenodd\" clip-rule=\"evenodd\"\n            d=\"M7 0h3a2 2 0 012 2v3a1 1 0 01-.3.7l-6 6a1 1 0 01-1.4 0l-4-4a1 1 0 010-1.4l6-6A1 1 0 017 0zm2 2a1 1 0 102 0 1 1 0 00-2 0z\"\n            fill=\"currentColor\">\n          </path>\n        </svg>\n        {{ code }}\n        (-{{ total_discount }})\n      </li>\n    </ul>\n  </div>\n  <small class=\"tax-note caption-large rte\">Taxes and shipping calculated at checkout\n  </small>\n</div>\n",
			type: "cart",
			selector: ".cart__footer .js-contents"
		},
		"cart-items-price": {
			html: "<div class=\"product-option\">\n  <span class=\"visually-hidden\">\n    Regular price\n  </span>\n  <s class=\"cart-item__old-price product-option\">{{ original_price }}</s>\n  <span class=\"visually-hidden\">\n    Sale price\n  </span>\n  <strong class=\"cart-item__final-price product-option\">\n    {{ final_price }}\n  </strong>\n</div>\n",
			item: "#cart .cart-item",
			type: "cart-item",
			selector: "div.product-option"
		},
		"cart-items-line-price": {
			html: "<td class=\"cart-item__totals right small-hide\"><div class=\"loading-overlay hidden\"><div class=\"loading-overlay__spinner\"><svg aria-hidden=\"true\" focusable=\"false\" class=\"spinner\" viewBox=\"0 0 66 66\" xmlns=\"http://www.w3.org/2000/svg\"><circle class=\"path\" fill=\"none\" stroke-width=\"6\" cx=\"33\" cy=\"33\" r=\"30\"></circle></svg></div></div><div class=\"cart-item__price-wrapper\"><dl class=\"cart-item__discounted-prices\"><dt class=\"visually-hidden\">Regular price</dt><dd><s class=\"cart-item__old-price price price--end\">{{ original_line_price }}</s></dd><dt class=\"visually-hidden\">Sale price</dt><dd class=\"price price--end\">{{ final_line_price }}</dd></dl></div></td>",
			item: "#cart .cart-item",
			type: "cart-item",
			selector: ".cart-item__totals.small-hide"
		}
	},
	product: {
		"other-prices": {
			html: "<div class=\"price price--on-sale\">\n  <div class=\"price__container\">\n    <div class=\"price__regular\">\n      <span class=\"visually-hidden visually-hidden--inline\">Regular price</span>\n      <span class=\"price-item price-item--regular\">\n        {{ original_price }}\n      </span>\n    </div>\n    <div class=\"price__sale\">\n        <span class=\"visually-hidden visually-hidden--inline\">Regular price</span>\n        <span>\n          <s class=\"price-item price-item--regular\">\n            {{ original_price }}\n          </s>\n        </span>\n      <span class=\"visually-hidden visually-hidden--inline\">Sale price</span>\n      <span class=\"price-item price-item--sale price-item--last\">\n        {{ final_price }}\n      </span>\n    </div>\n  </div>\n</div>\n",
			type: "product",
			selector: "#MainContent .price:not(.price--large)"
		},
		"product-price": {
			html: "<div class=\"price price--large price--on-sale\">\n  <div class=\"price__container\">\n    <div class=\"price__regular\">\n      <span class=\"visually-hidden visually-hidden--inline\">Regular price</span>\n      <span class=\"price-item price-item--regular\">\n        {{ selected_variant.original_price }}\n      </span>\n    </div>\n    <div class=\"price__sale\">\n        <span class=\"visually-hidden visually-hidden--inline\">Regular price</span>\n        <span>\n          <s class=\"price-item price-item--regular\">\n            {{ selected_variant.original_price }}\n          </s>\n        </span>\n      <span class=\"visually-hidden visually-hidden--inline\">Sale price</span>\n      <span class=\"price-item price-item--sale price-item--last\">\n        {{ selected_variant.final_price }}\n      </span>\n    </div>\n  </div>\n</div>\n",
			type: "product",
			selector: "#MainContent .price.price--large"
		}
	}
};
var DawnSchema = {
	schema: schema
};

var schema$1 = {
	all: {
		"grid-product-price": {
			html: "<div class=\"grid-product__price\">\n  <span class=\"visually-hidden\">Sale price</span>\n  <span class=\"grid-product__price--current\">\n    <span aria-hidden=\"true\">{{ final_price }}</span>\n    <span class=\"visually-hidden\">{{ final_price }}</span>\n  </span>\n  <span class=\"visually-hidden\">Regular price</span>\n  <span class=\"grid-product__price--original\">\n    <span aria-hidden=\"true\">{{ original_price }}</span>\n    <span class=\"visually-hidden\">{{ original_price }}</span>\n  </span>\n  <span class=\"grid-product__price--savings\">Save {{ total_discount }}</span>\n</div>",
			type: "product",
			selector: ".grid-product__price"
		},
		"product-tags": {
			html: "<div class=\"grid-product__tags\"><div class=\"grid-product__tag grid-product__tag--sale\">Sale</div></div>",
			type: "product",
			selector: ".grid-product__tags"
		},
		"block-product-price": {
			html: "<div class=\"product-block product-block--price\">\n  <label class=\"variant__label\" for=\"ProductPrice-template--19160900993335__main\"> Price </label>\n  <span data-a11y-price=\"\" class=\"visually-hidden\" aria-hidden=\"false\"> Regular price </span>\n  <span data-product-price-wrap=\"\" class=\"\">\n    <span data-compare-price=\"\" class=\"product__price product__price--compare\">\n      <span aria-hidden=\"true\">{{ selected_variant.original_price }}</sup>\n      </span>\n      <span class=\"visually-hidden\">{{ selected_variant.original_price }}</span>\n    </span>\n  </span>\n  <span data-compare-price-a11y=\"\" class=\"visually-hidden\">Sale price</span>\n  <span data-product-price=\"\" class=\"product__price on-sale\">\n    <span aria-hidden=\"true\">{{ selected_variant.final_price }}</sup>\n    </span>\n    <span class=\"visually-hidden\">{{ selected_variant.final_price }}</span>\n  </span>\n  <span data-save-price=\"\" class=\"product__price-savings\">Save {{ selected_variant.total_discount }} </span>\n  <div data-unit-price-wrapper=\"\" class=\"product__unit-price hide\">\n    <span data-unit-price=\"\">\n      <span aria-hidden=\"true\"></span>\n      <span class=\"visually-hidden\"></span>\n    </span>/ <span data-unit-base=\"\"></span>\n  </div>\n</div>",
			type: "product",
			selector: ".product-block--price"
		},
		"quickview-product-price": {
			html: "<div class=\"product-block product-block--price\">\n  <label class=\"variant__label\" for=\"ProductPrice-template--19160900993335__main\"> Price </label>\n  <span data-a11y-price=\"\" class=\"visually-hidden\" aria-hidden=\"false\"> Regular price </span>\n  <span data-product-price-wrap=\"\" class=\"\">\n    <span data-compare-price=\"\" class=\"product__price product__price--compare\">\n      <span aria-hidden=\"true\">{{ selected_variant.original_price }}</sup>\n      </span>\n      <span class=\"visually-hidden\">{{ selected_variant.original_price }}</span>\n    </span>\n  </span>\n  <span data-compare-price-a11y=\"\" class=\"visually-hidden\">Sale price</span>\n  <span data-product-price=\"\" class=\"product__price on-sale\">\n    <span aria-hidden=\"true\">{{ selected_variant.final_price }}</sup>\n    </span>\n    <span class=\"visually-hidden\">{{ selected_variant.final_price }}</span>\n  </span>\n  <span data-save-price=\"\" class=\"product__price-savings\">Save {{ selected_variant.total_discount }} </span>\n  <div data-unit-price-wrapper=\"\" class=\"product__unit-price hide\">\n    <span data-unit-price=\"\">\n      <span aria-hidden=\"true\"></span>\n      <span class=\"visually-hidden\"></span>\n    </span>/ <span data-unit-base=\"\"></span>\n  </div>\n</div>",
			type: "product",
			selector: ".product-block--price",
			onevent: {
				"quickview:loaded": "quickview:loaded",
				"variant:change": "variant:change"
			}
		},
		"cart-drawer-item": {
			item: ".cart__drawer-form .cart__item",
			type: "cart-item",
			html: "<div class=\"cart__item-price-col text-right\">\n  <span class=\"visually-hidden\">Regular price</span>\n  <small class=\"cart__price cart__price--strikethrough\">\n    <span aria-hidden=\"true\">{{ original_price }}</span>\n    <span class=\"visually-hidden\">{{ original_price }}</span>\n  </small>\n  <span class=\"visually-hidden\">Sale price</span>\n  <span class=\"cart__price cart__discount\">\n    <span aria-hidden=\"true\">{{ final_price }}</span>\n    <span class=\"visually-hidden\">{{ final_price }}</span>\n  </span>\n  <small class=\"cart__discount\">{{ code }} (-{{ total_discount }})</small>\n</div>",
			selector: ".cart__item-price-col"
		},
		"cart-drawer": {
			type: "cart",
			html: "<div class=\"cart__item-sub cart__item-row cart__item--subtotal\">\n  <div>Subtotal</div>\n  <div data-subtotal>{{ subtotal_price }}</div>\n</div>",
			selector: ".cart__drawer-form .cart__item--subtotal"
		}
	},
	cart: {
		"cart-item": {
			item: ".cart__page .cart__item",
			type: "cart-item",
			html: "<div class=\"cart__item-price-col text-right\">\n  <span class=\"visually-hidden\">Regular price</span>\n  <small class=\"cart__price cart__price--strikethrough\">\n    <span aria-hidden=\"true\">{{ original_price }}</span>\n    <span class=\"visually-hidden\">{{ original_price }}</span>\n  </small>\n  <span class=\"visually-hidden\">Sale price</span>\n  <span class=\"cart__price cart__discount\">\n    <span aria-hidden=\"true\">{{ final_price }}</span>\n    <span class=\"visually-hidden\">{{ final_price }}</span>\n  </span>\n  <small class=\"cart__discount\">{{ code }} (-{{ total_discount }})</small>\n</div>",
			selector: ".cart__item-price-col"
		},
		cart: {
			type: "cart",
			html: "<div class=\"cart__item-sub cart__item-row cart__item--subtotal\">\n  <div>Subtotal</div>\n  <div data-subtotal>{{ subtotal_price }}</div>\n</div>",
			selector: ".cart__page .cart__item--subtotal"
		}
	}
};
var ExpanseSchema = {
	schema: schema$1
};

var schema$2 = {
	all: {
		"grid-product-price": {
			html: "<div class=\"grid-product__price\">\n  <span class=\"visually-hidden\">Sale price</span>\n  <span class=\"grid-product__price--current\">\n    <span aria-hidden=\"true\">{{ final_price }}</span>\n    <span class=\"visually-hidden\">{{ final_price }}</span>\n  </span>\n  <span class=\"visually-hidden\">Regular price</span>\n  <span class=\"grid-product__price--original\">\n    <span aria-hidden=\"true\">{{ original_price }}</span>\n    <span class=\"visually-hidden\">{{ original_price }}</span>\n  </span>\n  <span class=\"grid-product__price--savings\">Save {{ total_discount }}</span>\n</div>",
			type: "product",
			selector: ".grid-product__price"
		},
		"product-tags": {
			html: "<div class=\"grid-product__tags\"><div class=\"grid-product__tag grid-product__tag--sale\">Sale</div></div>",
			type: "product",
			selector: ".grid-product__tags"
		},
		"block-product-price": {
			html: "<div class=\"product-block product-block--price\">\n  <label class=\"variant__label\" for=\"ProductPrice-template--19162833584439__main\">\n    Price\n  </label>\n  <span data-a11y-price=\"\" class=\"visually-hidden\" aria-hidden=\"false\">Regular price</span>\n  <span data-product-price-wrap=\"\" class=\"\">\n    <span data-compare-price=\"\" class=\"product__price product__price--compare\">\n      <span aria-hidden=\"true\">{{ selected_variant.original_price }}</span>\n      <span class=\"visually-hidden\">{{ selected_variant.original_price }}</span>\n    </span>\n  </span>\n  <span data-compare-price-a11y=\"\" class=\"visually-hidden\">Sale price</span>\n  <span data-product-price=\"\" class=\"product__price on-sale\">\n    <span aria-hidden=\"true\">{{ selected_variant.final_price }}</span>\n    <span class=\"visually-hidden\">{{ selected_variant.final_price }}</span>\n  </span>\n  <span data-save-price=\"\" class=\"product__price-savings\">Save {{ selected_variant.total_discount }}</span>\n</div>",
			type: "product",
			selector: ".product-block--price"
		},
		"cart-drawer-item": {
			item: ".cart__drawer-form .cart__item",
			type: "cart-item",
			html: "<div class=\"cart__item-price-col text-right\">\n  <span class=\"visually-hidden\">Regular price</span>\n  <small class=\"cart__price cart__price--strikethrough\">\n    <span aria-hidden=\"true\">{{ original_price }}</span>\n    <span class=\"visually-hidden\">{{ original_price }}</span>\n  </small>\n  <span class=\"visually-hidden\">Sale price</span>\n  <span class=\"cart__price cart__discount\">\n    <span aria-hidden=\"true\">{{ final_price }}</span>\n    <span class=\"visually-hidden\">{{ final_price }}</span>\n  </span>\n  <small class=\"cart__discount\">{{ code }} (-{{ total_discount }})</small>\n</div>",
			selector: ".cart__item-price-col"
		},
		"cart-drawer": {
			type: "cart",
			html: "<div data-subtotal>{{ subtotal_price }}</div>",
			selector: ".cart__drawer-form [data-subtotal]"
		}
	},
	cart: {
		"cart-item": {
			item: "#CartPageForm .cart__item",
			type: "cart-item",
			html: "<div class=\"cart__item-price-col text-right\">        \n  <span class=\"visually-hidden\">Regular price</span>\n  <small class=\"cart__price cart__price--strikethrough\">\n    <span aria-hidden=\"true\">{{ original_price }}</span>\n    <span class=\"visually-hidden\">{{ original_price }}</span>\n  </small>\n  <span class=\"visually-hidden\">Sale price</span>\n  <span class=\"cart__price cart__discount\">\n    <span aria-hidden=\"true\">{{ final_price }}</span>\n    <span class=\"visually-hidden\">{{ final_price }}</span>\n  </span>\n  <small class=\"cart__discount\">{{ code }} (-{{ total_discount }})</small>\n</div>",
			selector: ".cart__item-price-col"
		},
		cart: {
			type: "cart",
			html: "<div data-subtotal>{{ subtotal_price }}</div>",
			selector: "#CartPageForm [data-subtotal]"
		}
	}
};
var FetchSchema = {
	schema: schema$2
};

var schema$3 = {
	all: {
		"grid-product-price": {
			html: "<div class=\"grid-product__price\">\n  <span class=\"visually-hidden\">Regular price</span>\n  <span class=\"grid-product__price--original\">{{ original_price }}</span>\n  <span class=\"visually-hidden\">Sale price</span>\n  {{ final_price }}\n  <span class=\"grid-product__price--savings\">Save {{ total_discount }}</span>\n</div>",
			type: "product",
			selector: ".grid-product__price"
		},
		"product-tags": {
			html: "<div class=\"grid-product__tag grid-product__tag--sale\">Sale</div>",
			type: "product",
			selector: ".grid-product__tag"
		},
		"block-product-price": {
			html: "<div class=\"product-block product-block--price\">\n  <span data-a11y-price class=\"visually-hidden\" aria-hidden=\"false\">Regular price</span>\n  <span data-product-price-wrap>\n    <span data-compare-price class=\"product__price product__price--compare\">{{ selected_variant.original_price }}</span>\n  </span>\n  <span data-compare-price-a11y class=\"visually-hidden\">Sale price</span>\n  <span data-product-price class=\"product__price on-sale\">{{ selected_variant.final_price }}</span>\n  <span data-save-price class=\"product__price-savings\">Save {{ selected_variant.total_discount }}</span>\n</div>",
			type: "product",
			selector: ".product-block--price"
		},
		"cart-drawer-item": {
			item: "#CartDrawer .cart__item",
			type: "cart-item",
			html: "<div class=\"cart__item-price-col text-right\">\n  <span class=\"visually-hidden\">Regular price</span>\n  <small class=\"cart__price cart__price--strikethrough\">\n    {{ original_price }}\n  </small>\n  <span class=\"visually-hidden\">Sale price</span>\n  <span class=\"cart__price cart__discount\">\n    {{ final_price }}\n  </span>\n  <small class=\"cart__discount\">{{ code }} (-{{ total_discount }})</small>\n</div>",
			selector: ".cart__item-price-col"
		},
		"cart-drawer": {
			type: "cart",
			html: "<div data-subtotal>{{ subtotal_price }}</div>",
			selector: "#CartDrawer [data-subtotal]"
		}
	},
	cart: {
		"cart-item": {
			item: "#CartPageForm .cart__item",
			type: "cart-item",
			html: "<div class=\"cart__item-price-col text-right\">\n  <span class=\"visually-hidden\">Regular price</span>\n  <small class=\"cart__price cart__price--strikethrough\">\n    {{ original_price }}\n  </small>\n  <span class=\"visually-hidden\">Sale price</span>\n  <span class=\"cart__price cart__discount\">\n    {{ final_price }}\n  </span>\n  <small class=\"cart__discount\">{{ code }} (-{{ total_discount }})</small>\n</div>",
			selector: ".cart__item-price-col"
		},
		cart: {
			type: "cart",
			html: "<div data-subtotal>{{ subtotal_price }}</div>",
			selector: "#CartPageForm [data-subtotal]"
		}
	}
};
var ImpulseSchema = {
	schema: schema$3
};

var schema$4 = {
	all: {
		"grid-product-price": {
			html: "<div class=\"grid-product__price\">\n  <span class=\"visually-hidden\">Regular price</span>\n  <span class=\"grid-product__price--original\">{{ original_price }}</span>\n  <span class=\"visually-hidden\">Sale price</span>\n  <span class=\"sale-price\">{{ final_price }}</span>\n  </div>",
			type: "product",
			selector: ".grid-product__price"
		},
		"product-tags": {
			html: "<div class=\"grid-product__tag grid-product__tag--sale\">Save {{ total_discount }}</div>",
			type: "product",
			selector: ".grid-product__tag"
		},
		"block-product-price": {
			html: "<div class=\"product-block product-block--price\">\n  <span data-a11y-price class=\"visually-hidden\" aria-hidden=\"false\">Regular price</span>\n  <span data-product-price-wrap>\n    <span data-compare-price class=\"product__price product__price--compare\">{{ selected_variant.original_price }}</span>\n  </span>\n  <span data-compare-price-a11y class=\"visually-hidden\">Sale price</span>\n  <span data-product-price class=\"product__price sale-price\">{{ selected_variant.final_price }}</span>\n</div>",
			type: "product",
			selector: ".product-block--price"
		},
		"cart-drawer-item": {
			item: "#CartDrawer .cart__item",
			type: "cart-item",
			html: "<div class=\"cart__item--price cart__item-price-col text-right\">\n  <span class=\"visually-hidden\">Regular price</span>\n  <small class=\"cart__price cart__price--strikethrough\">{{ original_price }}</small>\n  <span class=\"visually-hidden\">Sale price</span>\n  <span class=\"cart__price cart__discount\">{{ final_price }}</span>\n  <small class=\"cart__discount\">{{ code }} (-{{ total_discount }})</small>\n</div>",
			selector: ".cart__item-price-col"
		},
		"cart-drawer-savings": {
			type: "cart",
			html: "<div class=\"cart__item-row cart__savings text-center\">You're saving {{ total_discount }}</div>",
			selector: "#CartDrawer .cart__savings"
		},
		"cart-drawer": {
			type: "cart",
			html: "<div class=\"cart__item-sub cart__item-row\">\n  <div class=\"cart__subtotal\">Subtotal</div>\n  <div data-subtotal=\"\">{{ subtotal_price }}</div>\n</div>",
			selector: "#CartDrawer .cart__item-sub"
		}
	},
	cart: {
		"cart-item": {
			item: "#CartPageForm .cart__item",
			type: "cart-item",
			html: "<div class=\"cart__item--price cart__item-price-col text-right\">\n  <span class=\"visually-hidden\">Regular price</span>\n  <small class=\"cart__price cart__price--strikethrough\">{{ original_price }}</small>\n  <span class=\"visually-hidden\">Sale price</span>\n  <span class=\"cart__price cart__discount\">{{ final_price }}</span>\n  <small class=\"cart__discount\">{{ code }} (-{{ total_discount }})</small>\n</div>",
			selector: ".cart__item-price-col"
		},
		"cart-savings": {
			type: "cart",
			html: "<div class=\"cart__item-row cart__savings text-center\">You're saving {{ total_discount }}</div>",
			selector: "#CartPageForm .cart__savings"
		},
		cart: {
			type: "cart",
			html: "<div class=\"cart__item-sub cart__item-row\">\n  <div class=\"cart__subtotal\">Subtotal</div>\n  <div data-subtotal=\"\">{{ subtotal_price }}</div>\n</div>",
			selector: "#CartPageForm .cart__item-sub"
		}
	}
};
var MotionSchema = {
	schema: schema$4
};

var schema$5 = {
	all: {
		"grid-product-price": {
			html: "<div class=\"grid-product__price\">\n  <span class=\"visually-hidden\">Regular price</span>\n  <del class=\"grid-product__price--original\">{{ original_price }}</del>\n  <span class=\"visually-hidden\">Sale price</span>\n  <span class=\"sale-price\">{{ final_price }}</span>\n</div>",
			type: "product",
			selector: ".grid-product__price"
		},
		"product-tags": {
			html: "<div class=\"grid-product__tag grid-product__tag--sale\">Sale</div>",
			type: "product",
			selector: ".grid-product__tag"
		},
		"block-product-price": {
			html: "<div class=\"product-block product-block--price small--text-center\">\n  <div class=\"product-single__prices\">\n    <span class=\"visually-hidden\" aria-hidden=\"false\" data-price-a11y=\"\">\n      Regular price\n    </span>\n    <span class=\"\" data-price-wrapper=\"\">\n      <span class=\"product__price product__price--compare\" data-product-price-compare=\"\">{{ selected_variant.original_price }}</span>\n    </span>\n    <span class=\"visually-hidden\" data-compare-a11y=\"\">Sale price</span>\n    <span class=\"product__price sale-price\" data-product-price=\"\">{{ selected_variant.final_price }}</span>\n  </div>\n</div>",
			type: "product",
			selector: ".product-block--price"
		},
		"cart-drawer-item": {
			item: "#CartDrawer .cart__item",
			type: "cart-item",
			html: "<div class=\"cart__item--price cart__item-price-col text-right\">\n  <span class=\"visually-hidden\">Regular price</span>\n  <small class=\"cart__price cart__price--strikethrough\">{{ original_price }}</small>\n  <span class=\"visually-hidden\">Sale price</span>\n  <span class=\"cart__price cart__discount\">{{ final_price }}</span>\n  <small class=\"cart__discount\">{{ code }} (-{{ total_discount }})</small>\n</div>",
			selector: ".cart__item-price-col"
		},
		"cart-drawer": {
			type: "cart",
			html: "<div data-subtotal>{{ subtotal_price }}</div>",
			selector: "#CartDrawer [data-subtotal]"
		},
		"cart-sticky-subtotal": {
			type: "cart",
			html: "<span id=\"StickySubtotal\" class=\"sticky-cart__item\">{{ subtotal_price }}</span>",
			selector: "#StickySubtotal"
		}
	},
	cart: {
		"cart-item": {
			item: "#CartPageForm .cart__item",
			type: "cart-item",
			html: "<div class=\"cart__item--price cart__item-price-col text-right\">\n  <span class=\"visually-hidden\">Regular price</span>\n  <small class=\"cart__price cart__price--strikethrough\">{{ original_price }}</small>\n  <span class=\"visually-hidden\">Sale price</span>\n  <span class=\"cart__price cart__discount\">{{ final_price }}</span>\n  <small class=\"cart__discount\">{{ code }} (-{{ total_discount }})</small>\n</div>",
			selector: ".cart__item-price-col"
		},
		cart: {
			type: "cart",
			html: "<span data-subtotal>{{ subtotal_price }}</span>",
			selector: "#CartPageForm [data-subtotal]"
		}
	}
};
var StreamlineSchema = {
	schema: schema$5
};

function getSchemaByThemeStoreId(id) {
  switch (id.toString()) {
    case '847':
      {
        return MotionSchema;
      }
    case '857':
      {
        return ImpulseSchema;
      }
    case '872':
      {
        return StreamlineSchema;
      }
    case '887':
      {
        return DawnSchema;
      }
    case '902':
      {
        return ExpanseSchema;
      }
    case '1949':
      {
        return FetchSchema;
      }
    default:
      return undefined;
  }
}

export { DawnSchema, ExpanseSchema, FetchSchema, ImpulseSchema, MotionSchema, StreamlineSchema, getSchemaByThemeStoreId };
//# sourceMappingURL=abra-schemas.esm.js.map
