describe("Cart", function() {
    "use strict";

    var fakeCart, firsItem, server;

    beforeEach(function() {
        HB.SITE_URL = '//test';

        server = sinon.fakeServer.create();
        server.autoRespond = true;
        server.respondWith('POST', HB.SITE_URL, [
            200, {
                "Content-Type": "application/json"
            },
            JSON.stringify({
                isValid: true,
                success: true
            })
        ]);

        var cartItem = new HB.CartItemBuilder().build();
        var cartData = new HB.CartBuilder().itemList(cartItem).build();
        fakeCart = new HB.Cart(cartData);
        firsItem = fakeCart.itemList()[0];
    });

    afterEach(function() {
        server.restore();
    });

    describe("when cart doesn't have any products", function() {
        it("should show empty cart template", function() {
            var cartData = new HB.CartBuilder().build();
            fakeCart = new HB.Cart(cartData);

            expect(fakeCart.isCartEmpty()).toBeTruthy();
        });
    });

    describe("when cart has a product", function() {
        it("should show item list", function() {
            expect(fakeCart.isCartEmpty()).toBeFalsy();
        });
    });

    describe("when cart doesn't have any customized products", function() {
        it("should know it doesn't have any customized products", function() {
            expect(fakeCart.hasCustomizedItem()).toBeFalsy();
        });

        it("shouldn't set customize message", function() {
            expect(fakeCart.setCustomizeMessages()).toBeFalsy();
        });

        it("should continue without setting any customized product message", function() {
            expect(fakeCart.continueCheckout()).toBeTruthy();
        });
    });

    describe("when cart has customized products", function() {
        beforeEach(function() {
            var cartItem = new HB.CartItemBuilder().isCustomizedProduct(true).build();
            var cartData = new HB.CartBuilder().itemList(cartItem).build();
            fakeCart = new HB.Cart(cartData);
        });

        it("should set customize product messages", function() {
            var customizedItem = fakeCart.setCustomizeMessages()[0];

            expect(fakeCart.setCustomizeMessages().length).toBe(1);
            expect(customizedItem.cartItemId).toBe(19925855);
            expect(customizedItem.customizedProductValue).toBe(null);
        });

        it("shouldn't continue before setting customize product messages", function() {
            fakeCart.customizedProductForm = function() {
                return $('<form>')
                    .attr({
                        method: 'POST',
                        id: 'form-item-list'
                    });
            };

            expect(fakeCart.continueCheckout()).toBeFalsy();
        });
    });

    describe("when cart has gift box", function() {
        beforeEach(function() {
            fakeCart.isGiftBoxSelected(true);
        });

        describe("when gift box selection wasn't restricted", function() {
            it("should set a gift box selection", function() {
                expect(fakeCart.proceed().isGiftBoxSelected).toBeTruthy();
            });
        });

        describe("when gift box selection was restricted", function() {
            it("shouldn't set a gift box selection", function() {
                fakeCart.isGiftBoxOptionRestricted(true);
                expect(fakeCart.proceed().isGiftBoxSelected).toBeFalsy();
            });
        });
    });

    describe("when cart doesn't have gift box", function() {
        it("shouldn't set a gift box selection", function() {
            expect(fakeCart.proceed().isGiftBoxSelected).toBeFalsy();
        });
    });

    describe("when item's merchant is different than hepsiburada", function() {
        it("should show the merchant name", function() {
            expect(firsItem.merchantName()).toBe("Satıcı: UploadEANS");
        });
    });

    describe("when item's merchant is hepsiburada", function() {
        beforeEach(function() {
            var cartItem = new HB.CartItemBuilder().merchantName('').build();
            var cartData = new HB.CartBuilder().itemList(cartItem).build();
            fakeCart = new HB.Cart(cartData);
            firsItem = fakeCart.itemList()[0];
        });

        it("shouldn't show the merchant name", function() {
            expect(firsItem.merchantName()).toBe("");
        });
    });

    describe("Cart item actions", function() {
        var firstItem;

        beforeEach(function() {
            firstItem = fakeCart.itemList()[0];

            spyOn(fakeCart, 'update');
        });

        describe("when item quantity is fixed", function() {
            it("shouldn't change item quantity", function() {
                firstItem.quantityFixed(true);
                expect(fakeCart.update).not.toHaveBeenCalled();
            });
        });

        describe("when item is removed", function() {
            beforeEach(function() {
                spyOn(window, 'confirm').and.returnValue(true);
            });

            it("should pass correct request data", function() {
                var fakeRemove = fakeCart.remove(firstItem);

                expect(fakeRemove.cartItemId).toBe(19925855);
                expect(fakeRemove.cartId).toBe(15136025);
            });
        });

        describe("when item price is zero", function() {
            it("should show as 'Bedava' in price label", function() {
                var cartItem = new HB.CartItemBuilder().price("0,00").build();
                var cartData = new HB.CartBuilder().itemList(cartItem).build();
                fakeCart = new HB.Cart(cartData);

                expect(fakeCart.itemList()[0].price()).toBe("Bedava");
            });
        });

        describe("when item hasn't a variant", function() {
            it("should show item name only", function() {
                expect(firstItem.productName()).toBe("Blue House BH008 Çekgeç Teleskopik Borulu 1600watt Dik Elektrikli Süpürge Kırmızı");
            });
        });

        describe("when item has a variant", function() {
            it("should add the variant to the name", function() {
                var cartItem = new HB.CartItemBuilder().variantOption("Kırmızı").build();
                var cartData = new HB.CartBuilder().itemList(cartItem).build();
                fakeCart = new HB.Cart(cartData);

                expect(fakeCart.itemList()[0].productName()).toBe("Blue House BH008 Çekgeç Teleskopik Borulu 1600watt Dik Elektrikli Süpürge Kırmızı (Kırmızı)");
            });
        });

        describe("when item isn't partner product", function() {
            it("should use product URL", function() {
                expect(firstItem.itemUrl()).toBe("http://www.hepsiburada.com/m/blue-house-bh008-cekgec-teleskopik-borulu-1600watt-dik-elektrikli-supurge-kirmizi-p-EVBLUEBH008K");
            });
        });

        describe("when item hasn't an URL", function() {
            it("should use # as URL", function() {
                var cartItem = new HB.CartItemBuilder().productPageUrl(null).build();
                var cartData = new HB.CartBuilder().itemList(cartItem).build();
                fakeCart = new HB.Cart(cartData);

                expect(fakeCart.itemList()[0].itemUrl()).toBe("#");
            });
        });

        describe("when item is partner product", function() {
            it("should use partner product URL", function() {
                var cartItem = new HB.CartItemBuilder().previewUrl("http://lorem").build();
                var cartData = new HB.CartBuilder().itemList(cartItem).build();
                fakeCart = new HB.Cart(cartData);

                expect(fakeCart.itemList()[0].itemUrl()).toBe("http://lorem");
            });
        });

        describe('when item has discount warning', function() {
            it('should show the message', function() {
                var cartItem = new HB.CartItemBuilder().isDiscountWarningVisible(true).remainingDaysForDiscount(10).build();
                var cartData = new HB.CartBuilder().itemList(cartItem).build();
                fakeCart = new HB.Cart(cartData);

                expect(fakeCart.itemList()[0].campaigns().indexOf("İndirimin bitmesine 10 gün kaldı")).not.toBe(-1);
            });
        });
    });
});
