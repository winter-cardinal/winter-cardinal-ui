[Winter Cardinal UI - v0.205.1](../index.md) / DDiagramSerializedItem

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

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:277](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L277)

___

### 1

• **1**: `number`

A resource index number of a ID.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:280](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L280)

___

### 10

• **10**: `number`

A resource index number of a cursor.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L311)

___

### 11

• **11**: `number`

A resource index number of JSON.stringify(DDiagramSerializedText).

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:316](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L316)

___

### 12

• **12**: `number`

A resource index number of JSON.stringify(DDiagramSerializedData).

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:321](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L321)

___

### 13

• **13**: `number`

A radius.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:324](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L324)

___

### 14

• **14**: `number`

A corner.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:327](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L327)

___

### 15

• **15**: `number`

A resource index number of a shape-specific resource.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:330](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L330)

___

### 16

• **16**: `number`

A layer index number.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:333](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L333)

___

### 17

• **17**: `number`[]

Actions

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:336](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L336)

___

### 18

• **18**: `number`

A resource index number of an image.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:339](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L339)

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

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:351](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L351)

___

### 2

• **2**: `number`

A X-coordinate position.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:283](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L283)

___

### 20

• **20**: [`DDiagramSerializedItem`](DDiagramSerializedItem.md)[]

Children.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:354](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L354)

___

### 21

• **21**: `number`

A X pivot.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:357](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L357)

___

### 22

• **22**: `number`

A Y pivot.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:360](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L360)

___

### 23

• **23**: `number`

(interactive ? 1 : 0) | (unfocusable ? 2 : 0)

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L363)

___

### 24

• **24**: `number`

A resource index number of a shortcut.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L366)

___

### 25

• **25**: `number`

A resource index number of a title.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:369](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L369)

___

### 26

• **26**: `number`

UUID

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:372](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L372)

___

### 3

• **3**: `number`

A Y-coordinate position.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:286](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L286)

___

### 4

• **4**: `number`

A width.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:289](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L289)

___

### 5

• **5**: `number`

A height.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:292](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L292)

___

### 6

• **6**: `number`

A rotation.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:295](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L295)

___

### 7

• **7**: `number`

A skew.

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:298](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L298)

___

### 8

• **8**: `number`

A resource index number of JSON.stringify(DDiagramSerializedFill).

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:303](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L303)

___

### 9

• **9**: `number`

A resource index number of JSON.stringify(DDiagramSerializedStroke).

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.205.1/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L308)
