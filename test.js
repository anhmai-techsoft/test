function getRandomBoolean() {
    return Math.random() < 0.5; // Generates true roughly half of the time
}

// Generate two random boolean values
const randomValue1 = getRandomBoolean();
const randomValue2 = getRandomBoolean();

console.log(randomValue1, randomValue2);
