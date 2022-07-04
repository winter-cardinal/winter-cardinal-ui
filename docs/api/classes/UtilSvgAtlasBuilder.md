[Winter Cardinal UI - v0.194.0](../index.md) / UtilSvgAtlasBuilder

# Class: UtilSvgAtlasBuilder

## Table of contents

### Constructors

- [constructor](UtilSvgAtlasBuilder.md#constructor)

### Properties

- [\_built](UtilSvgAtlasBuilder.md#_built)
- [\_frames](UtilSvgAtlasBuilder.md#_frames)
- [\_height](UtilSvgAtlasBuilder.md#_height)
- [\_margin](UtilSvgAtlasBuilder.md#_margin)
- [\_nextX](UtilSvgAtlasBuilder.md#_nextx)
- [\_nextY](UtilSvgAtlasBuilder.md#_nexty)
- [\_ratio](UtilSvgAtlasBuilder.md#_ratio)
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

• **new UtilSvgAtlasBuilder**(`width`, `ratio`, `margin`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `width` | `number` |
| `ratio` | `number` |
| `margin` | `number` |

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L28)

## Properties

### \_built

• `Protected` `Optional` **\_built**: `Record`<`string`, `Texture`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:26](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L26)

___

### \_frames

• `Protected` **\_frames**: `Record`<`string`, `Rectangle`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L20)

___

### \_height

• `Protected` **\_height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L24)

___

### \_margin

• `Protected` **\_margin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L18)

___

### \_nextX

• `Protected` **\_nextX**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L22)

___

### \_nextY

• `Protected` **\_nextY**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L23)

___

### \_ratio

• `Protected` **\_ratio**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L17)

___

### \_svg

• `Protected` **\_svg**: `string`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L21)

___

### \_width

• `Protected` **\_width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L16)

## Accessors

### mappings

• `get` **mappings**(): `Record`<`string`, `Texture`\>

#### Returns

`Record`<`string`, `Texture`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L84)

___

### margin

• `get` **margin**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L48)

___

### ratio

• `get` **ratio**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L44)

___

### width

• `get` **width**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L40)

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

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L52)

___

### build

▸ **build**(`options?`): `Record`<`string`, `Texture`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`UtilSvgAtlasBuilderBuildOptions`](../interfaces/UtilSvgAtlasBuilderBuildOptions.md) |

#### Returns

`Record`<`string`, `Texture`\>

#### Defined in

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L88)

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

[src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/util/util-svg-atlas-builder.ts#L80)
