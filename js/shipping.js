let ShippingAddress = function(){
    return {
        name: null,
        country: null,
        state: null,
        city: null,
        street: null,
        postalCode: null,
        isValid: function(){
            let self = this;
            if(!!self.name && !!self.country && !!self.state && !!self.city && !!self.street && !!self.postalCode){
                return true;
            }
            return false;
        }
    }
}

