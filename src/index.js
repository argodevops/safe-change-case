import {
    camelCase as camelCaseFn,
    capitalCase as capitalCaseFn,
    kebabCase as kebabCaseFn,
    pascalCase as pascalCaseFn,
    sentenceCase as sentenceCaseFn,
    snakeCase as snakeCaseFn
} from 'change-case';

// Define the CaseType enum
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
 * @param {string|Array|Object|null} input - The input string, array, or object to transform.
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
    } else if (typeof input === 'object') {
        inputValue = JSON.stringify(input);
    }

    if (typeof inputValue !== 'string') {
        throw new Error('Input must be a string, an array, or an object.');
    }

    const caseFnMap = {
        [CaseType.CAMEL]: camelCaseFn,
        [CaseType.SNAKE]: snakeCaseFn,
        [CaseType.KEBAB]: kebabCaseFn,
        [CaseType.PASCAL]: pascalCaseFn,
        [CaseType.CAPITAL]: capitalCaseFn,
        [CaseType.SENTENCE]: sentenceCaseFn
    };

    const caseFn = caseFnMap[caseType];
    if (!caseFn) {
        throw new Error(`Invalid case type: ${caseType}`);
    }
    return caseFn(inputValue, options);
}

/**
 * Standalone functions for each case transformation.
 * These call the safeChangeCase function internally.
 */
const camelCase = (input, options) =>
    safeChangeCase(input, CaseType.CAMEL, options);
const snakeCase = (input, options) =>
    safeChangeCase(input, CaseType.SNAKE, options);
const kebabCase = (input, options) =>
    safeChangeCase(input, CaseType.KEBAB, options);
const pascalCase = (input, options) =>
    safeChangeCase(input, CaseType.PASCAL, options);
const capitalCase = (input, options) =>
    safeChangeCase(input, CaseType.CAPITAL, options);
const sentenceCase = (input, options) =>
    safeChangeCase(input, CaseType.SENTENCE, options);

// Export all the functions
export {
    safeChangeCase,
    camelCase,
    snakeCase,
    kebabCase,
    pascalCase,
    capitalCase,
    sentenceCase,
    CaseType
};
