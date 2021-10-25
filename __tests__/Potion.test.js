const { test, expect } = require('@jest/globals');
const Potion = require('../lib/Potion.js');

test('creates a random potion obj', () => {
    const potion = new Potion();

    expect(potion.name).toEqual(expect.any(String));
    expect(potion.name.length).toBeGreaterThan(0);
    expect(potion.value).toEqual(expect.any(Number));
});