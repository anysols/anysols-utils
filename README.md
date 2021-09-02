# P4RM's Utils

Common utility functions used across P4RM projects.

[![Version](https://img.shields.io/npm/v/@p4rm/utils)](https://img.shields.io/npm/v/@p4rm/utils)
[![Build](https://github.com/p4rm/utils/workflows/Node%20Build%20CI/badge.svg)](https://github.com/p4rm/utils/actions?workflow=Node+CI)
[![Coverage Status](https://coveralls.io/repos/github/p4rm/utils/badge.svg?branch=master)](https://coveralls.io/github/p4rm/utils?branch=master)

## File Utils

```js
const obj = FileUtils.readJsonFileSync("../test/resources/sample.json");
console.log(JSON.stringify(obj, null, 4)); // prints content of sample.json
```

## String Utils

```js
const {DSUtils} = require('@p4rm/utils');
const temp = DSUtils.underscoreToCamelCase('hello_world');
console.log(temp); // prints 'Hello World'
```

## Code of Conduct

[Contributor Covenant](/CODE_OF_CONDUCT.md)

## License

[Apache License 2.0](LICENSE)
