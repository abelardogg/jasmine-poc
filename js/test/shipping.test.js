describe("VALID shipping address tests", function() {

    const myShippingAddress = new ShippingAddress();

    myShippingAddress.name = 'abe';
    myShippingAddress.country = 'Mexico';
    myShippingAddress.state = 'Chihuahua';
    myShippingAddress.city = 'Chihuahua';
    myShippingAddress.street = 'De la Juventud';
    myShippingAddress.postalCode = '31000';

    it("Data is valid", function() {
        expect(myShippingAddress.isValid()).toBe(true);
    });

});

describe("NOT valid shipping address tests", function() {

    const voidShippingAddress = new ShippingAddress();

    it("Data is NOT valid", function() {
        expect(voidShippingAddress.isValid()).not.toBe(true);
      });

  });