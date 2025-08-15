[Winter Cardinal UI - v0.457.0](../index.md) / UtilSvgAtlasBuilder

# Class: UtilSvgAtlasBuilder

## Table of contents

### Constructors

- [constructor](UtilSvgAtlasBuilder.md#constructor)

### Properties

- [\_built](UtilSvgAtlasBuilder.md#_built)
- [\_frames](UtilSvgAtlasBuilder.md#_frames)
- [\_height](UtilSvgAtlasBuilder.md#_height)
- [\_margin](UtilSvgAtlasBuilder.md#_margin)
- [\_mipmap](UtilSvgAtlasBuilder.md#_mipmap)
- [\_nextX](UtilSvgAtlasBuilder.md#_nextx)
- [\_nextY](UtilSvgAtlasBuilder.md#_nexty)
- [\_ratio](UtilSvgAtlasBuilder.md#_ratio)
- [\_resolution](UtilSvgAtlasBuilder.md#_resolution)
- [\_scaling](UtilSvgAtlasBuilder.md#_scaling)
- [\_svg](UtilSvgAtlasBuilder.md#_svg)
- [\_width](UtilSvgAtlasBuilder.md#_width)

### Accessors

- [mappings](UtilSvgAtlasBuilder.md#mappings)
- [margin](UtilSvgAtlasBuilder.md#margin)
- [ratio](UtilSvgAtlasBuilder.md#ratio)
- [width](UtilSvgAtlasBuilder.md#width)

### Methods

- [add](UtilSvgAtlasBuilder.md#add)
- [build](UtilSvgAtlasBuilder.md#build)
- [has](UtilSvgAtlasBuilder.md#has)

## Constructors

### constructor

• **new UtilSvgAtlasBuilder**(`options`): [`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options` | [`UtilSvgAtlasBuilderOptions`](../interfaces/UtilSvgAtlasBuilderOptions.md) |

#### Returns

[`UtilSvgAtlasBuilder`](UtilSvgAtlasBuilder.md)

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L40)

## Properties

### \_built

• `Protected` `Optional` **\_built**: `Record`\<`string`, `Texture`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L38)

___

### \_frames

• `Protected` **\_frames**: `Record`\<`string`, `Rectangle`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L32)

___

### \_height

• `Protected` **\_height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L36)

___

### \_margin

• `Protected` **\_margin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:27](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L27)

___

### \_mipmap

• `Protected` **\_mipmap**: `MIPMAP_MODES`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L30)

___

### \_nextX

• `Protected` **\_nextX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L34)

___

### \_nextY

• `Protected` **\_nextY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L35)

___

### \_ratio

• `Protected` **\_ratio**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L26)

___

### \_resolution

• `Protected` **\_resolution**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L28)

___

### \_scaling

• `Protected` **\_scaling**: `SCALE_MODES`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L29)

___

### \_svg

• `Protected` **\_svg**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L33)

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:25](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L25)

## Accessors

### mappings

• `get` **mappings**(): `Record`\<`string`, `Texture`\>

#### Returns

`Record`\<`string`, `Texture`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:130](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L130)

___

### margin

• `get` **margin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:69](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L69)

___

### ratio

• `get` **ratio**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:65](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L65)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:61](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L61)

## Methods

### add

▸ **add**(`name`, `width`, `height`, `path`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `width` | `number` |
| `height` | `number` |
| `path` | `string` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:73](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L73)

▸ **add**(`name`, `width`, `height`, `path`, `frameX`, `frameY`, `frameWidth`, `frameHeight`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `width` | `number` |
| `height` | `number` |
| `path` | `string` |
| `frameX` | `number` |
| `frameY` | `number` |
| `frameWidth` | `number` |
| `frameHeight` | `number` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L74)

___

### build

▸ **build**(`options?`): `Record`\<`string`, `Texture`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`UtilSvgAtlasBuilderBuildOptions`](../interfaces/UtilSvgAtlasBuilderBuildOptions.md) |

#### Returns

`Record`\<`string`, `Texture`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:134](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L134)

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:126](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L126)
