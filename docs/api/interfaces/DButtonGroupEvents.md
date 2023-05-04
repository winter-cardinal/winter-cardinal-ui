[Winter Cardinal UI - v0.310.1](../index.md) / DButtonGroupEvents

# Interface: DButtonGroupEvents<BUTTON, EMITTER\>

[DButtonGroup](../classes/DButtonGroup.md) events.

## Type parameters

| Name |
| :------ |
| `BUTTON` |
| `EMITTER` |

## Table of contents

### Methods

- [active](DButtonGroupEvents.md#active)

## Methods

### active

▸ **active**(`newActive`, `oldActive`, `emitter`): `void`

Triggered when the active button is changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newActive` | ``null`` \| `BUTTON` | - |
| `oldActive` | ``null`` \| `BUTTON` | - |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-button-group.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-button-group.ts#L19)
