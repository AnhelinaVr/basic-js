const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity !== 'string') return false;
    sampleActivity = parseFloat(sampleActivity);
    if (sampleActivity > 15 || sampleActivity <= 0 || !isFinite(sampleActivity)) return false;
    var k = 0.693 / HALF_LIFE_PERIOD;
    var age = Math.log(MODERN_ACTIVITY / sampleActivity) / k;
    return Math.ceil(age);
};