module.exports = function main(miles, minutes) {
    let sum = minutes * 0.25;
    sum = (miles <= 8) ? sum + miles * 0.8 : sum + 8 * 0.8 + (miles - 8) * 0.8 * (1 + 0.5);
    return Math.round(sum);
};