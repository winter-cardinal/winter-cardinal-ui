[Winter Cardinal UI - v0.154.0](../index.md) / DViewImpl

# Class: DViewImpl

## Implements

- [`DView`](../interfaces/DView.md)

## Table of contents

### Constructors

- [constructor](DViewImpl.md#constructor)

### Properties

- [\_constraint](DViewImpl.md#_constraint)
- [\_dblClickZoomChecker](DViewImpl.md#_dblclickzoomchecker)
- [\_dblClickZoomModifier](DViewImpl.md#_dblclickzoommodifier)
- [\_dblClickZoomSpeed](DViewImpl.md#_dblclickzoomspeed)
- [\_dblclickZoomDuration](DViewImpl.md#_dblclickzoomduration)
- [\_gesture](DViewImpl.md#_gesture)
- [\_isDblClickZoomEnabled](DViewImpl.md#_isdblclickzoomenabled)
- [\_isWheelTranslationEnabled](DViewImpl.md#_iswheeltranslationenabled)
- [\_isWheelZoomEnabled](DViewImpl.md#_iswheelzoomenabled)
- [\_parent](DViewImpl.md#_parent)
- [\_toTarget](DViewImpl.md#_totarget)
- [\_transform](DViewImpl.md#_transform)
- [\_wheelTranslationChecker](DViewImpl.md#_wheeltranslationchecker)
- [\_wheelTranslationModifier](DViewImpl.md#_wheeltranslationmodifier)
- [\_wheelTranslationSpeed](DViewImpl.md#_wheeltranslationspeed)
- [\_wheelZoomChecker](DViewImpl.md#_wheelzoomchecker)
- [\_wheelZoomModifier](DViewImpl.md#_wheelzoommodifier)
- [\_wheelZoomSpeed](DViewImpl.md#_wheelzoomspeed)
- [\_workRect](DViewImpl.md#_workrect)
- [\_zoomKeepRatio](DViewImpl.md#_zoomkeepratio)
- [\_zoomMax](DViewImpl.md#_zoommax)
- [\_zoomMin](DViewImpl.md#_zoommin)
- [\_zoomPoint](DViewImpl.md#_zoompoint)
- [CONSTRAINT](DViewImpl.md#constraint)

### Accessors

- [gesture](DViewImpl.md#gesture)
- [position](DViewImpl.md#position)
- [scale](DViewImpl.md#scale)

### Methods

- [fit](DViewImpl.md#fit)
- [getThemeDefault](DViewImpl.md#getthemedefault)
- [getType](DViewImpl.md#gettype)
- [moveTo](DViewImpl.md#moveto)
- [onDblClick](DViewImpl.md#ondblclick)
- [onDown](DViewImpl.md#ondown)
- [onWheel](DViewImpl.md#onwheel)
- [reset](DViewImpl.md#reset)
- [stop](DViewImpl.md#stop)
- [toGlobal](DViewImpl.md#toglobal)
- [toLocal](DViewImpl.md#tolocal)
- [toNormalizedScale](DViewImpl.md#tonormalizedscale)
- [toTheme](DViewImpl.md#totheme)
- [transform](DViewImpl.md#transform)
- [zoom](DViewImpl.md#zoom)
- [zoomAt](DViewImpl.md#zoomat)
- [zoomAtGlobal](DViewImpl.md#zoomatglobal)
- [zoomIn](DViewImpl.md#zoomin)
- [zoomOut](DViewImpl.md#zoomout)

## Constructors

### constructor

• **new DViewImpl**(`parent`, `toTarget`, `options`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\> |
| `toTarget` | [`DViewToTarget`](../index.md#dviewtotarget) |
| `options` | `undefined` \| [`DViewOptions`](../interfaces/DViewOptions.md) |

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:58](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L58)

## Properties

### \_constraint

• `Protected` **\_constraint**: [`DViewConstraint`](../index.md#dviewconstraint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:30](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L30)

___

### \_dblClickZoomChecker

• `Protected` **\_dblClickZoomChecker**: [`DViewChecker`](../index.md#dviewchecker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:45](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L45)

___

### \_dblClickZoomModifier

• `Protected` **\_dblClickZoomModifier**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L44)

___

### \_dblClickZoomSpeed

• `Protected` **\_dblClickZoomSpeed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:43](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L43)

___

### \_dblclickZoomDuration

• `Protected` **\_dblclickZoomDuration**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:46](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L46)

___

### \_gesture

• `Protected` **\_gesture**: [`DViewGestureImpl`](DViewGestureImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L54)

___

### \_isDblClickZoomEnabled

• `Protected` **\_isDblClickZoomEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L42)

___

### \_isWheelTranslationEnabled

• `Protected` **\_isWheelTranslationEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L48)

___

### \_isWheelZoomEnabled

• `Protected` **\_isWheelZoomEnabled**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L37)

___

### \_parent

• `Protected` **\_parent**: [`DBase`](DBase.md)<[`DThemeBase`](../interfaces/DThemeBase.md), [`DBaseOptions`](../interfaces/DBaseOptions.md)<[`DThemeBase`](../interfaces/DThemeBase.md), `any`\>\>

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L28)

___

### \_toTarget

• `Protected` **\_toTarget**: [`DViewToTarget`](../index.md#dviewtotarget)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L29)

___

### \_transform

• `Protected` **\_transform**: [`DViewTransformImpl`](DViewTransformImpl.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:53](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L53)

___

### \_wheelTranslationChecker

• `Protected` **\_wheelTranslationChecker**: [`DViewChecker`](../index.md#dviewchecker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L51)

___

### \_wheelTranslationModifier

• `Protected` **\_wheelTranslationModifier**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:50](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L50)

___

### \_wheelTranslationSpeed

• `Protected` **\_wheelTranslationSpeed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:49](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L49)

___

### \_wheelZoomChecker

• `Protected` **\_wheelZoomChecker**: [`DViewChecker`](../index.md#dviewchecker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L40)

___

### \_wheelZoomModifier

• `Protected` **\_wheelZoomModifier**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L39)

___

### \_wheelZoomSpeed

• `Protected` **\_wheelZoomSpeed**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:38](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L38)

___

### \_workRect

• `Protected` **\_workRect**: `Rectangle`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L56)

___

### \_zoomKeepRatio

• `Protected` **\_zoomKeepRatio**: `boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L35)

___

### \_zoomMax

• `Protected` **\_zoomMax**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:34](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L34)

___

### \_zoomMin

• `Protected` **\_zoomMin**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:33](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L33)

___

### \_zoomPoint

• `Protected` **\_zoomPoint**: `Point`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L32)

___

### CONSTRAINT

▪ `Static` `Protected` **CONSTRAINT**: [`DViewConstraint`](../index.md#dviewconstraint)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L23)

## Accessors

### gesture

• `get` **gesture**(): [`DViewGesture`](../interfaces/DViewGesture.md)

#### Returns

[`DViewGesture`](../interfaces/DViewGesture.md)

#### Implementation of

[DView](../interfaces/DView.md).[gesture](../interfaces/DView.md#gesture)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:127](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L127)

___

### position

• `get` **position**(): [`DViewTargetPoint`](../interfaces/DViewTargetPoint.md)

#### Returns

[`DViewTargetPoint`](../interfaces/DViewTargetPoint.md)

#### Implementation of

[DView](../interfaces/DView.md).[position](../interfaces/DView.md#position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:277](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L277)

• `set` **position**(`position`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `position` | [`DViewTargetPoint`](../interfaces/DViewTargetPoint.md) |

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[position](../interfaces/DView.md#position)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:285](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L285)

___

### scale

• `get` **scale**(): [`DViewTargetPoint`](../interfaces/DViewTargetPoint.md)

#### Returns

[`DViewTargetPoint`](../interfaces/DViewTargetPoint.md)

#### Implementation of

[DView](../interfaces/DView.md).[scale](../interfaces/DView.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:251](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L251)

• `set` **scale**(`scale`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | [`DViewTargetPoint`](../interfaces/DViewTargetPoint.md) |

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[scale](../interfaces/DView.md#scale)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:259](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L259)

## Methods

### fit

▸ **fit**(`duration?`, `stop?`): `void`

Fits into a screen.

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration?` | `number` |
| `stop?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[fit](../interfaces/DView.md#fit)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:147](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L147)

___

### getThemeDefault

▸ `Protected` **getThemeDefault**(): [`DThemeView`](../interfaces/DThemeView.md)

#### Returns

[`DThemeView`](../interfaces/DThemeView.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:406](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L406)

___

### getType

▸ `Protected` **getType**(): `string`

#### Returns

`string`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:410](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L410)

___

### moveTo

▸ **moveTo**(`x`, `y`, `duration?`, `stop?`): `void`

Moves to the given position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `duration?` | `number` |
| `stop?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[moveTo](../interfaces/DView.md#moveto)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:269](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L269)

___

### onDblClick

▸ **onDblClick**(`e`, `interactionManager`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `MouseEvent` \| `TouchEvent` |
| `interactionManager` | `InteractionManager` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L366)

___

### onDown

▸ **onDown**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `InteractionEvent` |

#### Returns

`void`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:362](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L362)

___

### onWheel

▸ **onWheel**(`e`, `deltas`, `global`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `WheelEvent` |
| `deltas` | [`UtilWheelEventDeltas`](../interfaces/UtilWheelEventDeltas.md) |
| `global` | `Point` |

#### Returns

`boolean`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:319](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L319)

___

### reset

▸ **reset**(`duration?`, `stop?`): `void`

Resets a position and a scale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration?` | `number` |
| `stop?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[reset](../interfaces/DView.md#reset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L136)

___

### stop

▸ **stop**(): `void`

Stops an animation if exits.

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[stop](../interfaces/DView.md#stop)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:131](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L131)

___

### toGlobal

▸ **toGlobal**(`local`, `global`, `skipUpdate?`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `local` | `IPoint` |
| `global` | `IPoint` |
| `skipUpdate?` | `boolean` |

#### Returns

`IPoint`

#### Implementation of

[DView](../interfaces/DView.md).[toGlobal](../interfaces/DView.md#toglobal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L311)

___

### toLocal

▸ **toLocal**(`global`, `local`, `skipUpdate?`): `IPoint`

#### Parameters

| Name | Type |
| :------ | :------ |
| `global` | `IPoint` |
| `local` | `IPoint` |
| `skipUpdate?` | `boolean` |

#### Returns

`IPoint`

#### Implementation of

[DView](../interfaces/DView.md).[toLocal](../interfaces/DView.md#tolocal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:307](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L307)

___

### toNormalizedScale

▸ **toNormalizedScale**(`scale`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `scale` | `number` |

#### Returns

`number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:315](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L315)

___

### toTheme

▸ `Protected` **toTheme**(`options?`): ``null`` \| [`DThemeView`](../interfaces/DThemeView.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`DViewOptions`](../interfaces/DViewOptions.md) |

#### Returns

``null`` \| [`DThemeView`](../interfaces/DThemeView.md)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:394](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L394)

___

### transform

▸ **transform**(`x`, `y`, `scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Sets to the specified position and scale.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `duration?` | `number` |
| `stop?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[transform](../interfaces/DView.md#transform)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:293](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L293)

___

### zoom

▸ **zoom**(`scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Zooms in / out at the current position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `duration?` | `number` |
| `stop?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[zoom](../interfaces/DView.md#zoom)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:246](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L246)

___

### zoomAt

▸ **zoomAt**(`x`, `y`, `scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Zooms into the given position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `duration?` | `number` |
| `stop?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[zoomAt](../interfaces/DView.md#zoomat)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:205](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L205)

___

### zoomAtGlobal

▸ **zoomAtGlobal**(`x`, `y`, `scaleX`, `scaleY`, `duration?`, `stop?`): `void`

Zooms into the specified global position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `scaleX` | `number` |
| `scaleY` | `number` |
| `duration?` | `number` |
| `stop?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[zoomAtGlobal](../interfaces/DView.md#zoomatglobal)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L232)

___

### zoomIn

▸ **zoomIn**(`duration?`, `stop?`): `void`

Zooms in at the current position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration?` | `number` |
| `stop?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[zoomIn](../interfaces/DView.md#zoomin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:187](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L187)

___

### zoomOut

▸ **zoomOut**(`duration?`, `stop?`): `void`

Zooms out at the current position.

#### Parameters

| Name | Type |
| :------ | :------ |
| `duration?` | `number` |
| `stop?` | `boolean` |

#### Returns

`void`

#### Implementation of

[DView](../interfaces/DView.md).[zoomOut](../interfaces/DView.md#zoomout)

#### Defined in

[src/main/typescript/wcardinal/ui/d-view-impl.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.154.0/src/main/typescript/wcardinal/ui/d-view-impl.ts#L196)
