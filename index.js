// Possible  names and occupations


function calculateAveragePrice() {
    const totalPrices = freelancers.reduce((acc, freelancer) => acc + freelancer.price, 0);
    const averagePrice = totalPrices / freelancers.length;
    return averagePrice.toFixed(2);
}