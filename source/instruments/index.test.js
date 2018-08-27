//Core
import {sum, delay, getUniqueID, getFullApiUrl} from './';

describe('instruments:', () => {
    //sum
    test('sum should be a function', () => {
        expect(sum).toBeInstanceOf(Function);
    });

    test('sum function should throw, when called with non-number as second argument', () => {
        expect(() => sum(2,'hello')).toThrow();
    });

    test('sum function should throw, when called with non-number as first argument', () => {
        expect(() => sum('hello',2)).toThrow();
    });

    test('sum function should return an addition of two arguments passed, when called with non-number as first argument', () => {
        expect(sum(3,2)).toBe(5);
        expect(sum(5,6)).toBe(11);
    });

    //delay
    test('delay function should return a resolved promise', async() => {
       await expect(delay()).resolves.toBeUndefined();
    });

    //getUniqueID
    test('getUniqueID should be a function', () => {
        expect(getUniqueID).toBeInstanceOf(Function);
    });

    test('getUniqueID function should throw, when called with non-number as an argument', () => {
        expect(() => getUniqueID('hello')).toThrow();
    });

    test('getUniqueID function should produce a string of a desired given length', () => {
        expect(typeof getUniqueID()).toBe('string');
        expect(getUniqueID(5)).toHaveLength(5);
        expect(getUniqueID(9)).toHaveLength(9);
    });

    //getFullApiUrl
    test('getFullApiUrl should be a function', () => {
        expect(getFullApiUrl).toBeInstanceOf(Function);
    });

    test('getFullApiUrl function should throw, when called with non-string as first argument', () => {
        expect(() => getFullApiUrl(325,'GD34dr2H')).toThrow();
    });

    test('getFullApiUrl function should throw, when called with non-string as second argument', () => {
        expect(() => getFullApiUrl('https://name.com',547)).toThrow();
    });

    test('getFullApiUrl function should concatenate two arguments', () => {
        expect(getFullApiUrl('https://name.com','path')).toHaveLength('https://name.com/path');
        expect(getFullApiUrl('https://test.com','path1')).toHaveLength('https://test.com','path1');
    });
});
