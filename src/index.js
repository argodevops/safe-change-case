import {
    camelCase,
    capitalCase,
    kebabCase,
    pascalCase,
    sentenceCase,
    snakeCase
} from 'change-case';

const CaseType = Object.freeze({
    CAMEL: 'camelCase',
    SNAKE: 'snakeCase',
    KEBAB: 'kebabCase',
    PASCAL: 'pascalCase',
    CAPITAL: 'capitalCase',
    SENTENCE: 'sentenceCase'
});

/**
 * Wrapper function to safely transform strings using change-case.
 *
 * @param {string|Array|Object} input - The input string, array, or object to transform.
 * @param {string} caseType - The case type to apply, using the CaseType enum.
 * @param {Object} [options] - Optional additional options for case transformation.
 * @returns {string} - Transformed string or concatenated array/object as a string.
 */
function safeChangeCase(input, caseType, options) {
    if (input == null) {
        return '';
    }

    let inputValue = input;

    if (Array.isArray(input)) {
        inputValue = input.join(' ');
    }

    if (typeof input === 'object') {
        inputValue = JSON.stringify(input);
    }

    if (typeof inputValue !== 'string') {
        throw new Error('Input must be a string, an array, or an object.');
    }

    if (caseType === CaseType.CAMEL) {
        return camelCase(inputValue, options);
    }
    if (caseType === CaseType.SNAKE) {
        return snakeCase(inputValue, options);
    }
    if (caseType === CaseType.KEBAB) {
        return kebabCase(inputValue, options);
    }
    if (caseType === CaseType.PASCAL) {
        return pascalCase(inputValue, options);
    }
    if (caseType === CaseType.CAPITAL) {
        return capitalCase(inputValue, options);
    }
    if (caseType === CaseType.SENTENCE) {
        return sentenceCase(inputValue, options);
    }
    throw new Error(`Invalid case type: ${caseType}`);
}

export { safeChangeCase, CaseType };
