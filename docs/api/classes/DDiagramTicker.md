[Winter Cardinal UI - v0.442.0](../index.md) / DDiagramTicker

# Class: DDiagramTicker

## Table of contents

### Constructors

- [constructor](DDiagramTicker.md#constructor)

### Properties

- [\_interval](DDiagramTicker.md#_interval)
- [\_onTimeBound](DDiagramTicker.md#_ontimebound)
- [\_parent](DDiagramTicker.md#_parent)
- [\_timeoutId](DDiagramTicker.md#_timeoutid)
- [\_values](DDiagramTicker.md#_values)

### Methods

- [add](DDiagramTicker.md#add)
- [getInterval](DDiagramTicker.md#getinterval)
- [onTime](DDiagramTicker.md#ontime)
- [start](DDiagramTicker.md#start)
- [stop](DDiagramTicker.md#stop)

## Constructors

### constructor

• **new DDiagramTicker**(`parent`, `interval`): [`DDiagramTicker`](DDiagramTicker.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DDiagramTickerParent`](../interfaces/DDiagramTickerParent.md) |
| `interval` | `number` |

#### Returns

[`DDiagramTicker`](DDiagramTicker.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-ticker.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-ticker.ts#L19)

## Properties

### \_interval

• `Protected` **\_interval**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-ticker.ts:14](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-ticker.ts#L14)

___

### \_onTimeBound

• `Protected` **\_onTimeBound**: () => `void`

#### Type declaration

▸ (): `void`

##### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-ticker.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-ticker.ts#L16)

___

### \_parent

• `Protected` **\_parent**: [`DDiagramTickerParent`](../interfaces/DDiagramTickerParent.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-ticker.ts:13](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-ticker.ts#L13)

___

### \_timeoutId

• `Protected` `Optional` **\_timeoutId**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-ticker.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-ticker.ts#L15)

___

### \_values

• `Protected` **\_values**: [`EShapeDataValue`](../interfaces/EShapeDataValue.md)[]

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-ticker.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-ticker.ts#L17)

## Methods

### add

▸ **add**(`value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | [`EShapeDataValue`](../interfaces/EShapeDataValue.md) |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-ticker.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-ticker.ts#L28)

___

### getInterval

▸ **getInterval**(): `number`

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-ticker.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-ticker.ts#L38)

___

### onTime

▸ **onTime**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-ticker.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-ticker.ts#L44)

___

### start

▸ **start**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-ticker.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-ticker.ts#L32)

___

### stop

▸ **stop**(): `void`

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-ticker.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/d-diagram-ticker.ts#L56)
