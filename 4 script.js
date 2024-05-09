class UberPriceCalculator {
    constructor(baseFare, costPerMinute, costPerMile) {
        this.baseFare = baseFare;
        this.costPerMinute = costPerMinute;
        this.costPerMile = costPerMile;
    }

    calculatePrice(distanceInMiles, durationInMinutes) {
        const fare = this.baseFare + (durationInMinutes * this.costPerMinute) + (distanceInMiles * this.costPerMile);
        return fare;
    }
}

const uberXCalculator = new UberPriceCalculator(2.5, 0.3, 1.1); // Example values for UberX
const distance = 10; // Distance in miles
const duration = 20; // Duration in minutes

const totalPrice = uberXCalculator.calculatePrice(distance, duration);
console.log("Total price for the ride:", totalPrice);
