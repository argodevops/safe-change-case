// eslint-disable-next-line import/extensions
import { CaseType, safeChangeCase } from './index.js';

describe('safeChangeCase', () => {
    test('returns empty string for undefined input', () => {
        expect(safeChangeCase(undefined, CaseType.CAMEL)).toBe('');
    });

    test('returns empty string for null input', () => {
        expect(safeChangeCase(null, CaseType.CAMEL)).toBe('');
    });

    test('handles arrays by concatenating elements and converting case', () => {
        expect(safeChangeCase(['hello', 'world'], CaseType.KEBAB)).toBe(
            'hello-world'
        );
        expect(safeChangeCase(['hello', 'world'], CaseType.CAMEL)).toBe(
            'helloWorld'
        );
    });

    test('handles objects by converting to JSON and changing case', () => {
        expect(safeChangeCase({ key: 'value' }, CaseType.SNAKE)).toBe(
            'key_value'
        );
        expect(
            safeChangeCase({ nested: { key: 'value' } }, CaseType.PASCAL)
        ).toBe('NestedKeyValue');
    });

    test('applies sentenceCase to strings', () => {
        expect(safeChangeCase('HELLO WORLD', CaseType.SENTENCE)).toBe(
            'Hello world'
        );
    });

    test('throws an error for invalid input types (e.g., number)', () => {
        expect(() => safeChangeCase(123, CaseType.CAMEL)).toThrow(
            'Input must be a string, an array, or an object.'
        );
    });

    test('throws an error for invalid case types', () => {
        expect(() => safeChangeCase('hello world', 'invalidCase')).toThrow(
            'Invalid case type: invalidCase'
        );
    });

    test('handles strings with various cases', () => {
        expect(safeChangeCase('hello world', CaseType.CAMEL)).toBe(
            'helloWorld'
        );
        expect(safeChangeCase('hello world', CaseType.SNAKE)).toBe(
            'hello_world'
        );
        expect(safeChangeCase('hello world', CaseType.KEBAB)).toBe(
            'hello-world'
        );
        expect(safeChangeCase('hello world', CaseType.PASCAL)).toBe(
            'HelloWorld'
        );
        expect(safeChangeCase('hello world', CaseType.CAPITAL)).toBe(
            'Hello World'
        );
        expect(safeChangeCase('hello world', CaseType.SENTENCE)).toBe(
            'Hello world'
        );
    });
});
