[Winter Cardinal UI - v0.407.0](../index.md) / ESnapperModifier

# Interface: ESnapperModifier

## Hierarchy

- `DisplayObject`

  ↳ **`ESnapperModifier`**

## Table of contents

### Properties

- [\_accessibleActive](ESnapperModifier.md#_accessibleactive)
- [\_accessibleDiv](ESnapperModifier.md#_accessiblediv)
- [\_bounds](ESnapperModifier.md#_bounds)
- [\_boundsID](ESnapperModifier.md#_boundsid)
- [\_boundsRect](ESnapperModifier.md#_boundsrect)
- [\_destroyed](ESnapperModifier.md#_destroyed)
- [\_enabledFilters](ESnapperModifier.md#_enabledfilters)
- [\_lastSortedIndex](ESnapperModifier.md#_lastsortedindex)
- [\_localBounds](ESnapperModifier.md#_localbounds)
- [\_localBoundsRect](ESnapperModifier.md#_localboundsrect)
- [\_mask](ESnapperModifier.md#_mask)
- [\_tempDisplayObjectParent](ESnapperModifier.md#_tempdisplayobjectparent)
- [\_zIndex](ESnapperModifier.md#_zindex)
- [accessible](ESnapperModifier.md#accessible)
- [accessibleChildren](ESnapperModifier.md#accessiblechildren)
- [accessibleHint](ESnapperModifier.md#accessiblehint)
- [accessiblePointerEvents](ESnapperModifier.md#accessiblepointerevents)
- [accessibleTitle](ESnapperModifier.md#accessibletitle)
- [accessibleType](ESnapperModifier.md#accessibletype)
- [alpha](ESnapperModifier.md#alpha)
- [angle](ESnapperModifier.md#angle)
- [buttonMode](ESnapperModifier.md#buttonmode)
- [cacheAsBitmap](ESnapperModifier.md#cacheasbitmap)
- [cursor](ESnapperModifier.md#cursor)
- [filterArea](ESnapperModifier.md#filterarea)
- [filters](ESnapperModifier.md#filters)
- [height](ESnapperModifier.md#height)
- [hitArea](ESnapperModifier.md#hitarea)
- [interactive](ESnapperModifier.md#interactive)
- [isMask](ESnapperModifier.md#ismask)
- [isSprite](ESnapperModifier.md#issprite)
- [localTransform](ESnapperModifier.md#localtransform)
- [mask](ESnapperModifier.md#mask)
- [name](ESnapperModifier.md#name)
- [parent](ESnapperModifier.md#parent)
- [pivot](ESnapperModifier.md#pivot)
- [position](ESnapperModifier.md#position)
- [renderable](ESnapperModifier.md#renderable)
- [rotation](ESnapperModifier.md#rotation)
- [scale](ESnapperModifier.md#scale)
- [skew](ESnapperModifier.md#skew)
- [transform](ESnapperModifier.md#transform)
- [visible](ESnapperModifier.md#visible)
- [width](ESnapperModifier.md#width)
- [worldAlpha](ESnapperModifier.md#worldalpha)
- [worldTransform](ESnapperModifier.md#worldtransform)
- [worldVisible](ESnapperModifier.md#worldvisible)
- [x](ESnapperModifier.md#x)
- [y](ESnapperModifier.md#y)
- [zIndex](ESnapperModifier.md#zindex)

### Methods

- [\_recursivePostUpdateTransform](ESnapperModifier.md#_recursivepostupdatetransform)
- [addListener](ESnapperModifier.md#addlistener)
- [destroy](ESnapperModifier.md#destroy)
- [disableTempParent](ESnapperModifier.md#disabletempparent)
- [displayObjectUpdateTransform](ESnapperModifier.md#displayobjectupdatetransform)
- [emit](ESnapperModifier.md#emit)
- [enableTempParent](ESnapperModifier.md#enabletempparent)
- [eventNames](ESnapperModifier.md#eventnames)
- [getBounds](ESnapperModifier.md#getbounds)
- [getGlobalPosition](ESnapperModifier.md#getglobalposition)
- [getLocalBounds](ESnapperModifier.md#getlocalbounds)
- [listenerCount](ESnapperModifier.md#listenercount)
- [listeners](ESnapperModifier.md#listeners)
- [off](ESnapperModifier.md#off)
- [on](ESnapperModifier.md#on)
- [once](ESnapperModifier.md#once)
- [removeAllListeners](ESnapperModifier.md#removealllisteners)
- [removeListener](ESnapperModifier.md#removelistener)
- [setParent](ESnapperModifier.md#setparent)
- [setTransform](ESnapperModifier.md#settransform)
- [toGlobal](ESnapperModifier.md#toglobal)
- [toLocal](ESnapperModifier.md#tolocal)
- [updateTransform](ESnapperModifier.md#updatetransform)

## Properties

### \_accessibleActive

• **\_accessibleActive**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

DisplayObject.\_accessibleActive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9051

___

### \_accessibleDiv

• **\_accessibleDiv**: `boolean`

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Todo`**

Needs docs.

#### Inherited from

DisplayObject.\_accessibleDiv

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9057

___

### \_bounds

• **\_bounds**: `Bounds`

The bounds object, this is used to calculate and store the bounds of the displayObject.

**`Member`**

PIXI.DisplayObject#_bounds

#### Inherited from

DisplayObject.\_bounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9173

___

### \_boundsID

• `Protected` **\_boundsID**: `number`

Flags the cached bounds as dirty.

**`Member`**

PIXI.DisplayObject#_boundsID

#### Inherited from

DisplayObject.\_boundsID

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9186

___

### \_boundsRect

• `Protected` **\_boundsRect**: `Bounds`

Cache of this display-object's bounds-rectangle.

**`Member`**

PIXI.DisplayObject#_boundsRect

#### Inherited from

DisplayObject.\_boundsRect

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9193

___

### \_destroyed

• `Protected` **\_destroyed**: `boolean`

If the object has been destroyed via destroy(). If true, it should not be used.

**`Member`**

PIXI.DisplayObject#_destroyed

#### Inherited from

DisplayObject.\_destroyed

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9214

___

### \_enabledFilters

• `Protected` **\_enabledFilters**: `Filter`[]

Currently enabled filters

**`Member`**

PIXI.DisplayObject#_enabledFilters

#### Inherited from

DisplayObject.\_enabledFilters

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9167

___

### \_lastSortedIndex

• `Protected` **\_lastSortedIndex**: `number`

Which index in the children array the display component was before the previous zIndex sort.
Used by containers to help sort objects with the same zIndex, by using previous array index as the decider.

**`Member`**

PIXI.DisplayObject#_lastSortedIndex

#### Inherited from

DisplayObject.\_lastSortedIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9136

___

### \_localBounds

• **\_localBounds**: `Bounds`

Local bounds object, swapped with `_bounds` when using `getLocalBounds()`.

**`Member`**

PIXI.DisplayObject#_localBounds

#### Inherited from

DisplayObject.\_localBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9179

___

### \_localBoundsRect

• `Protected` **\_localBoundsRect**: `Bounds`

Cache of this display-object's local-bounds rectangle.

**`Member`**

PIXI.DisplayObject#_localBoundsRect

#### Inherited from

DisplayObject.\_localBoundsRect

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9200

___

### \_mask

• `Protected` **\_mask**: ``null`` \| `Container` \| `MaskData`

The original, cached mask of the object.

**`Member`**

PIXI.DisplayObject#_mask

#### Inherited from

DisplayObject.\_mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9207

___

### \_tempDisplayObjectParent

• `Protected` **\_tempDisplayObjectParent**: `Container`

**`Member`**

#### Inherited from

DisplayObject.\_tempDisplayObjectParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9314

___

### \_zIndex

• `Protected` **\_zIndex**: `number`

The zIndex of the displayObject.
A higher value will mean it will be rendered on top of other displayObjects within the same container.

**`Member`**

PIXI.DisplayObject#_zIndex

#### Inherited from

DisplayObject.\_zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9144

___

### accessible

• **accessible**: `boolean`

Flag for if the object is accessible. If true AccessibilityManager will overlay a
  shadow div with attributes set

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

DisplayObject.accessible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9030

___

### accessibleChildren

• **accessibleChildren**: `boolean`

Setting to false will prevent any children inside this container to
be accessible. Defaults to true.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

```ts
true
```

#### Inherited from

DisplayObject.accessibleChildren

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9084

___

### accessibleHint

• **accessibleHint**: `string`

Sets the aria-label attribute of the shadow div

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

DisplayObject.accessibleHint

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9045

___

### accessiblePointerEvents

• **accessiblePointerEvents**: `string`

Specify the pointer-events the accessible div will use
Defaults to auto.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

```ts
'auto'
```

#### Inherited from

DisplayObject.accessiblePointerEvents

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9075

___

### accessibleTitle

• **accessibleTitle**: `string`

Sets the title attribute of the shadow div
If accessibleTitle AND accessibleHint has not been this will default to 'displayObject [tabIndex]'

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

DisplayObject.accessibleTitle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9038

___

### accessibleType

• **accessibleType**: `string`

Specify the type of div the accessible layer is. Screen readers treat the element differently
depending on this type. Defaults to button.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

**`Default`**

```ts
'button'
```

#### Inherited from

DisplayObject.accessibleType

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9066

___

### alpha

• **alpha**: `number`

The opacity of the object.

**`Member`**

PIXI.DisplayObject#alpha

#### Inherited from

DisplayObject.alpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9097

___

### angle

• **angle**: `number`

The angle of the object in degrees.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

DisplayObject.angle

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9401

___

### buttonMode

• **buttonMode**: `boolean`

If enabled, the mouse cursor use the pointer behavior when hovered over the displayObject if it is interactive
Setting this changes the 'cursor' property to `'pointer'`.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.buttonMode = true;
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

DisplayObject.buttonMode

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9483

___

### cacheAsBitmap

• **cacheAsBitmap**: `boolean`

Set this to true if you want this display object to be cached as a bitmap.
This basically takes a snap shot of the display object as it is at that moment. It can
provide a performance benefit for complex static displayObjects.
To remove simply set this property to `false`

IMPORTANT GOTCHA - Make sure that all your textures are preloaded BEFORE setting this property to true
as it will take a snapshot of what is currently there. If the textures have not loaded then they will not appear.

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

DisplayObject.cacheAsBitmap

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9510

___

### cursor

• **cursor**: `string`

This defines what cursor mode is used when the mouse cursor
is hovered over the displayObject.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.cursor = 'wait';
```

**`See`**

https://developer.mozilla.org/en/docs/Web/CSS/cursor

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

DisplayObject.cursor

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9497

___

### filterArea

• **filterArea**: `Rectangle`

The area the filter is applied to. This is used as more of an optimization
rather than figuring out the dimensions of the displayObject each frame you can set this rectangle.

Also works as an interaction mask.

**`Member`**

PIXI.DisplayObject#filterArea

#### Inherited from

DisplayObject.filterArea

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9153

___

### filters

• **filters**: `Filter`[]

Sets the filters for the displayObject.
* IMPORTANT: This is a WebGL only feature and will be ignored by the canvas renderer.
To remove filters simply set this property to `'null'`.

**`Member`**

PIXI.DisplayObject#filters

#### Inherited from

DisplayObject.filters

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9161

___

### height

• **height**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L18)

___

### hitArea

• **hitArea**: `IHitArea`

Interaction shape. Children will be hit first, then this shape will be checked.
Setting this will cause this shape to be checked in hit tests rather than the displayObject's bounds.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.hitArea = new PIXI.Rectangle(0, 0, 100, 100);
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

DisplayObject.hitArea

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9471

___

### interactive

• **interactive**: `boolean`

Enable interaction events for the DisplayObject. Touch, pointer and mouse
events will not be emitted unless `interactive` is set to `true`.

**`Example`**

```ts
const sprite = new PIXI.Sprite(texture);
sprite.interactive = true;
sprite.on('tap', (event) => {
   //handle event
});
```

**`Member`**

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

DisplayObject.interactive

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9459

___

### isMask

• **isMask**: `boolean`

Does any other displayObject use this object as a mask?

**`Member`**

PIXI.DisplayObject#isMask

#### Inherited from

DisplayObject.isMask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9224

___

### isSprite

• **isSprite**: `boolean`

used to fast check if a sprite is.. a sprite!

**`Member`**

PIXI.DisplayObject#isSprite

#### Inherited from

DisplayObject.isSprite

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9219

___

### localTransform

• `Readonly` **localTransform**: `Matrix`

Current transform of the object based on local factors: position, scale, other stuff.

**`Member`**

#### Inherited from

DisplayObject.localTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9359

___

### mask

• **mask**: ``null`` \| `Container` \| `MaskData`

Sets a mask for the displayObject. A mask is an object that limits the visibility of an
object to the shape of the mask applied to it. In PixiJS a regular mask must be a
PIXI.Graphics or a PIXI.Sprite object. This allows for much faster masking in canvas as it
utilities shape clipping. To remove a mask, set this property to `null`.

For sprite mask both alpha and red channel are used. Black mask is the same as transparent mask.

**`Example`**

```ts
const graphics = new PIXI.Graphics();
graphics.beginFill(0xFF3300);
graphics.drawRect(50, 250, 100, 100);
graphics.endFill();

const sprite = new PIXI.Sprite(texture);
sprite.mask = graphics;
```

**`Todo`**

At the moment, PIXI.CanvasRenderer doesn't support PIXI.Sprite as mask.

**`Member`**

#### Inherited from

DisplayObject.mask

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9437

___

### name

• **name**: `string`

The instance name of the object.

**`Memberof`**

PIXI.DisplayObject#

**`Member`**

name

#### Inherited from

DisplayObject.name

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9517

___

### parent

• **parent**: `Container`

The display object container that contains this display object.

**`Member`**

PIXI.DisplayObject#parent

#### Inherited from

DisplayObject.parent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9121

___

### pivot

• **pivot**: `ObservablePoint`

The pivot point of the displayObject that it rotates around.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

DisplayObject.pivot

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9380

___

### position

• **position**: `ObservablePoint`

The coordinate of the object relative to the local coordinates of the parent.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

DisplayObject.position

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9366

___

### renderable

• **renderable**: `boolean`

Can this object be rendered, if false the object will not be drawn but the updateTransform
methods will still be called.

Only affects recursive calls from parent. You can ask for bounds manually.

**`Member`**

PIXI.DisplayObject#renderable

#### Inherited from

DisplayObject.renderable

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9115

___

### rotation

• **rotation**: `number`

The rotation of the object in radians.
'rotation' and 'angle' have the same effect on a display object; rotation is in radians, angle is in degrees.

**`Member`**

#### Inherited from

DisplayObject.rotation

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9394

___

### scale

• **scale**: `ObservablePoint`

The scale factor of the object.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

DisplayObject.scale

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9373

___

### skew

• **skew**: `ObservablePoint`

The skew factor for the object in radians.
Assignment by value since pixi-v4.

**`Member`**

#### Inherited from

DisplayObject.skew

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9387

___

### transform

• **transform**: `Transform`

World transform and local transform of this object.
This will become read-only later, please do not assign anything there unless you know what are you doing.

**`Member`**

PIXI.DisplayObject#transform

#### Inherited from

DisplayObject.transform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9091

___

### visible

• **visible**: `boolean`

The visibility of the object. If false the object will not be drawn, and
the updateTransform function will not be called.

Only affects recursive calls from parent. You can ask for bounds or call updateTransform manually.

**`Member`**

PIXI.DisplayObject#visible

#### Inherited from

DisplayObject.visible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9106

___

### width

• **width**: `number`

#### Defined in

[src/main/typescript/wcardinal/ui/snapper/e-snapper.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.407.0/src/main/typescript/wcardinal/ui/snapper/e-snapper.ts#L17)

___

### worldAlpha

• `Readonly` **worldAlpha**: `number`

The multiplied alpha of the displayObject.

**`Member`**

PIXI.DisplayObject#worldAlpha

#### Inherited from

DisplayObject.worldAlpha

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9128

___

### worldTransform

• `Readonly` **worldTransform**: `Matrix`

Current transform of the object based on world (parent) factors.

**`Member`**

#### Inherited from

DisplayObject.worldTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9352

___

### worldVisible

• `Readonly` **worldVisible**: `boolean`

Indicates if the object is globally visible.

**`Member`**

#### Inherited from

DisplayObject.worldVisible

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9417

___

### x

• **x**: `number`

The position of the displayObject on the x axis relative to the local coordinates of the parent.
An alias to position.x

**`Member`**

#### Inherited from

DisplayObject.x

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9338

___

### y

• **y**: `number`

The position of the displayObject on the y axis relative to the local coordinates of the parent.
An alias to position.y

**`Member`**

#### Inherited from

DisplayObject.y

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9345

___

### zIndex

• **zIndex**: `number`

The zIndex of the displayObject.
If a container has the sortableChildren property set to true, children will be automatically
sorted by zIndex value; a higher value will mean it will be moved towards the end of the array,
and thus rendered on top of other displayObjects within the same container.

**`Member`**

#### Inherited from

DisplayObject.zIndex

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9410

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

node_modules/pixi.js/pixi.js.d.ts:9235

___

### addListener

▸ **addListener**(`event`, `fn`, `context?`): [`ESnapperModifier`](ESnapperModifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`ESnapperModifier`](ESnapperModifier.md)

#### Inherited from

DisplayObject.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25521

▸ **addListener**(`event`, `fn`, `context?`): [`ESnapperModifier`](ESnapperModifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`ESnapperModifier`](ESnapperModifier.md)

#### Inherited from

DisplayObject.addListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25523

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

node_modules/pixi.js/pixi.js.d.ts:9309

___

### disableTempParent

▸ **disableTempParent**(`cacheParent`): `void`

Pair method for `enableTempParent`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cacheParent` | `DisplayObject` | actual parent of element |

#### Returns

`void`

#### Inherited from

DisplayObject.disableTempParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9331

___

### displayObjectUpdateTransform

▸ **displayObjectUpdateTransform**(): `void`

DisplayObject default updateTransform, does not update children of container.
Will crash if there's no parent element.

#### Returns

`void`

**`Memberof`**

PIXI.DisplayObject#

**`Function`**

displayObjectUpdateTransform

#### Inherited from

DisplayObject.displayObjectUpdateTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9445

___

### emit

▸ **emit**(`event`, `...args`): `boolean`

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

node_modules/pixi.js/pixi.js.d.ts:25441

___

### enableTempParent

▸ **enableTempParent**(): `DisplayObject`

Used in Renderer, cacheAsBitmap and other places where you call an `updateTransform` on root

```
const cacheParent = elem.enableTempParent();
elem.updateTransform();
elem.disableTempParent(cacheParent);
```

#### Returns

`DisplayObject`

current parent

#### Inherited from

DisplayObject.enableTempParent

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9326

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

Return an array listing the events for which the emitter has registered listeners.

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

DisplayObject.eventNames

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25415

___

### getBounds

▸ **getBounds**(`skipUpdate?`, `rect?`): `Rectangle`

Retrieves the bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `skipUpdate?` | `boolean` | Setting to `true` will stop the transforms of the scene graph from being updated. This means the calculation returned MAY be out of date BUT will give you a nice performance boost. |
| `rect?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

DisplayObject.getBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9251

___

### getGlobalPosition

▸ **getGlobalPosition**(`point?`, `skipUpdate?`): `Point`

Returns the global position of the displayObject. Does not depend on object scale, rotation and pivot.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `point?` | `Point` | The point to write the global value to. |
| `skipUpdate?` | `boolean` | Setting to true will stop the transforms of the scene graph from being updated. This means the calculation returned MAY be out of date BUT will give you a nice performance boost. |

#### Returns

`Point`

The updated point.

**`Method`**

getGlobalPosition

**`Memberof`**

PIXI.DisplayObject#

#### Inherited from

DisplayObject.getGlobalPosition

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9529

___

### getLocalBounds

▸ **getLocalBounds**(`rect?`): `Rectangle`

Retrieves the local bounds of the displayObject as a rectangle object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rect?` | `Rectangle` | Optional rectangle to store the result of the bounds calculation. |

#### Returns

`Rectangle`

The rectangular bounding area.

#### Inherited from

DisplayObject.getLocalBounds

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9258

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

node_modules/pixi.js/pixi.js.d.ts:25432

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

node_modules/pixi.js/pixi.js.d.ts:25424

___

### off

▸ **off**(`event`, `fn?`, `context?`): [`ESnapperModifier`](ESnapperModifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`ESnapperModifier`](ESnapperModifier.md)

#### Inherited from

DisplayObject.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25518

▸ **off**(`event`, `fn?`, `context?`): [`ESnapperModifier`](ESnapperModifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`ESnapperModifier`](ESnapperModifier.md)

#### Inherited from

DisplayObject.off

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25520

___

### on

▸ **on**(`event`, `fn`, `context?`): [`ESnapperModifier`](ESnapperModifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`ESnapperModifier`](ESnapperModifier.md)

#### Inherited from

DisplayObject.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25507

▸ **on**(`event`, `fn`, `context?`): [`ESnapperModifier`](ESnapperModifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`ESnapperModifier`](ESnapperModifier.md)

#### Inherited from

DisplayObject.on

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25509

___

### once

▸ **once**(`event`, `fn`, `context?`): [`ESnapperModifier`](ESnapperModifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`ESnapperModifier`](ESnapperModifier.md)

#### Inherited from

DisplayObject.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25510

▸ **once**(`event`, `fn`, `context?`): [`ESnapperModifier`](ESnapperModifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn` | `Function` |
| `context?` | `any` |

#### Returns

[`ESnapperModifier`](ESnapperModifier.md)

#### Inherited from

DisplayObject.once

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25512

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ESnapperModifier`](ESnapperModifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `InteractionEventTypes` |

#### Returns

[`ESnapperModifier`](ESnapperModifier.md)

#### Inherited from

DisplayObject.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25516

▸ **removeAllListeners**(`event?`): [`ESnapperModifier`](ESnapperModifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`ESnapperModifier`](ESnapperModifier.md)

#### Inherited from

DisplayObject.removeAllListeners

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25517

___

### removeListener

▸ **removeListener**(`event`, `fn?`, `context?`): [`ESnapperModifier`](ESnapperModifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `InteractionEventTypes` |
| `fn?` | (`event`: `InteractionEvent`) => `void` |
| `context?` | `any` |

#### Returns

[`ESnapperModifier`](ESnapperModifier.md)

#### Inherited from

DisplayObject.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25513

▸ **removeListener**(`event`, `fn?`, `context?`): [`ESnapperModifier`](ESnapperModifier.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `fn?` | `Function` |
| `context?` | `any` |

#### Returns

[`ESnapperModifier`](ESnapperModifier.md)

#### Inherited from

DisplayObject.removeListener

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:25515

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

node_modules/pixi.js/pixi.js.d.ts:9286

___

### setTransform

▸ **setTransform**(`x?`, `y?`, `scaleX?`, `scaleY?`, `rotation?`, `skewX?`, `skewY?`, `pivotX?`, `pivotY?`): `DisplayObject`

Convenience function to set the position, scale, skew and pivot at once.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x?` | `number` | The X position |
| `y?` | `number` | The Y position |
| `scaleX?` | `number` | The X scale value |
| `scaleY?` | `number` | The Y scale value |
| `rotation?` | `number` | The rotation |
| `skewX?` | `number` | The X skew value |
| `skewY?` | `number` | The Y skew value |
| `pivotX?` | `number` | The X pivot value |
| `pivotY?` | `number` | The Y pivot value |

#### Returns

`DisplayObject`

The DisplayObject instance

#### Inherited from

DisplayObject.setTransform

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9301

___

### toGlobal

▸ **toGlobal**(`position`, `point?`, `skipUpdate?`): `Point`

Calculates the global position of the display object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPointData` | The world origin to calculate from. |
| `point?` | `Point` | A Point object in which to store the value, optional (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform. |

#### Returns

`Point`

A point object representing the position of this object.

#### Inherited from

DisplayObject.toGlobal

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9268

___

### toLocal

▸ **toLocal**(`position`, `from?`, `point?`, `skipUpdate?`): `Point`

Calculates the local position of the display object relative to another point.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `IPointData` | The world origin to calculate from. |
| `from?` | `DisplayObject` | The DisplayObject to calculate the global position from. |
| `point?` | `Point` | A Point object in which to store the value, optional (otherwise will create a new Point). |
| `skipUpdate?` | `boolean` | Should we skip the update transform |

#### Returns

`Point`

A point object representing the position of this object

#### Inherited from

DisplayObject.toLocal

#### Defined in

node_modules/pixi.js/pixi.js.d.ts:9279

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

node_modules/pixi.js/pixi.js.d.ts:9241
