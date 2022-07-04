[Winter Cardinal UI - v0.194.0](../index.md) / DInputAndLabelInput

# Interface: DInputAndLabelInput

## Hierarchy

- `DisplayObject`

  ↳ **`DInputAndLabelInput`**

## Table of contents

### Properties

- [\_accessibleActive](DInputAndLabelInput.md#_accessibleactive)
- [\_accessibleDiv](DInputAndLabelInput.md#_accessiblediv)
- [\_bounds](DInputAndLabelInput.md#_bounds)
- [\_destroyed](DInputAndLabelInput.md#_destroyed)
- [\_lastSortedIndex](DInputAndLabelInput.md#_lastsortedindex)
- [\_mask](DInputAndLabelInput.md#_mask)
- [\_tempDisplayObjectParent](DInputAndLabelInput.md#_tempdisplayobjectparent)
- [\_zIndex](DInputAndLabelInput.md#_zindex)
- [accessible](DInputAndLabelInput.md#accessible)
- [accessibleChildren](DInputAndLabelInput.md#accessiblechildren)
- [accessibleHint](DInputAndLabelInput.md#accessiblehint)
- [accessiblePointerEvents](DInputAndLabelInput.md#accessiblepointerevents)
- [accessibleTitle](DInputAndLabelInput.md#accessibletitle)
- [accessibleType](DInputAndLabelInput.md#accessibletype)
- [alpha](DInputAndLabelInput.md#alpha)
- [angle](DInputAndLabelInput.md#angle)
- [buttonMode](DInputAndLabelInput.md#buttonmode)
- [cacheAsBitmap](DInputAndLabelInput.md#cacheasbitmap)
- [cursor](DInputAndLabelInput.md#cursor)
- [filterArea](DInputAndLabelInput.md#filterarea)
- [filters](DInputAndLabelInput.md#filters)
- [height](DInputAndLabelInput.md#height)
- [hitArea](DInputAndLabelInput.md#hitarea)
- [interactive](DInputAndLabelInput.md#interactive)
- [isMask](DInputAndLabelInput.md#ismask)
- [isSprite](DInputAndLabelInput.md#issprite)
- [localTransform](DInputAndLabelInput.md#localtransform)
- [mask](DInputAndLabelInput.md#mask)
- [name](DInputAndLabelInput.md#name)
- [parent](DInputAndLabelInput.md#parent)
- [pivot](DInputAndLabelInput.md#pivot)
- [position](DInputAndLabelInput.md#position)
- [renderable](DInputAndLabelInput.md#renderable)
- [rotation](DInputAndLabelInput.md#rotation)
- [scale](DInputAndLabelInput.md#scale)
- [skew](DInputAndLabelInput.md#skew)
- [transform](DInputAndLabelInput.md#transform)
- [visible](DInputAndLabelInput.md#visible)
- [worldAlpha](DInputAndLabelInput.md#worldalpha)
- [worldTransform](DInputAndLabelInput.md#worldtransform)
- [worldVisible](DInputAndLabelInput.md#worldvisible)
- [x](DInputAndLabelInput.md#x)
- [y](DInputAndLabelInput.md#y)
- [zIndex](DInputAndLabelInput.md#zindex)

### Methods

- [\_recursivePostUpdateTransform](DInputAndLabelInput.md#_recursivepostupdatetransform)
- [addListener](DInputAndLabelInput.md#addlistener)
- [calculateBounds](DInputAndLabelInput.md#calculatebounds)
- [destroy](DInputAndLabelInput.md#destroy)
- [displayObjectUpdateTransform](DInputAndLabelInput.md#displayobjectupdatetransform)
- [emit](DInputAndLabelInput.md#emit)
- [eventNames](DInputAndLabelInput.md#eventnames)
- [getBounds](DInputAndLabelInput.md#getbounds)
- [getGlobalPosition](DInputAndLabelInput.md#getglobalposition)
- [getLocalBounds](DInputAndLabelInput.md#getlocalbounds)
- [listenerCount](DInputAndLabelInput.md#listenercount)
- [listeners](DInputAndLabelInput.md#listeners)
- [off](DInputAndLabelInput.md#off)
- [on](DInputAndLabelInput.md#on)
- [once](DInputAndLabelInput.md#once)
- [removeAllListeners](DInputAndLabelInput.md#removealllisteners)
- [removeListener](DInputAndLabelInput.md#removelistener)
- [render](DInputAndLabelInput.md#render)
- [setParent](DInputAndLabelInput.md#setparent)
- [setTransform](DInputAndLabelInput.md#settransform)
- [toGlobal](DInputAndLabelInput.md#toglobal)
- [toLocal](DInputAndLabelInput.md#tolocal)
- [updateTransform](DInputAndLabelInput.md#updatetransform)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

DisplayObject.\_accessibleActive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8940

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`todo`** Needs docs.

#### Inherited from

DisplayObject.\_accessibleDiv

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8946

___

### \_bounds

• `Protected` **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`member`** {PIXI.Bounds} PIXI.DisplayObject#_bounds

#### Inherited from

DisplayObject.\_bounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9064

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`member`** {boolean} PIXI.DisplayObject#_destroyed

#### Inherited from

DisplayObject.\_destroyed

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9078

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`member`** {number} PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

DisplayObject.\_lastSortedIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9032

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Graphics` \| `Sprite`

The original, cached mask of the object.

**`member`** {PIXI.Graphics|PIXI.Sprite|null} PIXI.DisplayObject#_mask

#### Inherited from

DisplayObject.\_mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9071

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `DisplayObject`

**`member`** {PIXI.DisplayObject}

#### Inherited from

DisplayObject.\_tempDisplayObjectParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9093

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`member`** {number} PIXI.DisplayObject#_zIndex

#### Inherited from

DisplayObject.\_zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9040

___

### accessible

• **accessible**: `boolean`

 Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

DisplayObject.accessible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8919

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

**`default`** true

#### Inherited from

DisplayObject.accessibleChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8973

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

DisplayObject.accessibleHint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8934

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'auto'

#### Inherited from

DisplayObject.accessiblePointerEvents

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8964

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`member`** {?string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

DisplayObject.accessibleTitle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8927

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

**`default`** 'button'

#### Inherited from

DisplayObject.accessibleType

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8955

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`member`** {number} PIXI.DisplayObject#alpha

#### Inherited from

DisplayObject.alpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8992

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

DisplayObject.angle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9254

___

### buttonMode

• **buttonMode**: `boolean`

If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
Setting this changes the 'cursor' property to `'pointer'`.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.buttonMode = true;

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

DisplayObject.buttonMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9336

___

### cacheAsBitmap

• **cacheAsBitmap**: `boolean`

Set this to true if you want this display object to be cached as a bitmap.
This basically takes a snap shot of the display object as it is at that moment. It can
provide a performance benefit for complex static displayObjects.
To remove simply set this property to `false`

IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

DisplayObject.cacheAsBitmap

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9363

___

### cursor

• **cursor**: `string`

This defines what cursor mode is used when the mouse cursor
is hovered over the displayObject.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.cursor = 'wait';

**`see`** https://developer.mozilla.org/en/docs/Web/CSS/cursor

**`member`** {string}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

DisplayObject.cursor

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9350

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`member`** {?PIXI.Rectangle} PIXI.DisplayObject#filterArea

#### Inherited from

DisplayObject.filterArea

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9049

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`member`** {?PIXI.Filter[]} PIXI.DisplayObject#filters

#### Inherited from

DisplayObject.filters

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9057

___

### height

• `Readonly` **height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/d-input-and-label.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.194.0/src/main/typescript/wcardinal/ui/d-input-and-label.ts#L17)

___

### hitArea

• **hitArea**: `IHitArea`

Interaction shape. Children will be hit first, then this shape will be checked.
Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);

**`member`** {PIXI.IHitArea}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

DisplayObject.hitArea

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9324

___

### interactive

• **interactive**: `boolean`

Enable interaction events for the DisplayObject. Touch, pointer and mouse
events will not be emitted unless `interactive` is set to `true`.

**`example`**
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.on('tap', (event) => {
   //handle event
});

**`member`** {boolean}

**`memberof`** PIXI.DisplayObject#

#### Inherited from

DisplayObject.interactive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9312

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`member`** {boolean} PIXI.DisplayObject#isMask

#### Inherited from

DisplayObject.isMask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9088

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`member`** {boolean} PIXI.DisplayObject#isSprite

#### Inherited from

DisplayObject.isSprite

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9083

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

DisplayObject.localTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9212

___

### mask

• **mask**: `Container` \| `MaskData`

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it. In PixiJS a regular mask must be a
{@link PIXI.Graphics} or a {@link PIXI.Sprite} object. This allows for much faster masking in canvas as it
utilities shape clipping. To remove a mask, set this property to `null`.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

**`example`**
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFF3300);
graphics.drawRect(50, 250, 100, 100);
graphics.endFill();

const sprite = new PIXI.Sprite(texture);
sprite.mask = graphics;

**`todo`** At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.

**`member`** {PIXI.Container|PIXI.MaskData}

#### Inherited from

DisplayObject.mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9290

___

### name

• **name**: `string`

The instance name of the object.

**`memberof`** PIXI.DisplayObject#

**`member`** {string} name

#### Inherited from

DisplayObject.name

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9370

___

### parent

• `Readonly` **parent**: `Container`

The display object container that contains this display object.

**`member`** {PIXI.Container} PIXI.DisplayObject#parent

**`readonly`**

#### Inherited from

DisplayObject.parent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9017

___

### pivot

• **pivot**: `IPoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

DisplayObject.pivot

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9233

___

### position

• **position**: `IPoint`

The coordinate of the object relative to the local coordinates of the parent.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

DisplayObject.position

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9219

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`member`** {boolean} PIXI.DisplayObject#renderable

#### Inherited from

DisplayObject.renderable

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9010

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`member`** {number}

#### Inherited from

DisplayObject.rotation

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9247

___

### scale

• **scale**: `IPoint`

The scale factor of the object.
Assignment by value since pixi-v4.

**`member`** {PIXI.IPoint}

#### Inherited from

DisplayObject.scale

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9226

___

### skew

• **skew**: `ObservablePoint`

The skew factor for the object in radians.
Assignment by value since pixi-v4.

**`member`** {PIXI.ObservablePoint}

#### Inherited from

DisplayObject.skew

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9240

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`member`** {PIXI.Transform} PIXI.DisplayObject#transform

#### Inherited from

DisplayObject.transform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:8986

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`member`** {boolean} PIXI.DisplayObject#visible

#### Inherited from

DisplayObject.visible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9001

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`member`** {number} PIXI.DisplayObject#worldAlpha

**`readonly`**

#### Inherited from

DisplayObject.worldAlpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9024

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`member`** {PIXI.Matrix}

**`readonly`**

#### Inherited from

DisplayObject.worldTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9205

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`member`** {boolean}

**`readonly`**

#### Inherited from

DisplayObject.worldVisible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9270

___

### x

• **x**: `number`

The position of the displayObject on the x axis relative to the local coordinates of the parent.
An alias to position.x

**`member`** {number}

#### Inherited from

DisplayObject.x

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9191

___

### y

• **y**: `number`

The position of the displayObject on the y axis relative to the local coordinates of the parent.
An alias to position.y

**`member`** {number}

#### Inherited from

DisplayObject.y

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9198

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`member`** {number}

#### Inherited from

DisplayObject.zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9263

## Methods

### \_recursivePostUpdateTransform

▸ **_recursivePostUpdateTransform**(): `void`

Recursively updates transform of all objects from the root to this one
internal function for toLocal()

#### Returns

`void`

#### Inherited from

DisplayObject.\_recursivePostUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9110

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Inherited from

DisplayObject.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24103

▸ **addListener**(`event`, `fn`, `context?`): [`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Inherited from

DisplayObject.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24105

___

### calculateBounds

▸ **calculateBounds**(): `void`

Recalculates the bounds of the display object.

Does nothing by default and can be overwritten in a parent class.

#### Returns

`void`

#### Inherited from

DisplayObject.calculateBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9105

___

### destroy

▸ **destroy**(): `void`

Base destroy method for generic display objects. This will automatically
remove the display object from its parent Container as well as remove
all current event listeners and internal references. Do not use a DisplayObject
after calling `destroy()`.

#### Returns

`void`

#### Inherited from

DisplayObject.destroy

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9184

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

**`memberof`** PIXI.DisplayObject#

**`function`** displayObjectUpdateTransform

#### Returns

`void`

#### Inherited from

DisplayObject.displayObjectUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9298

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

Calls each of the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |
| `...args` | `any`[] | Arguments that are passed to registered listeners |

#### Returns

`boolean`

`true` if the event had listeners, else `false`.

#### Inherited from

DisplayObject.emit

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24022

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

DisplayObject.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:23996

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `rect?`): `Rectangle`

Retrieves the bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `skipUpdate?` | `boolean` |
| `rect?` | `Rectangle` |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

DisplayObject.getBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9120

___

### getGlobalPosition

▸ **getGlobalPosition**(`point?`, `skipUpdate?`): `Point`

Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.

**`method`** getGlobalPosition

**`memberof`** PIXI.DisplayObject#

#### Parameters

| Name | Type |
| :------ | :------ |
| `point?` | `Point` |
| `skipUpdate?` | `boolean` |

#### Returns

`Point`

The updated point.

#### Inherited from

DisplayObject.getGlobalPosition

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9382

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`): `Rectangle`

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `rect?` | `Rectangle` |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

DisplayObject.getLocalBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9127

___

### listenerCount

▸ **listenerCount**(`event`): `number`

Return the number of listeners listening to a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`number`

#### Inherited from

DisplayObject.listenerCount

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24013

___

### listeners

▸ **listeners**(`event`): `Function`[]

Return the listeners registered for a given event.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `event` | `string` \| `symbol` | The event name. |

#### Returns

`Function`[]

#### Inherited from

DisplayObject.listeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24005

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Inherited from

DisplayObject.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24100

▸ **off**(`event`, `fn?`, `context?`): [`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Inherited from

DisplayObject.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24102

___

### on

▸ **on**(`event`, `fn`, `context?`): [`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Inherited from

DisplayObject.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24089

▸ **on**(`event`, `fn`, `context?`): [`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Inherited from

DisplayObject.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24091

___

### once

▸ **once**(`event`, `fn`, `context?`): [`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Inherited from

DisplayObject.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24092

▸ **once**(`event`, `fn`, `context?`): [`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Inherited from

DisplayObject.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24094

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Inherited from

DisplayObject.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24098

▸ **removeAllListeners**(`event?`): [`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Inherited from

DisplayObject.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24099

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Inherited from

DisplayObject.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24095

▸ **removeListener**(`event`, `fn?`, `context?`): [`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`DInputAndLabelInput`](DInputAndLabelInput.md)

#### Inherited from

DisplayObject.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:24097

___

### render

▸ **render**(`renderer`): `void`

Renders the object using the WebGL renderer.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `renderer` | `Renderer` | The renderer. |

#### Returns

`void`

#### Inherited from

DisplayObject.render

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9154

___

### setParent

▸ **setParent**(`container`): `Container`

Set the parent Container of this DisplayObject.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `container` | `Container` | The Container to add this DisplayObject to. |

#### Returns

`Container`

The Container that this DisplayObject was added to.

#### Inherited from

DisplayObject.setParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9161

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): `DisplayObject`

Convenience function to set the position, scale, skew and pivot at once.

#### Parameters

| Name | Type |
| :------ | :------ |
| `x?` | `number` |
| `y?` | `number` |
| `scaleX?` | `number` |
| `scaleY?` | `number` |
| `rotation?` | `number` |
| `skewX?` | `number` |
| `skewY?` | `number` |
| `pivotX?` | `number` |
| `pivotY?` | `number` |

#### Returns

`DisplayObject`

The DisplayObject instance

#### Inherited from

DisplayObject.setTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9176

___

### toGlobal

▸ **toGlobal**(`position`, `point?`, `skipUpdate?`): `IPoint`

Calculates the global position of the display object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `point?` | `IPoint` | - |
| `skipUpdate?` | `boolean` | - |

#### Returns

`IPoint`

A point object representing the position of this object.

#### Inherited from

DisplayObject.toGlobal

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9137

___

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `IPoint`

Calculates the local position of the display object relative to another point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPoint` | The world origin to calculate from. |
| `from?` | `DisplayObject` | - |
| `point?` | `IPoint` | - |
| `skipUpdate?` | `boolean` | - |

#### Returns

`IPoint`

A point object representing the position of this object

#### Inherited from

DisplayObject.toLocal

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9148

___

### updateTransform

▸ **updateTransform**(): `void`

Updates the object transform for rendering.

TODO - Optimization pass!

#### Returns

`void`

#### Inherited from

DisplayObject.updateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9099
