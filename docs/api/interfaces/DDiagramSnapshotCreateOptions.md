[Winter Cardinal UI - v0.374.0](../index.md) / DDiagramSnapshotCreateOptions

# Interface: DDiagramSnapshotCreateOptions\<CANVAS, DATA\>

## Type parameters

| Name |
| :------ |
| `CANVAS` |
| `DATA` |

## Table of contents

### Properties

- [cleanup](DDiagramSnapshotCreateOptions.md#cleanup)
- [extractor](DDiagramSnapshotCreateOptions.md#extractor)
- [size](DDiagramSnapshotCreateOptions.md#size)

## Properties

### cleanup

• `Optional` **cleanup**: `boolean` \| [`DDiagramSnapshotCleanupOptions`](DDiagramSnapshotCleanupOptions.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:75](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L75)

___

### extractor

• **extractor**: (`canvas`: `CANVAS`) => `DATA`

#### Type declaration

▸ (`canvas`): `DATA`

##### Parameters

| Name | Type |
| :------ | :------ |
| `canvas` | `CANVAS` |

##### Returns

`DATA`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L76)

___

### size

• `Optional` **size**: ``null`` \| `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts:74](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.310.1/src/main/typescript/wcardinal/ui/d-diagram-snapshot.ts#L74)
