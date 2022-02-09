[Winter Cardinal UI](../README.md) / DDiagramSnapshotEvents

# Interface: DDiagramSnapshotEvents<CANVAS, EMITTER\>

## Type parameters

| Name |
| :------ |
| `CANVAS` |
| `EMITTER` |

## Table of contents

### Methods

- [taking](DDiagramSnapshotEvents.md#taking)
- [took](DDiagramSnapshotEvents.md#took)

## Methods

### taking

▸ **taking**(`canvas`, `emitter`): `void`

Triggered before taking a snapshot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | `CANVAS` | a canvas |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L29)

___

### took

▸ **took**(`canvas`, `reason`, `emitter`): `void`

Triggered when a snapshot is taken successfully or when failed to take.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `canvas` | `CANVAS` | a canvas |
| `reason` | ``null`` \| `string` | Null if succeeded. Otherwise, a string representing a reason why failed. |
| `emitter` | `EMITTER` | an emitter |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L38)
