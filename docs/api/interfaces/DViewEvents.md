[Winter Cardinal UI - v0.442.0](../index.md) / DViewEvents

# Interface: DViewEvents\<EMITTER\>

[DView](DView.md) events.

## Type parameters

| Name |
| :------ |
| `EMITTER` |

## Table of contents

### Methods

- [gestureend](DViewEvents.md#gestureend)
- [gesturelongpress](DViewEvents.md#gesturelongpress)
- [gesturestart](DViewEvents.md#gesturestart)
- [gesturestop](DViewEvents.md#gesturestop)
- [gesturetap](DViewEvents.md#gesturetap)
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

[src/main/typescript/wcardinal/ui/d-view.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view.ts#L129)

___

### gesturelongpress

▸ **gesturelongpress**(`target`, `e`, `emitter`): `void`

Triggered when pressed long.
Unlike the tap event of PixiJS, this event is emitted only when the gesture is not performed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> | an operation target |
| `e` | `InteractionEvent` | - |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view.ts#L157)

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

[src/main/typescript/wcardinal/ui/d-view.ts:121](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view.ts#L121)

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

[src/main/typescript/wcardinal/ui/d-view.ts:137](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view.ts#L137)

___

### gesturetap

▸ **gesturetap**(`target`, `e`, `emitter`): `void`

Triggered when tapped.
Unlike the tap event of PixiJS, this event is emitted only when the gesture is not performed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`DBase`](../classes/DBase.md)\<[`DThemeBase`](DThemeBase.md), [`DBaseOptions`](DBaseOptions.md)\<[`DThemeBase`](DThemeBase.md), `any`\>\> | an operation target |
| `e` | `InteractionEvent` | - |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view.ts#L147)

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

[src/main/typescript/wcardinal/ui/d-view.ts:173](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view.ts#L173)

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

[src/main/typescript/wcardinal/ui/d-view.ts:165](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view.ts#L165)

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

[src/main/typescript/wcardinal/ui/d-view.ts:181](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view.ts#L181)

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

[src/main/typescript/wcardinal/ui/d-view.ts:197](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view.ts#L197)

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

[src/main/typescript/wcardinal/ui/d-view.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view.ts#L189)

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

[src/main/typescript/wcardinal/ui/d-view.ts:205](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-view.ts#L205)
