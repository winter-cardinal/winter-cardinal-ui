[Winter Cardinal UI - v0.442.0](../index.md) / DScalarExpression

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
- [toTokenLiteral](DScalarExpression.md#totokenliteral)
- [toTokenOperator](DScalarExpression.md#totokenoperator)
- [toUnary](DScalarExpression.md#tounary)
- [toUnaryNode](DScalarExpression.md#tounarynode)

## Constructors

### constructor

• **new DScalarExpression**(`expression`): [`DScalarExpression`](DScalarExpression.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

[`DScalarExpression`](DScalarExpression.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L168)

## Properties

### \_node

• `Protected` **\_node**: [`DScalarExpressionNode`](../index.md#dscalarexpressionnode)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:166](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L166)

___

### TOKEN\_REGEX

▪ `Static` `Protected` **TOKEN\_REGEX**: `RegExp`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L165)

## Methods

### calculate

▸ **calculate**(`parent`, `self`, `padding`, `current`): `number`

Calculates a scalar value.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `parent` | `number` | a parent value |
| `self` | `number` | a self value |
| `padding` | `number` | a padding value |
| `current` | `number` | a current value |

#### Returns

`number`

a calculated scalar value

#### Implementation of

[DScalar](../interfaces/DScalar.md).[calculate](../interfaces/DScalar.md#calculate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:530](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L530)

___

### evaluate

▸ **evaluate**(`node`, `parent`, `self`, `padding`, `current`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`DScalarExpressionNode`](../index.md#dscalarexpressionnode) |
| `parent` | `number` |
| `self` | `number` |
| `padding` | `number` |
| `current` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:445](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L445)

___

### toArithmetic

▸ **toArithmetic**(`nodes`, `operatorA`, `operatorB`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`DScalarExpressionNodeOrToken`](../index.md#dscalarexpressionnodeortoken)[] |
| `operatorA` | [`DScalarExpressionNodeArithmeticOperator`](../index.md#dscalarexpressionnodearithmeticoperator) |
| `operatorB` | [`DScalarExpressionNodeArithmeticOperator`](../index.md#dscalarexpressionnodearithmeticoperator) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:344](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L344)

___

### toArithmeticNode

▸ **toArithmeticNode**(`node`, `operatorA`, `operatorB`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`DScalarExpressionNodeOrToken`](../index.md#dscalarexpressionnodeortoken) |
| `operatorA` | [`DScalarExpressionNodeArithmeticOperator`](../index.md#dscalarexpressionnodearithmeticoperator) |
| `operatorB` | [`DScalarExpressionNodeArithmeticOperator`](../index.md#dscalarexpressionnodearithmeticoperator) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:315](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L315)

___

### toComma

▸ **toComma**(`nodes`, `ifrom`, `ito`): [`DScalarExpressionNodeOrToken`](../index.md#dscalarexpressionnodeortoken)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`DScalarExpressionNodeOrToken`](../index.md#dscalarexpressionnodeortoken)[] |
| `ifrom` | `number` |
| `ito` | `number` |

#### Returns

[`DScalarExpressionNodeOrToken`](../index.md#dscalarexpressionnodeortoken)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L240)

___

### toCommaOf

▸ **toCommaOf**(`nodes`, `ifrom`, `ito`): [`DScalarExpressionNodeOrToken`](../index.md#dscalarexpressionnodeortoken)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`DScalarExpressionNodeOrToken`](../index.md#dscalarexpressionnodeortoken)[] |
| `ifrom` | `number` |
| `ito` | `number` |

#### Returns

[`DScalarExpressionNodeOrToken`](../index.md#dscalarexpressionnodeortoken)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:221](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L221)

___

### toParensesis

▸ **toParensesis**(`nodes`, `ifrom`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`DScalarExpressionNodeOrToken`](../index.md#dscalarexpressionnodeortoken)[] |
| `ifrom` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L187)

___

### toToken

▸ **toToken**(`expression`): [`DScalarExpressionToken`](../index.md#dscalarexpressiontoken)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |

#### Returns

[`DScalarExpressionToken`](../index.md#dscalarexpressiontoken)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:373](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L373)

___

### toTokenLiteral

▸ **toTokenLiteral**(`token`): ``null`` \| [`DScalarExpressionNodeTypeLiteral`](../index.md#dscalarexpressionnodetypeliteral)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

``null`` \| [`DScalarExpressionNodeTypeLiteral`](../index.md#dscalarexpressionnodetypeliteral)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:428](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L428)

___

### toTokenOperator

▸ **toTokenOperator**(`token`): ``null`` \| [`DScalarExpressionNodeTypeOperator`](../index.md#dscalarexpressionnodetypeoperator)

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

``null`` \| [`DScalarExpressionNodeTypeOperator`](../index.md#dscalarexpressionnodetypeoperator)

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:404](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L404)

___

### toUnary

▸ **toUnary**(`nodes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodes` | [`DScalarExpressionNodeOrToken`](../index.md#dscalarexpressionnodeortoken)[] |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:281](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L281)

___

### toUnaryNode

▸ **toUnaryNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`DScalarExpressionNodeOrToken`](../index.md#dscalarexpressionnodeortoken) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-scalar-expression.ts:269](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-scalar-expression.ts#L269)
