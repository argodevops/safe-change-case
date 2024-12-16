# safe-change-case

> Safely transforms Objects, Arrays or strings between different cases.

Built on top of [change-case](https://github.com/blakeembrey/change-case) it will transform between `camelCase`, `PascalCase`, `Capital Case`, `snake_case`, `kebab-case`, and `Sentence case` others.

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
