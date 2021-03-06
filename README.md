# myData Filter
Small filter library for working with immutable AST(abstract syntax trees) and queries

[![npm version](https://badge.fury.io/js/mydata-filter.svg)](https://badge.fury.io/js/mydata-filter)
[![GitHub issues](https://img.shields.io/github/issues/joaovitmac/mydata-filter.svg)](https://github.com/joaovitmac/mydata-filter/issues)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/joaovitmac/mydata-filter/main/LICENSE)

[![GitHub stars](https://img.shields.io/github/stars/joaovitmac/mydata-filter.svg?style=social&label=Stars)](https://github.com/joaovitmac/mydata-filter)
[![GitHub forks](https://img.shields.io/github/forks/joaovitmac/mydata-filter.svg?style=social&label=Forks)](https://github.com/joaovitmac/mydata-filter)

## Installation

```shell
npm install mydata-filter
```

## Usage

Compile a JSON-AST code that can be used later by a transformer:

```javascript
import { Parse } from "mydata-filter";

const code = `(user.username == "Ana") or (username == "Mari")`;

Parse(code).then(ast => {
    console.log(ast); // { type: "...", ... }
}).catch(error => {
    console.error(error);
});
```

Compile a mysql where clause from a string using a transformer:

```javascript
import { Parse } from "mydata-filter";
import MySqlTransformer from "mydata-filter-mysql";

const code = `(user.username == "Ana") or (username == "Ana")`;

Parse(code, {
    transformer: new MySqlTransformer({
        clause: "WHERE"
    })
}).then(query => {
    console.log(query); // (`user`.`username` == 'Ana') OR (`username` == 'Ana')
}).catch(error => {
    console.error(error);
});
```

## Supported Functions

```typescript
Parse(code, {
  cache?: boolean,
  transformer?: ITransformer
}): Promise<any>;
```

```typescript
ParseSync(code, {
  cache?: boolean,
  transformer?: ITransformer
}): any;
```

## Available Common Transformers
* [mydata-filter-mysql](https://github.com/joaovitmac/mydata-filter-mysql)
* [mydata-filter-postgresql](https://github.com/joaovitmac/mydata-filter-postgresql)

## Functions Syntax
```javascript
FunctionName(arg1)
FUNCTION_NAME(arg1, arg2, ...)
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
Logical And | && | AND
Logical Or | \|\| | OR
Contains | *=
Contains Word | ~=
Starts With | ^=
Ends With | =$
Arithmetic Add | +
Arithmetic Subtraction | -
Arithmetic Multiplication | *
Arithmetic Division | /
Sorter ascending | ASC
Sorter descending | DESC

## Supported Features Identifiers Name
Name | Description
------------ | -------------
OR | Logical Or
AND | Logical And
LT | Less Than
GT | Greater Than
LE | Less than or equal
GE | Greater Than or Equal
NEQ | Not Equals
EQ | Equals
CONTAINS | Contains Operator
CONTAINS_WORD | Contains Word Operator
STARTS_WITH | Starts With Operator
ENDS_WITH | Ends With Operator
ADDITION | Arithmetic Addiction
SUBTRACTION | Arithmetic Subtraction
MULTIPLICATION | Arithmetic Multiplication
DIVISION | Arithmetic Division
PARENTHESES | Parentheses
IDENTIFIER_PATH | Deep Identifier separated by dot
IDENTIFIER | Simple identifier
BOOLEAN | Boolean Type
NUMBER | Number Type
STRING | String Type
FUNCTION_CALL | Call Function
ASC | Sort ascending
DESC | Sort descending
SORTING_LIST | Multiple sorters separated by comma