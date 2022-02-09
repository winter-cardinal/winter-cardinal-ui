[Winter Cardinal UI - v0.154.0](../index.md) / DScalarExpression

# Class: DScalarExpression

Parser and evaluator of the scalar expressions like `100% - 50s`.

Literals

* x%: 0.01 * x * parent value
* xs: 0.01 * x * self value
* xp: 0.01 * x * padding value
* xc: 0.01 * x * current value

Operators

* `+`
* `-`
* `*`
* `/`
* `(` and `)`

Functions

* min( a, b, ... )
* max( a, b, ... )

Examples

* `90%`: 0.9 * parent value
* `50s`: 0.5 * self value
* `90% - 50s`: 0.9 * parent value - 0.5 * self value
* `90% - (50s + 100) * 2`: 0.9 * parent value - ( 0.5 * self value + 100 ) * 2

## Implements

- [`DScalar`](../interfaces/DScalar.md)

## Table of contents

### Constructors

- [constructor](DScalarExpression.md#constructor)

### Properties

- [\_node](DScalarExpression.md#_node)
- [TOKEN\_REGEX](DScalarExpression.md#token_regex)

### Methods

- [calculate](DScalarExpression.md#calculate)
- [evaluate](DScalarExpression.md#evaluate)
- [toArithmetic](DScalarExpression.md#toarithmetic)
- [toArithmeticNode](DScalarExpression.md#toarithmeticnode)
- [toComma](DScalarExpression.md#tocomma)
- [toCommaOf](DScalarExpression.md#tocommaof)
- [toParensesis](DScalarExpression.md#toparensesis)
- [toToken](DScalarExpression.md#totoken)
- [toUnary](DScalarExpression.md#tounary)
- [toUnaryNode](DScalarExpression.md#tounarynode)

## Constructors

### constructor

• **new DScalarExpression**(`expression`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L173)

## Properties

### \_node

• `Protected` **\_node**: `Node`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:171](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L171)

___

### TOKEN\_REGEX

▪ `Static` `Protected` **TOKEN\_REGEX**: `RegExp`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:170](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L170)

## Methods

### calculate

▸ **calculate**(`parent`, `self`, `padding`, `current`): `number`

Calculates a scalar value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | `number` |
| `self` | `number` |
| `padding` | `number` |
| `current` | `number` |

#### Returns

`number`

#### Implementation of

[DScalar](../interfaces/DScalar.md).[calculate](../interfaces/DScalar.md#calculate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:471](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L471)

___

### evaluate

▸ `Protected` **evaluate**(`node`, `parent`, `self`, `padding`, `current`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `Node` |
| `parent` | `number` |
| `self` | `number` |
| `padding` | `number` |
| `current` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:386](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L386)

___

### toArithmetic

▸ **toArithmetic**(`nodes`, `operatorA`, `operatorB`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `NodeOrToken`[] |
| `operatorA` | `NodeArithmeticOperator` |
| `operatorB` | `NodeArithmeticOperator` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:326](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L326)

___

### toArithmeticNode

▸ **toArithmeticNode**(`node`, `operatorA`, `operatorB`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeOrToken` |
| `operatorA` | `NodeArithmeticOperator` |
| `operatorB` | `NodeArithmeticOperator` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:300](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L300)

___

### toComma

▸ **toComma**(`nodes`, `ifrom`, `ito`): `NodeOrToken`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `NodeOrToken`[] |
| `ifrom` | `number` |
| `ito` | `number` |

#### Returns

`NodeOrToken`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:238](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L238)

___

### toCommaOf

▸ **toCommaOf**(`nodes`, `ifrom`, `ito`): `NodeOrToken`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `NodeOrToken`[] |
| `ifrom` | `number` |
| `ito` | `number` |

#### Returns

`NodeOrToken`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:223](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L223)

___

### toParensesis

▸ **toParensesis**(`nodes`, `ifrom`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `NodeOrToken`[] |
| `ifrom` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L192)

___

### toToken

▸ **toToken**(`expression`): `Token`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

`Token`[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L355)

___

### toUnary

▸ **toUnary**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | `NodeOrToken`[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:275](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L275)

___

### toUnaryNode

▸ **toUnaryNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `NodeOrToken` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:263](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L263)
