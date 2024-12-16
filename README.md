# safe-change-case

> Safely transforms Objects, Arrays or strings between different cases.

Built on top of [change-case](https://github.com/blakeembrey/change-case) it will transform text between `camelCase`, `snake_case`, `kebab-case`, `PascalCase`, `Capital Case`, and `Sentence case`.

It will accept `undefined` and `null` values and return an empty string for safety.

## Installation

`npm install safe-change-case --save`

## Usage

```
import { safeChangeCase, CaseType } from 'safe-change-case';

console.log(safeChangeCase('hello world', CaseType.CAMEL));    // 'helloWorld'
console.log(safeChangeCase('hello world', CaseType.SNAKE));    // 'hello_world'
console.log(safeChangeCase('hello world', CaseType.KEBAB));    // 'hello-world'
console.log(safeChangeCase('hello world', CaseType.PASCAL));   // 'HelloWorld'
console.log(safeChangeCase('hello world', CaseType.CAPITAL));  // 'Hello World'
console.log(safeChangeCase('hello world', CaseType.SENTENCE)); // 'Hello world'
```

## Related

- [Change Case](https://github.com/blakeembrey/change-case)

## License

Apache 2.0

