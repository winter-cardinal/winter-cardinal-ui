[Winter Cardinal UI - v0.407.0](../index.md) / DViewEvents

# Interface: DViewEvents\<EMITTER\>

[DView](DView.md) events.

## Type parameters

| Name |
| :------ |
| `EMITTER` |

## Table of contents

### Methods

- [gestureend](DViewEvents.md#gestureend)
- [gesturestart](DViewEvents.md#gesturestart)
- [gesturestop](DViewEvents.md#gesturestop)
- [transformend](DViewEvents.md#transformend)
- [transformstart](DViewEvents.md#transformstart)
- [transformstop](DViewEvents.md#transformstop)
- [wheeltranslationend](DViewEvents.md#wheeltranslationend)
- [wheeltranslationstart](DViewEvents.md#wheeltranslationstart)
- [wheeltranslationstop](DViewEvents.md#wheeltranslationstop)

## Methods

### gestureend

▸ **gestureend**(`target`, `emitter`): `void`

Triggered when a gesture ends.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> | an operation target |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view.ts#L129)

___

### gesturestart

▸ **gesturestart**(`target`, `emitter`): `void`

Triggered when a gesture starts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> | an operation target |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view.ts#L121)

___

### gesturestop

▸ **gesturestop**(`target`, `emitter`): `void`

Triggered when a gesture stops.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> | an operation target |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view.ts#L137)

___

### transformend

▸ **transformend**(`target`, `emitter`): `void`

Triggered when a transform ends.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> | an operation target |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view.ts#L153)

___

### transformstart

▸ **transformstart**(`target`, `emitter`): `void`

Triggered when a transform starts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> | an operation target |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:145](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view.ts#L145)

___

### transformstop

▸ **transformstop**(`target`, `emitter`): `void`

Triggered when a transform stops.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> | an operation target |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:161](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view.ts#L161)

___

### wheeltranslationend

▸ **wheeltranslationend**(`target`, `emitter`): `void`

Triggered when a wheel translation ends.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> | an operation target |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view.ts#L177)

___

### wheeltranslationstart

▸ **wheeltranslationstart**(`target`, `emitter`): `void`

Triggered when a wheel translation starts.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> | an operation target |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:169](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view.ts#L169)

___

### wheeltranslationstop

▸ **wheeltranslationstop**(`target`, `emitter`): `void`

Triggered when a wheel translation stops.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> | an operation target |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:185](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/d-view.ts#L185)
