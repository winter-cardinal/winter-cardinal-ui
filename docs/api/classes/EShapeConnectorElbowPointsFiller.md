[Winter Cardinal UI - v0.374.0](../index.md) / EShapeConnectorElbowPointsFiller

# Class: EShapeConnectorElbowPointsFiller

## Table of contents

### Constructors

- [constructor](EShapeConnectorElbowPointsFiller.md#constructor)

### Properties

- [\_threshold](EShapeConnectorElbowPointsFiller.md#_threshold)
- [\_values](EShapeConnectorElbowPointsFiller.md#_values)
- [\_x](EShapeConnectorElbowPointsFiller.md#_x)
- [\_y](EShapeConnectorElbowPointsFiller.md#_y)
- [\_z](EShapeConnectorElbowPointsFiller.md#_z)
- [index](EShapeConnectorElbowPointsFiller.md#index)

### Accessors

- [x](EShapeConnectorElbowPointsFiller.md#x)
- [y](EShapeConnectorElbowPointsFiller.md#y)

### Methods

- [head](EShapeConnectorElbowPointsFiller.md#head)
- [margin](EShapeConnectorElbowPointsFiller.md#margin)
- [middle](EShapeConnectorElbowPointsFiller.md#middle)
- [tail](EShapeConnectorElbowPointsFiller.md#tail)
- [toAxis](EShapeConnectorElbowPointsFiller.md#toaxis)
- [toHeadAxis](EShapeConnectorElbowPointsFiller.md#toheadaxis)
- [toSide](EShapeConnectorElbowPointsFiller.md#toside)
- [toTailAxis](EShapeConnectorElbowPointsFiller.md#totailaxis)

## Constructors

### constructor

• **new EShapeConnectorElbowPointsFiller**(`x`, `y`, `values`): [`EShapeConnectorElbowPointsFiller`](EShapeConnectorElbowPointsFiller.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `values` | `number`[] |

#### Returns

[`EShapeConnectorElbowPointsFiller`](EShapeConnectorElbowPointsFiller.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L16)

## Properties

### \_threshold

• `Protected` **\_threshold**: `number` = `0.000001`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L14)

___

### \_values

• `Protected` **\_values**: `number`[]

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:12](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L12)

___

### \_x

• `Protected` **\_x**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:9](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L9)

___

### \_y

• `Protected` **\_y**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:10](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L10)

___

### \_z

• `Protected` **\_z**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:11](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L11)

___

### index

• **index**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L13)

## Accessors

### x

• `get` **x**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L26)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L30)

___

### y

• `get` **y**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L47)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L51)

## Methods

### head

▸ **head**(`x`, `y`, `nx`, `ny`, `sxh`, `syh`, `margin`, `side`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `nx` | `number` |
| `ny` | `number` |
| `sxh` | `number` |
| `syh` | `number` |
| `margin` | `number` |
| `side` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L228)

___

### margin

▸ **margin**(`tail`, `head`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tail` | `number` |
| `head` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:270](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L270)

___

### middle

▸ **middle**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L208)

___

### tail

▸ **tail**(`x`, `y`, `nx`, `ny`, `sxh`, `syh`, `margin`, `side`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `nx` | `number` |
| `ny` | `number` |
| `sxh` | `number` |
| `syh` | `number` |
| `margin` | `number` |
| `side` | `number` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:162](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L162)

___

### toAxis

▸ **toAxis**(`dx`, `dy`, `nx`, `ny`, `side`): ``0`` \| ``2`` \| ``1`` \| ``3``

#### Parameters

| Name | Type |
| :------ | :------ |
| `dx` | `number` |
| `dy` | `number` |
| `nx` | `number` |
| `ny` | `number` |
| `side` | `number` |

#### Returns

``0`` \| ``2`` \| ``1`` \| ``3``

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:86](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L86)

___

### toHeadAxis

▸ **toHeadAxis**(`x`, `y`, `nx`, `ny`, `side`): ``0`` \| ``2`` \| ``1`` \| ``3``

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `nx` | `number` |
| `ny` | `number` |
| `side` | `number` |

#### Returns

``0`` \| ``2`` \| ``1`` \| ``3``

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:218](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L218)

___

### toSide

▸ **toSide**(`x`, `y`): ``0`` \| ``2`` \| ``1`` \| ``3``

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

``0`` \| ``2`` \| ``1`` \| ``3``

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L68)

___

### toTailAxis

▸ **toTailAxis**(`x`, `y`, `nx`, `ny`, `side`): ``0`` \| ``2`` \| ``1`` \| ``3``

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `nx` | `number` |
| `ny` | `number` |
| `side` | `number` |

#### Returns

``0`` \| ``2`` \| ``1`` \| ``3``

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/shape/variant/e-shape-connector-elbow-points-filler.ts#L152)
