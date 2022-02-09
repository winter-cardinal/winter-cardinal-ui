[Winter Cardinal UI - v0.154.0](../index.md) / EShapeActionValueOpetyped

# Class: EShapeActionValueOpetyped<SUBTYPE, OPETYPE\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `SUBTYPE` | extends `number` |
| `OPETYPE` | extends `number` |

## Hierarchy

- [`EShapeActionValueSubtyped`](EShapeActionValueSubtyped.md)<`SUBTYPE`\>

  ↳ **`EShapeActionValueOpetyped`**

  ↳↳ [`EShapeActionValueTransformMove`](EShapeActionValueTransformMove.md)

  ↳↳ [`EShapeActionValueTransformResize`](EShapeActionValueTransformResize.md)

  ↳↳ [`EShapeActionValueTransformRotate`](EShapeActionValueTransformRotate.md)

## Table of contents

### Constructors

- [constructor](EShapeActionValueOpetyped.md#constructor)

### Properties

- [condition](EShapeActionValueOpetyped.md#condition)
- [opetype](EShapeActionValueOpetyped.md#opetype)
- [subtype](EShapeActionValueOpetyped.md#subtype)
- [type](EShapeActionValueOpetyped.md#type)

### Methods

- [isEquals](EShapeActionValueOpetyped.md#isequals)
- [serialize](EShapeActionValueOpetyped.md#serialize)
- [toLabel](EShapeActionValueOpetyped.md#tolabel)
- [toRuntime](EShapeActionValueOpetyped.md#toruntime)

## Constructors

### constructor

• **new EShapeActionValueOpetyped**<`SUBTYPE`, `OPETYPE`\>(`type`, `condition`, `subtype`, `opetype`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `SUBTYPE` | extends `number` |
| `OPETYPE` | extends `number` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | [`EShapeActionValueType`](../index.md#eshapeactionvaluetype) |
| `condition` | `string` |
| `subtype` | `SUBTYPE` |
| `opetype` | `OPETYPE` |

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[constructor](EShapeActionValueSubtyped.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-opetyped.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-opetyped.ts#L16)

## Properties

### condition

• `Readonly` **condition**: `string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[condition](EShapeActionValueSubtyped.md#condition)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L14)

___

### opetype

• `Readonly` **opetype**: `OPETYPE`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-opetyped.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-opetyped.ts#L14)

___

### subtype

• `Readonly` **subtype**: `SUBTYPE`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[subtype](EShapeActionValueSubtyped.md#subtype)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-subtyped.ts#L13)

___

### type

• `Readonly` **type**: [`EShapeActionValueType`](../index.md#eshapeactionvaluetype)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[type](EShapeActionValueSubtyped.md#type)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L13)

## Methods

### isEquals

▸ **isEquals**(`value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeActionValue`](../interfaces/EShapeActionValue.md) |

#### Returns

`boolean`

#### Overrides

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[isEquals](EShapeActionValueSubtyped.md#isequals)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-opetyped.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-opetyped.ts#L26)

___

### serialize

▸ `Abstract` **serialize**(`manager`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `manager` | [`EShapeResourceManagerSerialization`](EShapeResourceManagerSerialization.md) |

#### Returns

`number`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[serialize](EShapeActionValueSubtyped.md#serialize)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L30)

___

### toLabel

▸ **toLabel**(): `string`

#### Returns

`string`

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toLabel](EShapeActionValueSubtyped.md#tolabel)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L25)

___

### toRuntime

▸ `Abstract` **toRuntime**(): [`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Returns

[`EShapeActionRuntime`](EShapeActionRuntime.md)

#### Inherited from

[EShapeActionValueSubtyped](EShapeActionValueSubtyped.md).[toRuntime](EShapeActionValueSubtyped.md#toruntime)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-value-base.ts#L29)
