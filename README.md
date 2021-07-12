# oData Filter
This library makes it easy to filter data queries in the remaining API

[![npm version](https://badge.fury.io/js/odata-filter.svg)](https://badge.fury.io/js/odata-filter)
[![GitHub issues](https://img.shields.io/github/issues/joaovitmac/odata-filter.svg)](https://github.com/joaovitmac/odata-filter/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/joaovitmac/odata-filter/main/LICENSE)

[![GitHub stars](https://img.shields.io/github/stars/joaovitmac/odata-filter.svg?style=social&label=Stars)](https://github.com/joaovitmac/odata-filter)
[![GitHub forks](https://img.shields.io/github/forks/joaovitmac/odata-filter.svg?style=social&label=Forks)](https://github.com/joaovitmac/odata-filter)

## Installation

```shell
npm install odata-filter
```

## Usage

Compile a JSON-AST code that can be used later by a transformer:

```javascript
const { Compile: QueryFilterCompile, MySqlTransformer } = require("odata-filter");

const code = `(user.username == "Ana") or (username == "Mari")`;

QueryFilterCompile(code).then(ast => {
    console.log(ast); // { type: "...", ... }
}).catch(error => {
    console.error(error);
});
```

Compile a mysql where clause from a string using a transformer:

```javascript
const { Compile: QueryFilterCompile, MySqlTransformer } = require("odata-filter");

const code = `(user.username == "Ana") or (username == "Ana")`;

QueryFilterCompile(code, {
    transformer: new MySqlTransformer()
}).then(query => {
    console.log(query); // (`user`.`username` == 'Ana') OR (`username` == 'Ana')
}).catch(error => {
    console.error(error);
});
```

Exemplo prático usando um servidor express
```javascript
const { Compile: QueryFilterCompile, MySqlTransformer } = require("odata-filter");
const express = require('express');
const app = express();

// respond with compiled mysql query
app.get('/', function (req, res) {
    QueryFilterCompile(req.query.filter, {
        transformer: new MySqlTransformer()
    }).then(query => {
        res.send(query);
    }).catch(error => {
        res.status(400).send(error);
    });
});
```

## Supported Functions
```typescript
Compile(code, {
  cache?: boolean,
  transformer?: ITransformer
}): Promise<any>;
```

## Available Embeded Transformers
```typescript
MySqlTransformer({}): string;

TypeOrmTransformer({}): string; // inDev
```

## Supported Operators

Name | Operator | Alias
------------ | ------------- | -------------
Equals | ==
Not Equals | !=
Less than or equal | <=
Greater Than or Equal | >=
Less Than | <
Greater Than | >
Logical And | && | and
Logical Or | \|\| | or
Contains | *=
Contains Word | ~=
Starts With | ^=
Ends With | =$
Arithmetic Add | +
Arithmetic Subtraction | -
Arithmetic Multiplication | *
Arithmetic Division | /

## Supported Inline Functions
Name | Arguments
------------ | -------------
ROUND | Number \| Identifier
CEIL | Number \| Identifier
FLOOR | Number \| Identifier
LOWER | String \| Identifier
UPPER | String \| Identifier
TRIM | String \| Identifier
CONTAINS | String \| Identifier, String \| Identifier \| Number
STARTS_WITH | String \| Identifier, String \| Identifier \| Number
ENDS_WITH | String \| Identifier, String \| Identifier \| Number
CONCAT | String \| Identifier \| Number, ...
MONTH | String \| Identifier
HOUR | String \| Identifier
MINUTE | String \| Identifier
SECOND | String \| Identifier