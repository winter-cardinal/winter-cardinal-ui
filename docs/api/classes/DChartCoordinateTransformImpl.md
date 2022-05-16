[Winter Cardinal UI - v0.165.0](../index.md) / DChartCoordinateTransformImpl

# Class: DChartCoordinateTransformImpl<CHART\>

## Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md) = [`DBase`](DBase.md) |

## Implements

- [`DChartCoordinateTransform`](../interfaces/DChartCoordinateTransform.md)<`CHART`\>

## Table of contents

### Constructors

- [constructor](DChartCoordinateTransformImpl.md#constructor)

### Properties

- [\_id](DChartCoordinateTransformImpl.md#_id)
- [\_isScalingEnabled](DChartCoordinateTransformImpl.md#_isscalingenabled)
- [\_isTranslationEnabled](DChartCoordinateTransformImpl.md#_istranslationenabled)
- [\_iscale](DChartCoordinateTransformImpl.md#_iscale)
- [\_itranslate](DChartCoordinateTransformImpl.md#_itranslate)
- [\_scale](DChartCoordinateTransformImpl.md#_scale)
- [\_theme](DChartCoordinateTransformImpl.md#_theme)
- [\_translate](DChartCoordinateTransformImpl.md#_translate)

### Accessors

- [id](DChartCoordinateTransformImpl.md#id)
- [scale](DChartCoordinateTransformImpl.md#scale)
- [translate](DChartCoordinateTransformImpl.md#translate)

### Methods

- [bind](DChartCoordinateTransformImpl.md#bind)
- [blend](DChartCoordinateTransformImpl.md#blend)
- [getThemeDefault](DChartCoordinateTransformImpl.md#getthemedefault)
- [getType](DChartCoordinateTransformImpl.md#gettype)
- [map](DChartCoordinateTransformImpl.md#map)
- [mapAll](DChartCoordinateTransformImpl.md#mapall)
- [set](DChartCoordinateTransformImpl.md#set)
- [toTheme](DChartCoordinateTransformImpl.md#totheme)
- [unbind](DChartCoordinateTransformImpl.md#unbind)
- [unmap](DChartCoordinateTransformImpl.md#unmap)
- [unmapAll](DChartCoordinateTransformImpl.md#unmapall)

## Constructors

### constructor

• **new DChartCoordinateTransformImpl**<`CHART`\>(`options?`)

#### Type parameters

| Name | Type |
| :------ | :------ |
| `CHART` | extends [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>, `CHART`\> = [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateTransformOptions`](../interfaces/DChartCoordinateTransformOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L29)

## Properties

### \_id

• `Protected` **\_id**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L21)

___

### \_isScalingEnabled

• `Protected` `Optional` **\_isScalingEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L24)

___

### \_isTranslationEnabled

• `Protected` `Optional` **\_isTranslationEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L22)

___

### \_iscale

• `Protected` **\_iscale**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L27)

___

### \_itranslate

• `Protected` **\_itranslate**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L26)

___

### \_scale

• `Protected` **\_scale**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L25)

___

### \_theme

• `Protected` **\_theme**: [`DThemeChartCoordinateTransform`](../interfaces/DThemeChartCoordinateTransform.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L20)

___

### \_translate

• `Protected` **\_translate**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L23)

## Accessors

### id

• `get` **id**(): `number`

Monotonic increasing ID for change detection.

#### Returns

`number`

#### Implementation of

[DChartCoordinateTransform](../interfaces/DChartCoordinateTransform.md).[id](../interfaces/DChartCoordinateTransform.md#id)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L40)

___

### scale

• `get` **scale**(): `number`

Scale

#### Returns

`number`

#### Implementation of

[DChartCoordinateTransform](../interfaces/DChartCoordinateTransform.md).[scale](../interfaces/DChartCoordinateTransform.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L52)

• `set` **scale**(`scale`): `void`

Scale

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | `number` |

#### Returns

`void`

#### Implementation of

[DChartCoordinateTransform](../interfaces/DChartCoordinateTransform.md).[scale](../interfaces/DChartCoordinateTransform.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L56)

___

### translate

• `get` **translate**(): `number`

Translation amount

#### Returns

`number`

#### Implementation of

[DChartCoordinateTransform](../interfaces/DChartCoordinateTransform.md).[translate](../interfaces/DChartCoordinateTransform.md#translate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L44)

• `set` **translate**(`translate`): `void`

Translation amount

#### Parameters

| Name | Type |
| :------ | :------ |
| `translate` | `number` |

#### Returns

`void`

#### Implementation of

[DChartCoordinateTransform](../interfaces/DChartCoordinateTransform.md).[translate](../interfaces/DChartCoordinateTransform.md#translate)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L48)

## Methods

### bind

▸ **bind**(`container`, `direction`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `container` | [`DChartCoordinateContainerSub`](../interfaces/DChartCoordinateContainerSub.md)<`CHART`\> |
| `direction` | [`DChartCoordinateDirection`](../index.md#dchartcoordinatedirection) |

#### Returns

`void`

#### Implementation of

[DChartCoordinateTransform](../interfaces/DChartCoordinateTransform.md).[bind](../interfaces/DChartCoordinateTransform.md#bind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L60)

___

### blend

▸ **blend**(`ratio`, `mark`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ratio` | `number` |
| `mark` | [`DChartCoordinateTransformMark`](../interfaces/DChartCoordinateTransformMark.md) |

#### Returns

`void`

#### Implementation of

[DChartCoordinateTransform](../interfaces/DChartCoordinateTransform.md).[blend](../interfaces/DChartCoordinateTransform.md#blend)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:95](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L95)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): [`DThemeChartCoordinateTransform`](../interfaces/DThemeChartCoordinateTransform.md)

#### Returns

[`DThemeChartCoordinateTransform`](../interfaces/DThemeChartCoordinateTransform.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L130)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L134)

___

### map

▸ **map**(`value`): `number`

Transforms the given untransformed value to a transformed value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Implementation of

[DChartCoordinateTransform](../interfaces/DChartCoordinateTransform.md).[map](../interfaces/DChartCoordinateTransform.md#map)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:102](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L102)

___

### mapAll

▸ **mapAll**(`values`, `ifrom`, `iend`, `stride`, `offset`): `void`

Transforms the given untransformed values to transformed values.
Numbers whose indices are ifrom + i * stride + offset and less than iend will be transformed.
Here, i is a non-negative integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |
| `ifrom` | `number` |
| `iend` | `number` |
| `stride` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Implementation of

[DChartCoordinateTransform](../interfaces/DChartCoordinateTransform.md).[mapAll](../interfaces/DChartCoordinateTransform.md#mapall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:106](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L106)

___

### set

▸ **set**(`translate?`, `scale?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `translate?` | `number` |
| `scale?` | `number` |

#### Returns

`void`

#### Implementation of

[DChartCoordinateTransform](../interfaces/DChartCoordinateTransform.md).[set](../interfaces/DChartCoordinateTransform.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:71](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L71)

___

### toTheme

▸ `Protected` **toTheme**(`options?`): [`DThemeChartCoordinateTransform`](../interfaces/DThemeChartCoordinateTransform.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DChartCoordinateTransformOptions`](../interfaces/DChartCoordinateTransformOptions.md) |

#### Returns

[`DThemeChartCoordinateTransform`](../interfaces/DThemeChartCoordinateTransform.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L126)

___

### unbind

▸ **unbind**(): `void`

#### Returns

`void`

#### Implementation of

[DChartCoordinateTransform](../interfaces/DChartCoordinateTransform.md).[unbind](../interfaces/DChartCoordinateTransform.md#unbind)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L67)

___

### unmap

▸ **unmap**(`value`): `number`

Transforms the given transformed value to an untransformed value.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `number` |

#### Returns

`number`

#### Implementation of

[DChartCoordinateTransform](../interfaces/DChartCoordinateTransform.md).[unmap](../interfaces/DChartCoordinateTransform.md#unmap)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:114](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L114)

___

### unmapAll

▸ **unmapAll**(`values`, `ifrom`, `iend`, `stride`, `offset`): `void`

Transformed the given transformed values to untransformed values.
Numbers whose indices are ifrom + i * stride + offset and less than iend will be transformed.
Here, i is a non-negative integer.

#### Parameters

| Name | Type |
| :------ | :------ |
| `values` | `number`[] |
| `ifrom` | `number` |
| `iend` | `number` |
| `stride` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Implementation of

[DChartCoordinateTransform](../interfaces/DChartCoordinateTransform.md).[unmapAll](../interfaces/DChartCoordinateTransform.md#unmapall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts:118](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.165.0/src/main/typescript/wcardinal/ui/d-chart-coordinate-transform-impl.ts#L118)
