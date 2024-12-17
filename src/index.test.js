import {
    camelCase,
    capitalCase,
    CaseType,
    kebabCase,
    pascalCase,
    safeChangeCase,
    sentenceCase,
    snakeCase
    // eslint-disable-next-line import/extensions
} from './index.js';

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
        expect(safeChangeCase({ hello: 'world' }, CaseType.SNAKE)).toBe(
            'hello_world'
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

describe('Standalone case functions', () => {
    test('camelCase function converts input correctly', () => {
        expect(camelCase('hello world')).toBe('helloWorld');
        expect(camelCase(['hello', 'world'])).toBe('helloWorld');
        expect(camelCase({ hello: 'world' })).toBe('helloWorld');
    });

    test('snakeCase function converts input correctly', () => {
        expect(snakeCase('hello world')).toBe('hello_world');
        expect(snakeCase(['hello', 'world'])).toBe('hello_world');
        expect(snakeCase({ hello: 'world' })).toBe('hello_world');
    });

    test('kebabCase function converts input correctly', () => {
        expect(kebabCase('hello world')).toBe('hello-world');
        expect(kebabCase(['hello', 'world'])).toBe('hello-world');
        expect(kebabCase({ hello: 'world' })).toBe('hello-world');
    });

    test('pascalCase function converts input correctly', () => {
        expect(pascalCase('hello world')).toBe('HelloWorld');
        expect(pascalCase(['hello', 'world'])).toBe('HelloWorld');
        expect(pascalCase({ hello: 'world' })).toBe('HelloWorld');
    });

    test('capitalCase function converts input correctly', () => {
        expect(capitalCase('hello world')).toBe('Hello World');
        expect(capitalCase(['hello', 'world'])).toBe('Hello World');
        expect(capitalCase({ hello: 'world' })).toBe('Hello World');
    });

    test('sentenceCase function converts input correctly', () => {
        expect(sentenceCase('HELLO WORLD')).toBe('Hello world');
        expect(sentenceCase(['HELLO', 'WORLD'])).toBe('Hello world');
        expect(sentenceCase({ HELLO: 'WORLD' })).toBe('Hello world');
    });

    test('Standalone functions handle null and undefined input', () => {
        expect(camelCase(null)).toBe('');
        expect(snakeCase(undefined)).toBe('');
        expect(kebabCase(null)).toBe('');
        expect(pascalCase(undefined)).toBe('');
        expect(capitalCase(null)).toBe('');
        expect(sentenceCase(undefined)).toBe('');
    });
});
