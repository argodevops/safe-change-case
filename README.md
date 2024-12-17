# safe-change-case

> Safely transforms semi-structured text in the form of Objects, Arrays or Strings into presentable text using different cases.

Built on top of [change-case](https://github.com/blakeembrey/change-case) it will transform text to `camelCase`, `snake_case`, `kebab-case`, `PascalCase`, `Capital Case`, and `Sentence case`.

It will accept `undefined` and `null` values and return an empty string for safety.

## Installation

`npm install safe-change-case --save`

## Usage

```
import { safeChangeCase, CaseType } from 'safe-change-case';

// Strings
console.log(camelCase('hello world'));    // 'helloWorld'
console.log(snakeCase('hello world'));    // 'hello_world'
console.log(kebabCase('hello world'));    // 'hello-world'
console.log(pascalCase('hello world'));   // 'HelloWorld'
console.log(capitalCase('hello world'));  // 'Hello World'
console.log(sentenceCase('hello world')); // 'Hello world'

// Arrays
console.log(camelCase(['hello', 'world']));    // 'helloWorld'
console.log(snakeCase(['hello', 'world']));    // 'hello_world'

// Objects
console.log(kebabCase({ hello: 'world' }));    // 'hello-world'

// Null and undefined
console.log(camelCase(null));           // ''
console.log(snakeCase(undefined));      // ''

// safeChangeCase function
console.log(safeChangeCase('hello world', CaseType.CAMEL));           // 'helloWorld'
console.log(safeChangeCase('hello world', CaseType.SNAKE));           // 'hello_world'
console.log(safeChangeCase('hello world', CaseType.KEBAB));           // 'hello-world'
console.log(safeChangeCase('hello world', CaseType.PASCAL));          // 'HelloWorld'
console.log(safeChangeCase('hello world', CaseType.CAPITAL));         // 'Hello World'
console.log(safeChangeCase([ 'hello', 'world' ], CaseType.SENTENCE)); // 'Hello world'
console.log(safeChangeCase({ hello: 'world' }, CaseType.SNAKE));      // 'hello_world'
console.log(safeChangeCase(null, CaseType.CAMEL));                    // ''
```

## Related

- [Change Case](https://github.com/blakeembrey/change-case)

## License

Apache 2.0

