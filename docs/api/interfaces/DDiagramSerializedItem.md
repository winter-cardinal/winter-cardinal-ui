[Winter Cardinal UI - v0.179.0](../index.md) / DDiagramSerializedItem

# Interface: DDiagramSerializedItem

A serialized item.

## Table of contents

### Properties

- [0](DDiagramSerializedItem.md#0)
- [1](DDiagramSerializedItem.md#1)
- [10](DDiagramSerializedItem.md#10)
- [11](DDiagramSerializedItem.md#11)
- [12](DDiagramSerializedItem.md#12)
- [13](DDiagramSerializedItem.md#13)
- [14](DDiagramSerializedItem.md#14)
- [15](DDiagramSerializedItem.md#15)
- [16](DDiagramSerializedItem.md#16)
- [17](DDiagramSerializedItem.md#17)
- [18](DDiagramSerializedItem.md#18)
- [19](DDiagramSerializedItem.md#19)
- [2](DDiagramSerializedItem.md#2)
- [20](DDiagramSerializedItem.md#20)
- [21](DDiagramSerializedItem.md#21)
- [22](DDiagramSerializedItem.md#22)
- [23](DDiagramSerializedItem.md#23)
- [24](DDiagramSerializedItem.md#24)
- [25](DDiagramSerializedItem.md#25)
- [26](DDiagramSerializedItem.md#26)
- [3](DDiagramSerializedItem.md#3)
- [4](DDiagramSerializedItem.md#4)
- [5](DDiagramSerializedItem.md#5)
- [6](DDiagramSerializedItem.md#6)
- [7](DDiagramSerializedItem.md#7)
- [8](DDiagramSerializedItem.md#8)
- [9](DDiagramSerializedItem.md#9)

## Properties

### 0

• **0**: `number`

A type.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:272](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L272)

___

### 1

• **1**: `number`

A resource index number of a ID.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:275](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L275)

___

### 10

• **10**: `number`

A resource index number of a cursor.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:306](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L306)

___

### 11

• **11**: `number`

A resource index number of JSON.stringify(DDiagramSerializedText).

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L311)

___

### 12

• **12**: `number`

A resource index number of JSON.stringify(DDiagramSerializedData).

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:316](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L316)

___

### 13

• **13**: `number`

A radius.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L319)

___

### 14

• **14**: `number`

A corner.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:322](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L322)

___

### 15

• **15**: `number`

A resource index number of a shape-specific resource.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:325](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L325)

___

### 16

• **16**: `number`

A layer index number.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:328](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L328)

___

### 17

• **17**: `number`[]

Actions

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:331](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L331)

___

### 18

• **18**: `number`

A resource index number of an image.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:334](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L334)

___

### 19

• **19**: `number`

A resource index number of a stringified serialized gradient.
A stringified serialized gradient is a stringified number array,
JSON.stringify(number[]).

* The first number in the array is a direction in degree.
* Each number at the index 3N + 1 is a color of a N-th point.
* Each number at the index 3N + 2 is a alpha of a N-th point.
* Each number at the index 3N + 3 is a position of a N-th point whose range is [0, 1].

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:346](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L346)

___

### 2

• **2**: `number`

A X-coordinate position.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:278](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L278)

___

### 20

• **20**: [`DDiagramSerializedItem`](DDiagramSerializedItem.md)[]

Children.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:349](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L349)

___

### 21

• **21**: `number`

A X pivot.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:352](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L352)

___

### 22

• **22**: `number`

A Y pivot.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:355](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L355)

___

### 23

• **23**: `number`

(interactive ? 1 : 0) | (unfocusable ? 2 : 0)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:358](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L358)

___

### 24

• **24**: `number`

A resource index number of a shortcut.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:361](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L361)

___

### 25

• **25**: `number`

A resource index number of a title.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:364](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L364)

___

### 26

• **26**: `number`

UUID

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L367)

___

### 3

• **3**: `number`

A Y-coordinate position.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:281](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L281)

___

### 4

• **4**: `number`

A width.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L284)

___

### 5

• **5**: `number`

A height.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:287](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L287)

___

### 6

• **6**: `number`

A rotation.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:290](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L290)

___

### 7

• **7**: `number`

A skew.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:293](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L293)

___

### 8

• **8**: `number`

A resource index number of JSON.stringify(DDiagramSerializedFill).

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:298](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L298)

___

### 9

• **9**: `number`

A resource index number of JSON.stringify(DDiagramSerializedStroke).

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:303](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.179.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L303)
