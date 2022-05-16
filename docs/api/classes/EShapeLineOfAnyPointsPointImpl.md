[Winter Cardinal UI - v0.165.0](../index.md) / EShapeLineOfAnyPointsPointImpl

# Class: EShapeLineOfAnyPointsPointImpl

## Implements

- [`EShapeLineOfAnyPointsPoint`](../interfaces/EShapeLineOfAnyPointsPoint.md)

## Table of contents

### Constructors

- [constructor](EShapeLineOfAnyPointsPointImpl.md#constructor)

### Properties

- [\_defX](EShapeLineOfAnyPointsPointImpl.md#_defx)
- [\_defY](EShapeLineOfAnyPointsPointImpl.md#_defy)
- [\_id](EShapeLineOfAnyPointsPointImpl.md#_id)
- [\_limit](EShapeLineOfAnyPointsPointImpl.md#_limit)
- [\_limitComputed](EShapeLineOfAnyPointsPointImpl.md#_limitcomputed)
- [\_limitId](EShapeLineOfAnyPointsPointImpl.md#_limitid)
- [\_limitParentLength](EShapeLineOfAnyPointsPointImpl.md#_limitparentlength)
- [\_parent](EShapeLineOfAnyPointsPointImpl.md#_parent)
- [\_x](EShapeLineOfAnyPointsPointImpl.md#_x)
- [\_y](EShapeLineOfAnyPointsPointImpl.md#_y)

### Accessors

- [id](EShapeLineOfAnyPointsPointImpl.md#id)
- [limit](EShapeLineOfAnyPointsPointImpl.md#limit)
- [x](EShapeLineOfAnyPointsPointImpl.md#x)
- [y](EShapeLineOfAnyPointsPointImpl.md#y)

### Methods

- [calcLimit](EShapeLineOfAnyPointsPointImpl.md#calclimit)
- [getLimit](EShapeLineOfAnyPointsPointImpl.md#getlimit)
- [getX](EShapeLineOfAnyPointsPointImpl.md#getx)
- [getY](EShapeLineOfAnyPointsPointImpl.md#gety)
- [isStaticX](EShapeLineOfAnyPointsPointImpl.md#isstaticx)
- [isStaticY](EShapeLineOfAnyPointsPointImpl.md#isstaticy)
- [set](EShapeLineOfAnyPointsPointImpl.md#set)
- [toDirty](EShapeLineOfAnyPointsPointImpl.md#todirty)
- [updateLimitComputed](EShapeLineOfAnyPointsPointImpl.md#updatelimitcomputed)

## Constructors

### constructor

• **new EShapeLineOfAnyPointsPointImpl**(`parent`, `defX`, `defY`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`EShapeLineOfAnyPointsPointImplParent`](../interfaces/EShapeLineOfAnyPointsPointImplParent.md) |
| `defX` | `number` |
| `defY` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L30)

## Properties

### \_defX

• `Protected` **\_defX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L23)

___

### \_defY

• `Protected` **\_defY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L24)

___

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L20)

___

### \_limit

• `Protected` **\_limit**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L25)

___

### \_limitComputed

• `Protected` **\_limitComputed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L26)

___

### \_limitId

• `Protected` **\_limitId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L27)

___

### \_limitParentLength

• `Protected` **\_limitParentLength**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L28)

___

### \_parent

• `Protected` **\_parent**: [`EShapeLineOfAnyPointsPointImplParent`](../interfaces/EShapeLineOfAnyPointsPointImplParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L19)

___

### \_x

• `Protected` **\_x**: [`EShapeLineOfAnyValue`](../index.md#eshapelineofanyvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L21)

___

### \_y

• `Protected` **\_y**: [`EShapeLineOfAnyValue`](../index.md#eshapelineofanyvalue)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L22)

## Accessors

### id

• `get` **id**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeLineOfAnyPointsPoint](../interfaces/EShapeLineOfAnyPointsPoint.md).[id](../interfaces/EShapeLineOfAnyPointsPoint.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L43)

___

### limit

• `get` **limit**(): ``null`` \| `number`

#### Returns

``null`` \| `number`

#### Implementation of

[EShapeLineOfAnyPointsPoint](../interfaces/EShapeLineOfAnyPointsPoint.md).[limit](../interfaces/EShapeLineOfAnyPointsPoint.md#limit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L63)

• `set` **limit**(`limit`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `limit` | ``null`` \| `number` |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAnyPointsPoint](../interfaces/EShapeLineOfAnyPointsPoint.md).[limit](../interfaces/EShapeLineOfAnyPointsPoint.md#limit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L67)

___

### x

• `get` **x**(): [`EShapeLineOfAnyValue`](../index.md#eshapelineofanyvalue)

#### Returns

[`EShapeLineOfAnyValue`](../index.md#eshapelineofanyvalue)

#### Implementation of

[EShapeLineOfAnyPointsPoint](../interfaces/EShapeLineOfAnyPointsPoint.md).[x](../interfaces/EShapeLineOfAnyPointsPoint.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L47)

• `set` **x**(`x`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | [`EShapeLineOfAnyValue`](../index.md#eshapelineofanyvalue) |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAnyPointsPoint](../interfaces/EShapeLineOfAnyPointsPoint.md).[x](../interfaces/EShapeLineOfAnyPointsPoint.md#x)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L51)

___

### y

• `get` **y**(): [`EShapeLineOfAnyValue`](../index.md#eshapelineofanyvalue)

#### Returns

[`EShapeLineOfAnyValue`](../index.md#eshapelineofanyvalue)

#### Implementation of

[EShapeLineOfAnyPointsPoint](../interfaces/EShapeLineOfAnyPointsPoint.md).[y](../interfaces/EShapeLineOfAnyPointsPoint.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:55](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L55)

• `set` **y**(`y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `y` | [`EShapeLineOfAnyValue`](../index.md#eshapelineofanyvalue) |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAnyPointsPoint](../interfaces/EShapeLineOfAnyPointsPoint.md).[y](../interfaces/EShapeLineOfAnyPointsPoint.md#y)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L59)

## Methods

### calcLimit

▸ `Protected` **calcLimit**(`value`, `parentLenght`, `def`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeLineOfAnyValue`](../index.md#eshapelineofanyvalue) |
| `parentLenght` | `number` |
| `def` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L121)

___

### getLimit

▸ **getLimit**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeLineOfAnyPointsPoint](../interfaces/EShapeLineOfAnyPointsPoint.md).[getLimit](../interfaces/EShapeLineOfAnyPointsPoint.md#getlimit)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:98](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L98)

___

### getX

▸ **getX**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Implementation of

[EShapeLineOfAnyPointsPoint](../interfaces/EShapeLineOfAnyPointsPoint.md).[getX](../interfaces/EShapeLineOfAnyPointsPoint.md#getx)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:90](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L90)

___

### getY

▸ **getY**(`index`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`number`

#### Implementation of

[EShapeLineOfAnyPointsPoint](../interfaces/EShapeLineOfAnyPointsPoint.md).[getY](../interfaces/EShapeLineOfAnyPointsPoint.md#gety)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L94)

___

### isStaticX

▸ **isStaticX**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeLineOfAnyPointsPoint](../interfaces/EShapeLineOfAnyPointsPoint.md).[isStaticX](../interfaces/EShapeLineOfAnyPointsPoint.md#isstaticx)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L148)

___

### isStaticY

▸ **isStaticY**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeLineOfAnyPointsPoint](../interfaces/EShapeLineOfAnyPointsPoint.md).[isStaticY](../interfaces/EShapeLineOfAnyPointsPoint.md#isstaticy)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L152)

___

### set

▸ **set**(`x?`, `y?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | [`EShapeLineOfAnyValue`](../index.md#eshapelineofanyvalue) |
| `y?` | [`EShapeLineOfAnyValue`](../index.md#eshapelineofanyvalue) |

#### Returns

`void`

#### Implementation of

[EShapeLineOfAnyPointsPoint](../interfaces/EShapeLineOfAnyPointsPoint.md).[set](../interfaces/EShapeLineOfAnyPointsPoint.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L71)

___

### toDirty

▸ **toDirty**(): `void`

#### Returns

`void`

#### Implementation of

[EShapeLineOfAnyPointsPoint](../interfaces/EShapeLineOfAnyPointsPoint.md).[toDirty](../interfaces/EShapeLineOfAnyPointsPoint.md#todirty)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L156)

___

### updateLimitComputed

▸ `Protected` **updateLimitComputed**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/shape/variant/e-shape-line-of-any-points-point-impl.ts#L107)
