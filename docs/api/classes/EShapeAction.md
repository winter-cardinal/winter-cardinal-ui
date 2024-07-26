[Winter Cardinal UI - v0.442.0](../index.md) / EShapeAction

# Class: EShapeAction

## Table of contents

### Constructors

- [constructor](EShapeAction.md#constructor)

### Properties

- [values](EShapeAction.md#values)

### Methods

- [add](EShapeAction.md#add)
- [addAll](EShapeAction.md#addall)
- [clear](EShapeAction.md#clear)
- [clearAndAdd](EShapeAction.md#clearandadd)
- [clearAndAddAll](EShapeAction.md#clearandaddall)
- [get](EShapeAction.md#get)
- [indexOf](EShapeAction.md#indexof)
- [remove](EShapeAction.md#remove)
- [serialize](EShapeAction.md#serialize)
- [set](EShapeAction.md#set)
- [size](EShapeAction.md#size)
- [swap](EShapeAction.md#swap)

## Constructors

### constructor

• **new EShapeAction**(): [`EShapeAction`](EShapeAction.md)

#### Returns

[`EShapeAction`](EShapeAction.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts#L12)

## Properties

### values

• **values**: [`EShapeActionValue`](../interfaces/EShapeActionValue.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts#L10)

## Methods

### add

▸ **add**(`value`, `index?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValue`](../interfaces/EShapeActionValue.md) |
| `index?` | `number` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts#L16)

___

### addAll

▸ **addAll**(`values`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`EShapeActionValue`](../interfaces/EShapeActionValue.md)[] |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts#L26)

___

### clear

▸ **clear**(): `this`

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts#L94)

___

### clearAndAdd

▸ **clearAndAdd**(`value`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValue`](../interfaces/EShapeActionValue.md) |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts#L34)

___

### clearAndAddAll

▸ **clearAndAddAll**(`values`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | [`EShapeActionValue`](../interfaces/EShapeActionValue.md)[] |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts#L40)

___

### get

▸ **get**(`index`): ``null`` \| [`EShapeActionValue`](../interfaces/EShapeActionValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`EShapeActionValue`](../interfaces/EShapeActionValue.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts#L68)

___

### indexOf

▸ **indexOf**(`target`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`EShapeActionValue`](../interfaces/EShapeActionValue.md) |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts#L46)

___

### remove

▸ **remove**(`index`): ``null`` \| [`EShapeActionValue`](../interfaces/EShapeActionValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`EShapeActionValue`](../interfaces/EShapeActionValue.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts#L86)

___

### serialize

▸ **serialize**(`manager`): `number`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts:111](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts#L111)

___

### set

▸ **set**(`index`, `value`): ``null`` \| [`EShapeActionValue`](../interfaces/EShapeActionValue.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `value` | [`EShapeActionValue`](../interfaces/EShapeActionValue.md) |

#### Returns

``null`` \| [`EShapeActionValue`](../interfaces/EShapeActionValue.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts#L76)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts:99](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts#L99)

___

### swap

▸ **swap**(`indexA`, `indexB`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `indexA` | `number` |
| `indexB` | `number` |

#### Returns

`this`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts:103](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action.ts#L103)
