[Winter Cardinal UI - v0.414.0](../index.md) / EShapeStateSetImplObservable

# Class: EShapeStateSetImplObservable

## Hierarchy

- [`DBaseStateSetImplObservable`](DBaseStateSetImplObservable.md)

  ↳ **`EShapeStateSetImplObservable`**

## Implements

- [`EShapeStateSet`](../interfaces/EShapeStateSet.md)

## Table of contents

### Constructors

- [constructor](EShapeStateSetImplObservable.md#constructor)

### Properties

- [\_blinker](EShapeStateSetImplObservable.md#_blinker)
- [\_doSave](EShapeStateSetImplObservable.md#_dosave)
- [\_isLocked](EShapeStateSetImplObservable.md#_islocked)
- [\_isSaved](EShapeStateSetImplObservable.md#_issaved)
- [\_local](EShapeStateSetImplObservable.md#_local)
- [\_onChange](EShapeStateSetImplObservable.md#_onchange)
- [\_parent](EShapeStateSetImplObservable.md#_parent)
- [\_saved](EShapeStateSetImplObservable.md#_saved)
- [\_ticker](EShapeStateSetImplObservable.md#_ticker)

### Accessors

- [blinker](EShapeStateSetImplObservable.md#blinker)
- [inActivated](EShapeStateSetImplObservable.md#inactivated)
- [inActive](EShapeStateSetImplObservable.md#inactive)
- [inAlternated](EShapeStateSetImplObservable.md#inalternated)
- [inChanged](EShapeStateSetImplObservable.md#inchanged)
- [inClicked](EShapeStateSetImplObservable.md#inclicked)
- [inDblClicked](EShapeStateSetImplObservable.md#indblclicked)
- [inDeactivated](EShapeStateSetImplObservable.md#indeactivated)
- [inDisabled](EShapeStateSetImplObservable.md#indisabled)
- [inDown](EShapeStateSetImplObservable.md#indown)
- [inEnabled](EShapeStateSetImplObservable.md#inenabled)
- [inFailed](EShapeStateSetImplObservable.md#infailed)
- [inFocusReverse](EShapeStateSetImplObservable.md#infocusreverse)
- [inFocusRoot](EShapeStateSetImplObservable.md#infocusroot)
- [inFocusable](EShapeStateSetImplObservable.md#infocusable)
- [inFocused](EShapeStateSetImplObservable.md#infocused)
- [inGesturing](EShapeStateSetImplObservable.md#ingesturing)
- [inHovered](EShapeStateSetImplObservable.md#inhovered)
- [inInvalid](EShapeStateSetImplObservable.md#ininvalid)
- [inPressed](EShapeStateSetImplObservable.md#inpressed)
- [inProcessing](EShapeStateSetImplObservable.md#inprocessing)
- [inReadOnly](EShapeStateSetImplObservable.md#inreadonly)
- [inRightClicked](EShapeStateSetImplObservable.md#inrightclicked)
- [inRightDown](EShapeStateSetImplObservable.md#inrightdown)
- [inRightPressed](EShapeStateSetImplObservable.md#inrightpressed)
- [inRightUp](EShapeStateSetImplObservable.md#inrightup)
- [inRightUpOutside](EShapeStateSetImplObservable.md#inrightupoutside)
- [inSucceeded](EShapeStateSetImplObservable.md#insucceeded)
- [inUnfocusable](EShapeStateSetImplObservable.md#inunfocusable)
- [inUp](EShapeStateSetImplObservable.md#inup)
- [inUpOutside](EShapeStateSetImplObservable.md#inupoutside)
- [inWarned](EShapeStateSetImplObservable.md#inwarned)
- [isActionable](EShapeStateSetImplObservable.md#isactionable)
- [isActivated](EShapeStateSetImplObservable.md#isactivated)
- [isActive](EShapeStateSetImplObservable.md#isactive)
- [isAlternated](EShapeStateSetImplObservable.md#isalternated)
- [isChanged](EShapeStateSetImplObservable.md#ischanged)
- [isClicked](EShapeStateSetImplObservable.md#isclicked)
- [isDblClicked](EShapeStateSetImplObservable.md#isdblclicked)
- [isDeactivated](EShapeStateSetImplObservable.md#isdeactivated)
- [isDisabled](EShapeStateSetImplObservable.md#isdisabled)
- [isDown](EShapeStateSetImplObservable.md#isdown)
- [isEnabled](EShapeStateSetImplObservable.md#isenabled)
- [isFailed](EShapeStateSetImplObservable.md#isfailed)
- [isFocusReverse](EShapeStateSetImplObservable.md#isfocusreverse)
- [isFocusRoot](EShapeStateSetImplObservable.md#isfocusroot)
- [isFocusable](EShapeStateSetImplObservable.md#isfocusable)
- [isFocused](EShapeStateSetImplObservable.md#isfocused)
- [isGesturing](EShapeStateSetImplObservable.md#isgesturing)
- [isHovered](EShapeStateSetImplObservable.md#ishovered)
- [isInvalid](EShapeStateSetImplObservable.md#isinvalid)
- [isPressed](EShapeStateSetImplObservable.md#ispressed)
- [isProcessing](EShapeStateSetImplObservable.md#isprocessing)
- [isReadOnly](EShapeStateSetImplObservable.md#isreadonly)
- [isRightClicked](EShapeStateSetImplObservable.md#isrightclicked)
- [isRightDown](EShapeStateSetImplObservable.md#isrightdown)
- [isRightPressed](EShapeStateSetImplObservable.md#isrightpressed)
- [isRightUp](EShapeStateSetImplObservable.md#isrightup)
- [isRightUpOutside](EShapeStateSetImplObservable.md#isrightupoutside)
- [isSucceeded](EShapeStateSetImplObservable.md#issucceeded)
- [isUnfocusable](EShapeStateSetImplObservable.md#isunfocusable)
- [isUp](EShapeStateSetImplObservable.md#isup)
- [isUpOutside](EShapeStateSetImplObservable.md#isupoutside)
- [isWarned](EShapeStateSetImplObservable.md#iswarned)
- [local](EShapeStateSetImplObservable.md#local)
- [onActivated](EShapeStateSetImplObservable.md#onactivated)
- [onActive](EShapeStateSetImplObservable.md#onactive)
- [onAlternated](EShapeStateSetImplObservable.md#onalternated)
- [onChanged](EShapeStateSetImplObservable.md#onchanged)
- [onClicked](EShapeStateSetImplObservable.md#onclicked)
- [onDblClicked](EShapeStateSetImplObservable.md#ondblclicked)
- [onDeactivated](EShapeStateSetImplObservable.md#ondeactivated)
- [onDisabled](EShapeStateSetImplObservable.md#ondisabled)
- [onDown](EShapeStateSetImplObservable.md#ondown)
- [onEnabled](EShapeStateSetImplObservable.md#onenabled)
- [onFailed](EShapeStateSetImplObservable.md#onfailed)
- [onFocusReverse](EShapeStateSetImplObservable.md#onfocusreverse)
- [onFocusRoot](EShapeStateSetImplObservable.md#onfocusroot)
- [onFocusable](EShapeStateSetImplObservable.md#onfocusable)
- [onFocused](EShapeStateSetImplObservable.md#onfocused)
- [onGesturing](EShapeStateSetImplObservable.md#ongesturing)
- [onHovered](EShapeStateSetImplObservable.md#onhovered)
- [onInvalid](EShapeStateSetImplObservable.md#oninvalid)
- [onPressed](EShapeStateSetImplObservable.md#onpressed)
- [onProcessing](EShapeStateSetImplObservable.md#onprocessing)
- [onReadOnly](EShapeStateSetImplObservable.md#onreadonly)
- [onRightClicked](EShapeStateSetImplObservable.md#onrightclicked)
- [onRightDown](EShapeStateSetImplObservable.md#onrightdown)
- [onRightPressed](EShapeStateSetImplObservable.md#onrightpressed)
- [onRightUp](EShapeStateSetImplObservable.md#onrightup)
- [onRightUpOutside](EShapeStateSetImplObservable.md#onrightupoutside)
- [onSucceeded](EShapeStateSetImplObservable.md#onsucceeded)
- [onUnfocusable](EShapeStateSetImplObservable.md#onunfocusable)
- [onUp](EShapeStateSetImplObservable.md#onup)
- [onUpOutside](EShapeStateSetImplObservable.md#onupoutside)
- [onWarned](EShapeStateSetImplObservable.md#onwarned)
- [parent](EShapeStateSetImplObservable.md#parent)
- [saved](EShapeStateSetImplObservable.md#saved)
- [ticker](EShapeStateSetImplObservable.md#ticker)
- [underActivated](EShapeStateSetImplObservable.md#underactivated)
- [underActive](EShapeStateSetImplObservable.md#underactive)
- [underAlternated](EShapeStateSetImplObservable.md#underalternated)
- [underChanged](EShapeStateSetImplObservable.md#underchanged)
- [underClicked](EShapeStateSetImplObservable.md#underclicked)
- [underDblClicked](EShapeStateSetImplObservable.md#underdblclicked)
- [underDeactivated](EShapeStateSetImplObservable.md#underdeactivated)
- [underDisabled](EShapeStateSetImplObservable.md#underdisabled)
- [underDown](EShapeStateSetImplObservable.md#underdown)
- [underEnabled](EShapeStateSetImplObservable.md#underenabled)
- [underFailed](EShapeStateSetImplObservable.md#underfailed)
- [underFocusReverse](EShapeStateSetImplObservable.md#underfocusreverse)
- [underFocusRoot](EShapeStateSetImplObservable.md#underfocusroot)
- [underFocusable](EShapeStateSetImplObservable.md#underfocusable)
- [underFocused](EShapeStateSetImplObservable.md#underfocused)
- [underGesturing](EShapeStateSetImplObservable.md#undergesturing)
- [underHovered](EShapeStateSetImplObservable.md#underhovered)
- [underInvalid](EShapeStateSetImplObservable.md#underinvalid)
- [underPressed](EShapeStateSetImplObservable.md#underpressed)
- [underProcessing](EShapeStateSetImplObservable.md#underprocessing)
- [underReadOnly](EShapeStateSetImplObservable.md#underreadonly)
- [underRightClicked](EShapeStateSetImplObservable.md#underrightclicked)
- [underRightDown](EShapeStateSetImplObservable.md#underrightdown)
- [underRightPressed](EShapeStateSetImplObservable.md#underrightpressed)
- [underRightUp](EShapeStateSetImplObservable.md#underrightup)
- [underRightUpOutside](EShapeStateSetImplObservable.md#underrightupoutside)
- [underSucceeded](EShapeStateSetImplObservable.md#undersucceeded)
- [underUnfocusable](EShapeStateSetImplObservable.md#underunfocusable)
- [underUp](EShapeStateSetImplObservable.md#underup)
- [underUpOutside](EShapeStateSetImplObservable.md#underupoutside)
- [underWarned](EShapeStateSetImplObservable.md#underwarned)

### Methods

- [add](EShapeStateSetImplObservable.md#add)
- [addAll](EShapeStateSetImplObservable.md#addall)
- [addAllObject](EShapeStateSetImplObservable.md#addallobject)
- [addAllString](EShapeStateSetImplObservable.md#addallstring)
- [begin](EShapeStateSetImplObservable.md#begin)
- [checkAdded](EShapeStateSetImplObservable.md#checkadded)
- [checkAddedsObject](EShapeStateSetImplObservable.md#checkaddedsobject)
- [checkAddedsString](EShapeStateSetImplObservable.md#checkaddedsstring)
- [checkRemoved](EShapeStateSetImplObservable.md#checkremoved)
- [checkRemovedsObject](EShapeStateSetImplObservable.md#checkremovedsobject)
- [checkRemovedsString](EShapeStateSetImplObservable.md#checkremovedsstring)
- [clear](EShapeStateSetImplObservable.md#clear)
- [copy](EShapeStateSetImplObservable.md#copy)
- [doSet](EShapeStateSetImplObservable.md#doset)
- [each](EShapeStateSetImplObservable.md#each)
- [end](EShapeStateSetImplObservable.md#end)
- [in](EShapeStateSetImplObservable.md#in)
- [is](EShapeStateSetImplObservable.md#is)
- [lock](EShapeStateSetImplObservable.md#lock)
- [newBlinker](EShapeStateSetImplObservable.md#newblinker)
- [newTicker](EShapeStateSetImplObservable.md#newticker)
- [on](EShapeStateSetImplObservable.md#on)
- [onChange](EShapeStateSetImplObservable.md#onchange)
- [onParentChange](EShapeStateSetImplObservable.md#onparentchange)
- [remove](EShapeStateSetImplObservable.md#remove)
- [removeAll](EShapeStateSetImplObservable.md#removeall)
- [removeAllMatcher](EShapeStateSetImplObservable.md#removeallmatcher)
- [removeAllObject](EShapeStateSetImplObservable.md#removeallobject)
- [removeAllString](EShapeStateSetImplObservable.md#removeallstring)
- [set](EShapeStateSetImplObservable.md#set)
- [setAll](EShapeStateSetImplObservable.md#setall)
- [setAllObject](EShapeStateSetImplObservable.md#setallobject)
- [setAllString](EShapeStateSetImplObservable.md#setallstring)
- [size](EShapeStateSetImplObservable.md#size)
- [toObject](EShapeStateSetImplObservable.md#toobject)
- [toString](EShapeStateSetImplObservable.md#tostring)
- [under](EShapeStateSetImplObservable.md#under)
- [unlock](EShapeStateSetImplObservable.md#unlock)
- [valueOf](EShapeStateSetImplObservable.md#valueof)

## Constructors

### constructor

• **new EShapeStateSetImplObservable**(`onChange`): [`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `onChange` | [`DBaseStateSetImplObservableOnChange`](../index.md#dbasestatesetimplobservableonchange) |

#### Returns

[`EShapeStateSetImplObservable`](EShapeStateSetImplObservable.md)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[constructor](DBaseStateSetImplObservable.md#constructor)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L21)

## Properties

### \_blinker

• `Protected` `Optional` **\_blinker**: [`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_blinker](DBaseStateSetImplObservable.md#_blinker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:23](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L23)

___

### \_doSave

• `Protected` **\_doSave**: `boolean`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_doSave](DBaseStateSetImplObservable.md#_dosave)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:18](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L18)

___

### \_isLocked

• `Protected` **\_isLocked**: `number`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_isLocked](DBaseStateSetImplObservable.md#_islocked)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:16](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L16)

___

### \_isSaved

• `Protected` **\_isSaved**: `boolean`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_isSaved](DBaseStateSetImplObservable.md#_issaved)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:17](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L17)

___

### \_local

• `Protected` **\_local**: `Map`\<`string`, ``null`` \| `number`\>

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_local](DBaseStateSetImplObservable.md#_local)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:21](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L21)

___

### \_onChange

• `Protected` **\_onChange**: [`DBaseStateSetImplObservableOnChange`](../index.md#dbasestatesetimplobservableonchange)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_onChange](DBaseStateSetImplObservable.md#_onchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L15)

___

### \_parent

• `Protected` **\_parent**: ``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_parent](DBaseStateSetImplObservable.md#_parent)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:22](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L22)

___

### \_saved

• `Protected` `Optional` **\_saved**: [`DBaseStateSetImpl`](DBaseStateSetImpl.md)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_saved](DBaseStateSetImplObservable.md#_saved)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:19](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L19)

___

### \_ticker

• `Protected` `Optional` **\_ticker**: [`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[_ticker](DBaseStateSetImplObservable.md#_ticker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:24](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L24)

## Accessors

### blinker

• `get` **blinker**(): [`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Returns

[`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[blinker](../interfaces/EShapeStateSet.md#blinker)

#### Inherited from

DBaseStateSetImplObservable.blinker

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:54](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L54)

___

### inActivated

• `get` **inActivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inActivated](../interfaces/EShapeStateSet.md#inactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L236)

___

### inActive

• `get` **inActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inActive](../interfaces/EShapeStateSet.md#inactive)

#### Inherited from

DBaseStateSetImplObservable.inActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:504](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L504)

___

### inAlternated

• `get` **inAlternated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inAlternated](../interfaces/EShapeStateSet.md#inalternated)

#### Inherited from

DBaseStateSetImplObservable.inAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:848](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L848)

___

### inChanged

• `get` **inChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inChanged](../interfaces/EShapeStateSet.md#inchanged)

#### Inherited from

DBaseStateSetImplObservable.inChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:828](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L828)

___

### inClicked

• `get` **inClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inClicked](../interfaces/EShapeStateSet.md#inclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:36](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L36)

___

### inDblClicked

• `get` **inDblClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inDblClicked](../interfaces/EShapeStateSet.md#indblclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:56](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L56)

___

### inDeactivated

• `get` **inDeactivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inDeactivated](../interfaces/EShapeStateSet.md#indeactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:256](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L256)

___

### inDisabled

• `get` **inDisabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inDisabled](../interfaces/EShapeStateSet.md#indisabled)

#### Inherited from

DBaseStateSetImplObservable.inDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:584](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L584)

___

### inDown

• `get` **inDown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inDown](../interfaces/EShapeStateSet.md#indown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L76)

___

### inEnabled

• `get` **inEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inEnabled](../interfaces/EShapeStateSet.md#inenabled)

#### Inherited from

DBaseStateSetImplObservable.inEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:564](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L564)

___

### inFailed

• `get` **inFailed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inFailed](../interfaces/EShapeStateSet.md#infailed)

#### Inherited from

DBaseStateSetImplObservable.inFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:788](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L788)

___

### inFocusReverse

• `get` **inFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inFocusReverse](../interfaces/EShapeStateSet.md#infocusreverse)

#### Inherited from

DBaseStateSetImplObservable.inFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:668](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L668)

___

### inFocusRoot

• `get` **inFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inFocusRoot](../interfaces/EShapeStateSet.md#infocusroot)

#### Inherited from

DBaseStateSetImplObservable.inFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:648](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L648)

___

### inFocusable

• `get` **inFocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inFocusable](../interfaces/EShapeStateSet.md#infocusable)

#### Inherited from

DBaseStateSetImplObservable.inFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:688](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L688)

___

### inFocused

• `get` **inFocused**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inFocused](../interfaces/EShapeStateSet.md#infocused)

#### Inherited from

DBaseStateSetImplObservable.inFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:628](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L628)

___

### inGesturing

• `get` **inGesturing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inGesturing](../interfaces/EShapeStateSet.md#ingesturing)

#### Inherited from

DBaseStateSetImplObservable.inGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:608](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L608)

___

### inHovered

• `get` **inHovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inHovered](../interfaces/EShapeStateSet.md#inhovered)

#### Inherited from

DBaseStateSetImplObservable.inHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:484](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L484)

___

### inInvalid

• `get` **inInvalid**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inInvalid](../interfaces/EShapeStateSet.md#ininvalid)

#### Inherited from

DBaseStateSetImplObservable.inInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:728](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L728)

___

### inPressed

• `get` **inPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inPressed](../interfaces/EShapeStateSet.md#inpressed)

#### Inherited from

DBaseStateSetImplObservable.inPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:524](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L524)

___

### inProcessing

• `get` **inProcessing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inProcessing](../interfaces/EShapeStateSet.md#inprocessing)

#### Inherited from

DBaseStateSetImplObservable.inProcessing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:748](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L748)

___

### inReadOnly

• `get` **inReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inReadOnly](../interfaces/EShapeStateSet.md#inreadonly)

#### Inherited from

DBaseStateSetImplObservable.inReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:544](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L544)

___

### inRightClicked

• `get` **inRightClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inRightClicked](../interfaces/EShapeStateSet.md#inrightclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:136](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L136)

___

### inRightDown

• `get` **inRightDown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inRightDown](../interfaces/EShapeStateSet.md#inrightdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L156)

___

### inRightPressed

• `get` **inRightPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inRightPressed](../interfaces/EShapeStateSet.md#inrightpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:216](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L216)

___

### inRightUp

• `get` **inRightUp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inRightUp](../interfaces/EShapeStateSet.md#inrightup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:176](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L176)

___

### inRightUpOutside

• `get` **inRightUpOutside**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inRightUpOutside](../interfaces/EShapeStateSet.md#inrightupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:196](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L196)

___

### inSucceeded

• `get` **inSucceeded**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inSucceeded](../interfaces/EShapeStateSet.md#insucceeded)

#### Inherited from

DBaseStateSetImplObservable.inSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:768](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L768)

___

### inUnfocusable

• `get` **inUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inUnfocusable](../interfaces/EShapeStateSet.md#inunfocusable)

#### Inherited from

DBaseStateSetImplObservable.inUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:708](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L708)

___

### inUp

• `get` **inUp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inUp](../interfaces/EShapeStateSet.md#inup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:96](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L96)

___

### inUpOutside

• `get` **inUpOutside**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inUpOutside](../interfaces/EShapeStateSet.md#inupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:116](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L116)

___

### inWarned

• `get` **inWarned**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[inWarned](../interfaces/EShapeStateSet.md#inwarned)

#### Inherited from

DBaseStateSetImplObservable.inWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:808](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L808)

___

### isActionable

• `get` **isActionable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isActionable](../interfaces/EShapeStateSet.md#isactionable)

#### Inherited from

DBaseStateSetImplObservable.isActionable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:596](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L596)

___

### isActivated

• `get` **isActivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isActivated](../interfaces/EShapeStateSet.md#isactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:228](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L228)

• `set` **isActivated**(`isActivated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isActivated` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isActivated](../interfaces/EShapeStateSet.md#isactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:232](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L232)

___

### isActive

• `get` **isActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isActive](../interfaces/EShapeStateSet.md#isactive)

#### Inherited from

DBaseStateSetImplObservable.isActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:496](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L496)

• `set` **isActive**(`isActive`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isActive` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isActive](../interfaces/EShapeStateSet.md#isactive)

#### Inherited from

DBaseStateSetImplObservable.isActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:500](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L500)

___

### isAlternated

• `get` **isAlternated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isAlternated](../interfaces/EShapeStateSet.md#isalternated)

#### Inherited from

DBaseStateSetImplObservable.isAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:840](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L840)

• `set` **isAlternated**(`isAlternated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isAlternated` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isAlternated](../interfaces/EShapeStateSet.md#isalternated)

#### Inherited from

DBaseStateSetImplObservable.isAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:844](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L844)

___

### isChanged

• `get` **isChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isChanged](../interfaces/EShapeStateSet.md#ischanged)

#### Inherited from

DBaseStateSetImplObservable.isChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:820](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L820)

• `set` **isChanged**(`isChanged`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isChanged` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isChanged](../interfaces/EShapeStateSet.md#ischanged)

#### Inherited from

DBaseStateSetImplObservable.isChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:824](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L824)

___

### isClicked

• `get` **isClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isClicked](../interfaces/EShapeStateSet.md#isclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:28](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L28)

• `set` **isClicked**(`isClicked`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isClicked` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isClicked](../interfaces/EShapeStateSet.md#isclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:32](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L32)

___

### isDblClicked

• `get` **isDblClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isDblClicked](../interfaces/EShapeStateSet.md#isdblclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:48](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L48)

• `set` **isDblClicked**(`isDblClicked`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDblClicked` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isDblClicked](../interfaces/EShapeStateSet.md#isdblclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:52](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L52)

___

### isDeactivated

• `get` **isDeactivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isDeactivated](../interfaces/EShapeStateSet.md#isdeactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:248](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L248)

• `set` **isDeactivated**(`isDeactivated`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDeactivated` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isDeactivated](../interfaces/EShapeStateSet.md#isdeactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:252](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L252)

___

### isDisabled

• `get` **isDisabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isDisabled](../interfaces/EShapeStateSet.md#isdisabled)

#### Inherited from

DBaseStateSetImplObservable.isDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:576](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L576)

• `set` **isDisabled**(`isDisabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDisabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isDisabled](../interfaces/EShapeStateSet.md#isdisabled)

#### Inherited from

DBaseStateSetImplObservable.isDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:580](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L580)

___

### isDown

• `get` **isDown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isDown](../interfaces/EShapeStateSet.md#isdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:68](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L68)

• `set` **isDown**(`isDown`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isDown` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isDown](../interfaces/EShapeStateSet.md#isdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:72](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L72)

___

### isEnabled

• `get` **isEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isEnabled](../interfaces/EShapeStateSet.md#isenabled)

#### Inherited from

DBaseStateSetImplObservable.isEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:556](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L556)

• `set` **isEnabled**(`isEnabled`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isEnabled` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isEnabled](../interfaces/EShapeStateSet.md#isenabled)

#### Inherited from

DBaseStateSetImplObservable.isEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:560](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L560)

___

### isFailed

• `get` **isFailed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFailed](../interfaces/EShapeStateSet.md#isfailed)

#### Inherited from

DBaseStateSetImplObservable.isFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:780](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L780)

• `set` **isFailed**(`failed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `failed` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFailed](../interfaces/EShapeStateSet.md#isfailed)

#### Inherited from

DBaseStateSetImplObservable.isFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:784](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L784)

___

### isFocusReverse

• `get` **isFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocusReverse](../interfaces/EShapeStateSet.md#isfocusreverse)

#### Inherited from

DBaseStateSetImplObservable.isFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:660](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L660)

• `set` **isFocusReverse**(`isFocusReverse`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocusReverse` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocusReverse](../interfaces/EShapeStateSet.md#isfocusreverse)

#### Inherited from

DBaseStateSetImplObservable.isFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:664](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L664)

___

### isFocusRoot

• `get` **isFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocusRoot](../interfaces/EShapeStateSet.md#isfocusroot)

#### Inherited from

DBaseStateSetImplObservable.isFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:640](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L640)

• `set` **isFocusRoot**(`isFocusRoot`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocusRoot` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocusRoot](../interfaces/EShapeStateSet.md#isfocusroot)

#### Inherited from

DBaseStateSetImplObservable.isFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:644](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L644)

___

### isFocusable

• `get` **isFocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocusable](../interfaces/EShapeStateSet.md#isfocusable)

#### Inherited from

DBaseStateSetImplObservable.isFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:680](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L680)

• `set` **isFocusable**(`isFocusable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocusable` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocusable](../interfaces/EShapeStateSet.md#isfocusable)

#### Inherited from

DBaseStateSetImplObservable.isFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:684](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L684)

___

### isFocused

• `get` **isFocused**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocused](../interfaces/EShapeStateSet.md#isfocused)

#### Inherited from

DBaseStateSetImplObservable.isFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:620](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L620)

• `set` **isFocused**(`isFocused`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isFocused` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isFocused](../interfaces/EShapeStateSet.md#isfocused)

#### Inherited from

DBaseStateSetImplObservable.isFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:624](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L624)

___

### isGesturing

• `get` **isGesturing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isGesturing](../interfaces/EShapeStateSet.md#isgesturing)

#### Inherited from

DBaseStateSetImplObservable.isGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:600](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L600)

• `set` **isGesturing**(`isGesturing`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isGesturing` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isGesturing](../interfaces/EShapeStateSet.md#isgesturing)

#### Inherited from

DBaseStateSetImplObservable.isGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:604](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L604)

___

### isHovered

• `get` **isHovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isHovered](../interfaces/EShapeStateSet.md#ishovered)

#### Inherited from

DBaseStateSetImplObservable.isHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:476](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L476)

• `set` **isHovered**(`isHovered`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isHovered` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isHovered](../interfaces/EShapeStateSet.md#ishovered)

#### Inherited from

DBaseStateSetImplObservable.isHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:480](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L480)

___

### isInvalid

• `get` **isInvalid**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isInvalid](../interfaces/EShapeStateSet.md#isinvalid)

#### Inherited from

DBaseStateSetImplObservable.isInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:720](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L720)

• `set` **isInvalid**(`invalid`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `invalid` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isInvalid](../interfaces/EShapeStateSet.md#isinvalid)

#### Inherited from

DBaseStateSetImplObservable.isInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:724](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L724)

___

### isPressed

• `get` **isPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isPressed](../interfaces/EShapeStateSet.md#ispressed)

#### Inherited from

DBaseStateSetImplObservable.isPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:516](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L516)

• `set` **isPressed**(`isPressed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isPressed` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isPressed](../interfaces/EShapeStateSet.md#ispressed)

#### Inherited from

DBaseStateSetImplObservable.isPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:520](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L520)

___

### isProcessing

• `get` **isProcessing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isProcessing](../interfaces/EShapeStateSet.md#isprocessing)

#### Inherited from

DBaseStateSetImplObservable.isProcessing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:740](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L740)

• `set` **isProcessing**(`processing`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `processing` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isProcessing](../interfaces/EShapeStateSet.md#isprocessing)

#### Inherited from

DBaseStateSetImplObservable.isProcessing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:744](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L744)

___

### isReadOnly

• `get` **isReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isReadOnly](../interfaces/EShapeStateSet.md#isreadonly)

#### Inherited from

DBaseStateSetImplObservable.isReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:536](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L536)

• `set` **isReadOnly**(`isReadOnly`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isReadOnly` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isReadOnly](../interfaces/EShapeStateSet.md#isreadonly)

#### Inherited from

DBaseStateSetImplObservable.isReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:540](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L540)

___

### isRightClicked

• `get` **isRightClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isRightClicked](../interfaces/EShapeStateSet.md#isrightclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:128](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L128)

• `set` **isRightClicked**(`isRightClicked`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isRightClicked` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isRightClicked](../interfaces/EShapeStateSet.md#isrightclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:132](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L132)

___

### isRightDown

• `get` **isRightDown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isRightDown](../interfaces/EShapeStateSet.md#isrightdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:148](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L148)

• `set` **isRightDown**(`isRightDown`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isRightDown` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isRightDown](../interfaces/EShapeStateSet.md#isrightdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L152)

___

### isRightPressed

• `get` **isRightPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isRightPressed](../interfaces/EShapeStateSet.md#isrightpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:208](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L208)

• `set` **isRightPressed**(`isRightPressed`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isRightPressed` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isRightPressed](../interfaces/EShapeStateSet.md#isrightpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:212](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L212)

___

### isRightUp

• `get` **isRightUp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isRightUp](../interfaces/EShapeStateSet.md#isrightup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:168](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L168)

• `set` **isRightUp**(`isRightUp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isRightUp` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isRightUp](../interfaces/EShapeStateSet.md#isrightup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:172](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L172)

___

### isRightUpOutside

• `get` **isRightUpOutside**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isRightUpOutside](../interfaces/EShapeStateSet.md#isrightupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:188](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L188)

• `set` **isRightUpOutside**(`isRightUpOutside`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isRightUpOutside` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isRightUpOutside](../interfaces/EShapeStateSet.md#isrightupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:192](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L192)

___

### isSucceeded

• `get` **isSucceeded**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isSucceeded](../interfaces/EShapeStateSet.md#issucceeded)

#### Inherited from

DBaseStateSetImplObservable.isSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:760](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L760)

• `set` **isSucceeded**(`succeeded`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `succeeded` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isSucceeded](../interfaces/EShapeStateSet.md#issucceeded)

#### Inherited from

DBaseStateSetImplObservable.isSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:764](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L764)

___

### isUnfocusable

• `get` **isUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isUnfocusable](../interfaces/EShapeStateSet.md#isunfocusable)

#### Inherited from

DBaseStateSetImplObservable.isUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:700](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L700)

• `set` **isUnfocusable**(`unfocusable`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `unfocusable` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isUnfocusable](../interfaces/EShapeStateSet.md#isunfocusable)

#### Inherited from

DBaseStateSetImplObservable.isUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:704](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L704)

___

### isUp

• `get` **isUp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isUp](../interfaces/EShapeStateSet.md#isup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:88](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L88)

• `set` **isUp**(`isUp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isUp` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isUp](../interfaces/EShapeStateSet.md#isup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:92](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L92)

___

### isUpOutside

• `get` **isUpOutside**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isUpOutside](../interfaces/EShapeStateSet.md#isupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:108](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L108)

• `set` **isUpOutside**(`isUpOutside`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isUpOutside` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isUpOutside](../interfaces/EShapeStateSet.md#isupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L112)

___

### isWarned

• `get` **isWarned**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isWarned](../interfaces/EShapeStateSet.md#iswarned)

#### Inherited from

DBaseStateSetImplObservable.isWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:800](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L800)

• `set` **isWarned**(`isWarned`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `isWarned` | `boolean` |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[isWarned](../interfaces/EShapeStateSet.md#iswarned)

#### Inherited from

DBaseStateSetImplObservable.isWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:804](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L804)

___

### local

• `get` **local**(): `Map`\<`string`, ``null`` \| `number`\>

#### Returns

`Map`\<`string`, ``null`` \| `number`\>

#### Inherited from

DBaseStateSetImplObservable.local

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:31](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L31)

___

### onActivated

• `get` **onActivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onActivated](../interfaces/EShapeStateSet.md#onactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L240)

___

### onActive

• `get` **onActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onActive](../interfaces/EShapeStateSet.md#onactive)

#### Inherited from

DBaseStateSetImplObservable.onActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:508](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L508)

___

### onAlternated

• `get` **onAlternated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onAlternated](../interfaces/EShapeStateSet.md#onalternated)

#### Inherited from

DBaseStateSetImplObservable.onAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:852](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L852)

___

### onChanged

• `get` **onChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onChanged](../interfaces/EShapeStateSet.md#onchanged)

#### Inherited from

DBaseStateSetImplObservable.onChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:832](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L832)

___

### onClicked

• `get` **onClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onClicked](../interfaces/EShapeStateSet.md#onclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:40](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L40)

___

### onDblClicked

• `get` **onDblClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onDblClicked](../interfaces/EShapeStateSet.md#ondblclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:60](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L60)

___

### onDeactivated

• `get` **onDeactivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onDeactivated](../interfaces/EShapeStateSet.md#ondeactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:260](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L260)

___

### onDisabled

• `get` **onDisabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onDisabled](../interfaces/EShapeStateSet.md#ondisabled)

#### Inherited from

DBaseStateSetImplObservable.onDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:588](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L588)

___

### onDown

• `get` **onDown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onDown](../interfaces/EShapeStateSet.md#ondown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L80)

___

### onEnabled

• `get` **onEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onEnabled](../interfaces/EShapeStateSet.md#onenabled)

#### Inherited from

DBaseStateSetImplObservable.onEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:568](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L568)

___

### onFailed

• `get` **onFailed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onFailed](../interfaces/EShapeStateSet.md#onfailed)

#### Inherited from

DBaseStateSetImplObservable.onFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:792](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L792)

___

### onFocusReverse

• `get` **onFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onFocusReverse](../interfaces/EShapeStateSet.md#onfocusreverse)

#### Inherited from

DBaseStateSetImplObservable.onFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:672](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L672)

___

### onFocusRoot

• `get` **onFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onFocusRoot](../interfaces/EShapeStateSet.md#onfocusroot)

#### Inherited from

DBaseStateSetImplObservable.onFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:652](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L652)

___

### onFocusable

• `get` **onFocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onFocusable](../interfaces/EShapeStateSet.md#onfocusable)

#### Inherited from

DBaseStateSetImplObservable.onFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:692](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L692)

___

### onFocused

• `get` **onFocused**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onFocused](../interfaces/EShapeStateSet.md#onfocused)

#### Inherited from

DBaseStateSetImplObservable.onFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:632](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L632)

___

### onGesturing

• `get` **onGesturing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onGesturing](../interfaces/EShapeStateSet.md#ongesturing)

#### Inherited from

DBaseStateSetImplObservable.onGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:612](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L612)

___

### onHovered

• `get` **onHovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onHovered](../interfaces/EShapeStateSet.md#onhovered)

#### Inherited from

DBaseStateSetImplObservable.onHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:488](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L488)

___

### onInvalid

• `get` **onInvalid**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onInvalid](../interfaces/EShapeStateSet.md#oninvalid)

#### Inherited from

DBaseStateSetImplObservable.onInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:732](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L732)

___

### onPressed

• `get` **onPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onPressed](../interfaces/EShapeStateSet.md#onpressed)

#### Inherited from

DBaseStateSetImplObservable.onPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:528](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L528)

___

### onProcessing

• `get` **onProcessing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onProcessing](../interfaces/EShapeStateSet.md#onprocessing)

#### Inherited from

DBaseStateSetImplObservable.onProcessing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:752](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L752)

___

### onReadOnly

• `get` **onReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onReadOnly](../interfaces/EShapeStateSet.md#onreadonly)

#### Inherited from

DBaseStateSetImplObservable.onReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:548](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L548)

___

### onRightClicked

• `get` **onRightClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onRightClicked](../interfaces/EShapeStateSet.md#onrightclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L140)

___

### onRightDown

• `get` **onRightDown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onRightDown](../interfaces/EShapeStateSet.md#onrightdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:160](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L160)

___

### onRightPressed

• `get` **onRightPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onRightPressed](../interfaces/EShapeStateSet.md#onrightpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:220](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L220)

___

### onRightUp

• `get` **onRightUp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onRightUp](../interfaces/EShapeStateSet.md#onrightup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:180](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L180)

___

### onRightUpOutside

• `get` **onRightUpOutside**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onRightUpOutside](../interfaces/EShapeStateSet.md#onrightupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:200](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L200)

___

### onSucceeded

• `get` **onSucceeded**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onSucceeded](../interfaces/EShapeStateSet.md#onsucceeded)

#### Inherited from

DBaseStateSetImplObservable.onSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:772](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L772)

___

### onUnfocusable

• `get` **onUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onUnfocusable](../interfaces/EShapeStateSet.md#onunfocusable)

#### Inherited from

DBaseStateSetImplObservable.onUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:712](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L712)

___

### onUp

• `get` **onUp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onUp](../interfaces/EShapeStateSet.md#onup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:100](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L100)

___

### onUpOutside

• `get` **onUpOutside**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onUpOutside](../interfaces/EShapeStateSet.md#onupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L120)

___

### onWarned

• `get` **onWarned**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onWarned](../interfaces/EShapeStateSet.md#onwarned)

#### Inherited from

DBaseStateSetImplObservable.onWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:812](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L812)

___

### parent

• `get` **parent**(): ``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Returns

``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[parent](../interfaces/EShapeStateSet.md#parent)

#### Inherited from

DBaseStateSetImplObservable.parent

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:35](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L35)

• `set` **parent**(`parent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parent` | ``null`` \| [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[parent](../interfaces/EShapeStateSet.md#parent)

#### Inherited from

DBaseStateSetImplObservable.parent

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:39](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L39)

___

### saved

• `get` **saved**(): [`DBaseStateSetImpl`](DBaseStateSetImpl.md)

#### Returns

[`DBaseStateSetImpl`](DBaseStateSetImpl.md)

#### Inherited from

DBaseStateSetImplObservable.saved

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:42](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L42)

___

### ticker

• `get` **ticker**(): [`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Returns

[`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[ticker](../interfaces/EShapeStateSet.md#ticker)

#### Inherited from

DBaseStateSetImplObservable.ticker

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:67](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L67)

___

### underActivated

• `get` **underActivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underActivated](../interfaces/EShapeStateSet.md#underactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:244](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L244)

___

### underActive

• `get` **underActive**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underActive](../interfaces/EShapeStateSet.md#underactive)

#### Inherited from

DBaseStateSetImplObservable.underActive

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:512](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L512)

___

### underAlternated

• `get` **underAlternated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underAlternated](../interfaces/EShapeStateSet.md#underalternated)

#### Inherited from

DBaseStateSetImplObservable.underAlternated

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:856](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L856)

___

### underChanged

• `get` **underChanged**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underChanged](../interfaces/EShapeStateSet.md#underchanged)

#### Inherited from

DBaseStateSetImplObservable.underChanged

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:836](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L836)

___

### underClicked

• `get` **underClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underClicked](../interfaces/EShapeStateSet.md#underclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:44](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L44)

___

### underDblClicked

• `get` **underDblClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underDblClicked](../interfaces/EShapeStateSet.md#underdblclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:64](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L64)

___

### underDeactivated

• `get` **underDeactivated**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underDeactivated](../interfaces/EShapeStateSet.md#underdeactivated)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:264](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L264)

___

### underDisabled

• `get` **underDisabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underDisabled](../interfaces/EShapeStateSet.md#underdisabled)

#### Inherited from

DBaseStateSetImplObservable.underDisabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:592](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L592)

___

### underDown

• `get` **underDown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underDown](../interfaces/EShapeStateSet.md#underdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:84](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L84)

___

### underEnabled

• `get` **underEnabled**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underEnabled](../interfaces/EShapeStateSet.md#underenabled)

#### Inherited from

DBaseStateSetImplObservable.underEnabled

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:572](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L572)

___

### underFailed

• `get` **underFailed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underFailed](../interfaces/EShapeStateSet.md#underfailed)

#### Inherited from

DBaseStateSetImplObservable.underFailed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:796](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L796)

___

### underFocusReverse

• `get` **underFocusReverse**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underFocusReverse](../interfaces/EShapeStateSet.md#underfocusreverse)

#### Inherited from

DBaseStateSetImplObservable.underFocusReverse

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:676](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L676)

___

### underFocusRoot

• `get` **underFocusRoot**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underFocusRoot](../interfaces/EShapeStateSet.md#underfocusroot)

#### Inherited from

DBaseStateSetImplObservable.underFocusRoot

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:656](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L656)

___

### underFocusable

• `get` **underFocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underFocusable](../interfaces/EShapeStateSet.md#underfocusable)

#### Inherited from

DBaseStateSetImplObservable.underFocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:696](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L696)

___

### underFocused

• `get` **underFocused**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underFocused](../interfaces/EShapeStateSet.md#underfocused)

#### Inherited from

DBaseStateSetImplObservable.underFocused

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:636](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L636)

___

### underGesturing

• `get` **underGesturing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underGesturing](../interfaces/EShapeStateSet.md#undergesturing)

#### Inherited from

DBaseStateSetImplObservable.underGesturing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:616](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L616)

___

### underHovered

• `get` **underHovered**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underHovered](../interfaces/EShapeStateSet.md#underhovered)

#### Inherited from

DBaseStateSetImplObservable.underHovered

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:492](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L492)

___

### underInvalid

• `get` **underInvalid**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underInvalid](../interfaces/EShapeStateSet.md#underinvalid)

#### Inherited from

DBaseStateSetImplObservable.underInvalid

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:736](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L736)

___

### underPressed

• `get` **underPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underPressed](../interfaces/EShapeStateSet.md#underpressed)

#### Inherited from

DBaseStateSetImplObservable.underPressed

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:532](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L532)

___

### underProcessing

• `get` **underProcessing**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underProcessing](../interfaces/EShapeStateSet.md#underprocessing)

#### Inherited from

DBaseStateSetImplObservable.underProcessing

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:756](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L756)

___

### underReadOnly

• `get` **underReadOnly**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underReadOnly](../interfaces/EShapeStateSet.md#underreadonly)

#### Inherited from

DBaseStateSetImplObservable.underReadOnly

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:552](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L552)

___

### underRightClicked

• `get` **underRightClicked**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underRightClicked](../interfaces/EShapeStateSet.md#underrightclicked)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:144](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L144)

___

### underRightDown

• `get` **underRightDown**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underRightDown](../interfaces/EShapeStateSet.md#underrightdown)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:164](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L164)

___

### underRightPressed

• `get` **underRightPressed**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underRightPressed](../interfaces/EShapeStateSet.md#underrightpressed)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:224](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L224)

___

### underRightUp

• `get` **underRightUp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underRightUp](../interfaces/EShapeStateSet.md#underrightup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:184](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L184)

___

### underRightUpOutside

• `get` **underRightUpOutside**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underRightUpOutside](../interfaces/EShapeStateSet.md#underrightupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:204](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L204)

___

### underSucceeded

• `get` **underSucceeded**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underSucceeded](../interfaces/EShapeStateSet.md#undersucceeded)

#### Inherited from

DBaseStateSetImplObservable.underSucceeded

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:776](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L776)

___

### underUnfocusable

• `get` **underUnfocusable**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underUnfocusable](../interfaces/EShapeStateSet.md#underunfocusable)

#### Inherited from

DBaseStateSetImplObservable.underUnfocusable

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:716](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L716)

___

### underUp

• `get` **underUp**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underUp](../interfaces/EShapeStateSet.md#underup)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:104](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L104)

___

### underUpOutside

• `get` **underUpOutside**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underUpOutside](../interfaces/EShapeStateSet.md#underupoutside)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:124](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L124)

___

### underWarned

• `get` **underWarned**(): `boolean`

#### Returns

`boolean`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[underWarned](../interfaces/EShapeStateSet.md#underwarned)

#### Inherited from

DBaseStateSetImplObservable.underWarned

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:816](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L816)

## Methods

### add

▸ **add**(`state`, `value?`): `this`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `state` | `string` | `undefined` |
| `value` | ``null`` \| `number` | `null` |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[add](../interfaces/EShapeStateSet.md#add)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[add](DBaseStateSetImplObservable.md#add)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:120](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L120)

___

### addAll

▸ **addAll**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[addAll](../interfaces/EShapeStateSet.md#addall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[addAll](DBaseStateSetImplObservable.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:152](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L152)

▸ **addAll**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[addAll](../interfaces/EShapeStateSet.md#addall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[addAll](DBaseStateSetImplObservable.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:153](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L153)

▸ **addAll**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[addAll](../interfaces/EShapeStateSet.md#addall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[addAll](DBaseStateSetImplObservable.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:154](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L154)

▸ **addAll**(`...states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | `string`[] |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[addAll](../interfaces/EShapeStateSet.md#addall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[addAll](DBaseStateSetImplObservable.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:156](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L156)

▸ **addAll**(`...states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[addAll](../interfaces/EShapeStateSet.md#addall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[addAll](DBaseStateSetImplObservable.md#addall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:157](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L157)

___

### addAllObject

▸ **addAllObject**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[addAllObject](DBaseStateSetImplObservable.md#addallobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:189](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L189)

___

### addAllString

▸ **addAllString**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`this`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[addAllString](DBaseStateSetImplObservable.md#addallstring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:177](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L177)

___

### begin

▸ **begin**(): `this`

#### Returns

`this`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[begin](DBaseStateSetImplObservable.md#begin)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:51](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L51)

___

### checkAdded

▸ **checkAdded**(`added`, `value`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | `string` |
| `value` | ``null`` \| `number` |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[checkAdded](DBaseStateSetImplObservable.md#checkadded)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:115](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L115)

___

### checkAddedsObject

▸ **checkAddedsObject**(`states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[checkAddedsObject](DBaseStateSetImplObservable.md#checkaddedsobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:140](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L140)

___

### checkAddedsString

▸ **checkAddedsString**(`states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[checkAddedsString](DBaseStateSetImplObservable.md#checkaddedsstring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:129](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L129)

___

### checkRemoved

▸ **checkRemoved**(`removed`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `removed` | `string` |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[checkRemoved](DBaseStateSetImplObservable.md#checkremoved)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:202](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L202)

___

### checkRemovedsObject

▸ **checkRemovedsObject**(`states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[checkRemovedsObject](DBaseStateSetImplObservable.md#checkremovedsobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:225](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L225)

___

### checkRemovedsString

▸ **checkRemovedsString**(`states`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`boolean`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[checkRemovedsString](DBaseStateSetImplObservable.md#checkremovedsstring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:215](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L215)

___

### clear

▸ **clear**(): `this`

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[clear](../interfaces/EShapeStateSet.md#clear)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[clear](DBaseStateSetImplObservable.md#clear)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:429](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L429)

___

### copy

▸ **copy**(`other`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[copy](../interfaces/EShapeStateSet.md#copy)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[copy](DBaseStateSetImplObservable.md#copy)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:462](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L462)

___

### doSet

▸ **doSet**(`added`, `value`, `removed?`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | ``null`` \| `string` |
| `value` | ``null`` \| `number` |
| `removed?` | ``null`` \| `string` |

#### Returns

`this`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[doSet](DBaseStateSetImplObservable.md#doset)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:345](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L345)

___

### each

▸ **each**(`iteratee`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `iteratee` | (`state`: `string`, `value`: ``null`` \| `number`) => `void` |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[each](../interfaces/EShapeStateSet.md#each)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[each](DBaseStateSetImplObservable.md#each)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:451](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L451)

___

### end

▸ **end**(): `this`

#### Returns

`this`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[end](DBaseStateSetImplObservable.md#end)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:59](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L59)

___

### in

▸ **in**(`state`, `value?`): `boolean`

Returns true if the given state is on or if one of the parents has the given state.
If the given value is undefined, values assigned to states are ignored.
If the given value is not undefined, values assigned to states are taken into account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `string` | a state |
| `value?` | ``null`` \| `number` | a state value |

#### Returns

`boolean`

true if the given state is on or if one of the parents has the given state.

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[in](../interfaces/EShapeStateSet.md#in)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[in](DBaseStateSetImplObservable.md#in)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:85](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L85)

___

### is

▸ **is**(`state`, `value?`): `boolean`

Returns true if the given state is on.
If the given value is undefined, values assigned to states are ignored.
If the given value is not undefined, values assigned to states are taken into account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `string` | a state |
| `value?` | ``null`` \| `number` | a state value |

#### Returns

`boolean`

true if the given state is on

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[is](../interfaces/EShapeStateSet.md#is)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[is](DBaseStateSetImplObservable.md#is)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:80](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L80)

___

### lock

▸ **lock**(`callOnChange?`): `this`

Locks this state set.
The locked state set delays calling the change event handler.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callOnChange?` | `boolean` | false to stop calling the change event handler when unlocked |

#### Returns

`this`

this

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[lock](../interfaces/EShapeStateSet.md#lock)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[lock](DBaseStateSetImplObservable.md#lock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:29](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L29)

___

### newBlinker

▸ **newBlinker**(): [`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Returns

[`DBaseStateSetBlinker`](../interfaces/DBaseStateSetBlinker.md)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[newBlinker](DBaseStateSetImplObservable.md#newblinker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:63](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L63)

___

### newTicker

▸ **newTicker**(): [`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Returns

[`DBaseStateSetTicker`](../interfaces/DBaseStateSetTicker.md)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[newTicker](DBaseStateSetImplObservable.md#newticker)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:76](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L76)

___

### on

▸ **on**(`state`, `value?`): `boolean`

Returns true if the direct parent has the given state.
If the given value is undefined, values assigned to states are ignored.
If the given value is not undefined, values assigned to states are taken into account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `string` | a state |
| `value?` | ``null`` \| `number` | a state value |

#### Returns

`boolean`

true if the direct parent has the given state.

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[on](../interfaces/EShapeStateSet.md#on)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[on](DBaseStateSetImplObservable.md#on)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:89](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L89)

___

### onChange

▸ **onChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Overrides

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[onChange](DBaseStateSetImplObservable.md#onchange)

#### Defined in

[src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts:15](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/shape/e-shape-state-set-impl-observable.ts#L15)

___

### onParentChange

▸ **onParentChange**(`newState`, `oldState`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |
| `oldState` | [`DBaseStateSet`](../interfaces/DBaseStateSet.md) |

#### Returns

`void`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[onParentChange](../interfaces/EShapeStateSet.md#onparentchange)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[onParentChange](DBaseStateSetImplObservable.md#onparentchange)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:47](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L47)

___

### remove

▸ **remove**(`state`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[remove](../interfaces/EShapeStateSet.md#remove)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[remove](DBaseStateSetImplObservable.md#remove)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:206](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L206)

___

### removeAll

▸ **removeAll**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[removeAll](../interfaces/EShapeStateSet.md#removeall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[removeAll](DBaseStateSetImplObservable.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:235](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L235)

▸ **removeAll**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[removeAll](../interfaces/EShapeStateSet.md#removeall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[removeAll](DBaseStateSetImplObservable.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:236](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L236)

▸ **removeAll**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[removeAll](../interfaces/EShapeStateSet.md#removeall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[removeAll](DBaseStateSetImplObservable.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:237](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L237)

▸ **removeAll**(`...states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | `string`[] |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[removeAll](../interfaces/EShapeStateSet.md#removeall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[removeAll](DBaseStateSetImplObservable.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:239](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L239)

▸ **removeAll**(`...states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[removeAll](../interfaces/EShapeStateSet.md#removeall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[removeAll](DBaseStateSetImplObservable.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:240](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L240)

▸ **removeAll**(`matcher`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher` | [`DBaseStateMatcher`](../index.md#dbasestatematcher) |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[removeAll](../interfaces/EShapeStateSet.md#removeall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[removeAll](DBaseStateSetImplObservable.md#removeall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:242](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L242)

___

### removeAllMatcher

▸ **removeAllMatcher**(`matcher`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `matcher` | [`DBaseStateMatcher`](../index.md#dbasestatematcher) |

#### Returns

`this`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[removeAllMatcher](DBaseStateSetImplObservable.md#removeallmatcher)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:266](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L266)

___

### removeAllObject

▸ **removeAllObject**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |

#### Returns

`this`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[removeAllObject](DBaseStateSetImplObservable.md#removeallobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:296](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L296)

___

### removeAllString

▸ **removeAllString**(`states`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |

#### Returns

`this`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[removeAllString](DBaseStateSetImplObservable.md#removeallstring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:284](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L284)

___

### set

▸ **set**(`state`, `on`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `on` | `boolean` |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[set](../interfaces/EShapeStateSet.md#set)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[set](DBaseStateSetImplObservable.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:308](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L308)

▸ **set**(`state`, `value`, `on`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `value` | ``null`` \| `number` |
| `on` | `boolean` |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[set](../interfaces/EShapeStateSet.md#set)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[set](DBaseStateSetImplObservable.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:309](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L309)

▸ **set**(`added`, `removed`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | ``null`` \| `string` |
| `removed` | ``null`` \| `string` |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[set](../interfaces/EShapeStateSet.md#set)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[set](DBaseStateSetImplObservable.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:311](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L311)

▸ **set**(`added`, `value`, `removed`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `added` | ``null`` \| `string` |
| `value` | ``null`` \| `number` |
| `removed` | ``null`` \| `string` |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[set](../interfaces/EShapeStateSet.md#set)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[set](DBaseStateSetImplObservable.md#set)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:312](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L312)

___

### setAll

▸ **setAll**(`states`, `on`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] |
| `on` | `boolean` |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[setAll](../interfaces/EShapeStateSet.md#setall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[setAll](DBaseStateSetImplObservable.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:362](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L362)

▸ **setAll**(`states`, `on`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `on` | `boolean` |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[setAll](../interfaces/EShapeStateSet.md#setall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[setAll](DBaseStateSetImplObservable.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:363](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L363)

▸ **setAll**(`states`, `on`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `states` | `string`[] \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `on` | `boolean` |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[setAll](../interfaces/EShapeStateSet.md#setall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[setAll](DBaseStateSetImplObservable.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:364](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L364)

▸ **setAll**(`addeds`, `removeds`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | ``null`` \| `string`[] |
| `removeds` | ``null`` \| `string`[] |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[setAll](../interfaces/EShapeStateSet.md#setall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[setAll](DBaseStateSetImplObservable.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:366](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L366)

▸ **setAll**(`addeds`, `removeds`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | ``null`` \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `removeds` | ``null`` \| `string`[] |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[setAll](../interfaces/EShapeStateSet.md#setall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[setAll](DBaseStateSetImplObservable.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:367](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L367)

▸ **setAll**(`addeds`, `removeds`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | ``null`` \| `string`[] \| [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `removeds` | ``null`` \| `string`[] |

#### Returns

`this`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[setAll](../interfaces/EShapeStateSet.md#setall)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[setAll](DBaseStateSetImplObservable.md#setall)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:368](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L368)

___

### setAllObject

▸ **setAllObject**(`addeds`, `removeds`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | [`DBaseStateAndValue`](../interfaces/DBaseStateAndValue.md)[] |
| `removeds` | `string`[] |

#### Returns

`this`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[setAllObject](DBaseStateSetImplObservable.md#setallobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:413](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L413)

___

### setAllString

▸ **setAllString**(`addeds`, `removeds`): `this`

#### Parameters

| Name | Type |
| :------ | :------ |
| `addeds` | `string`[] |
| `removeds` | `string`[] |

#### Returns

`this`

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[setAllString](DBaseStateSetImplObservable.md#setallstring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:398](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L398)

___

### size

▸ **size**(): `number`

#### Returns

`number`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[size](../interfaces/EShapeStateSet.md#size)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[size](DBaseStateSetImplObservable.md#size)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:458](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L458)

___

### toObject

▸ **toObject**(): [`DBaseStateSetLike`](../interfaces/DBaseStateSetLike.md)

#### Returns

[`DBaseStateSetLike`](../interfaces/DBaseStateSetLike.md)

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[toObject](../interfaces/EShapeStateSet.md#toobject)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[toObject](DBaseStateSetImplObservable.md#toobject)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:860](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L860)

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[toString](../interfaces/EShapeStateSet.md#tostring)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[toString](DBaseStateSetImplObservable.md#tostring)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:870](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L870)

___

### under

▸ **under**(`state`, `value?`): `boolean`

Returns true if one of the parents has the given state.
If the given value is undefined, values assigned to states are ignored.
If the given value is not undefined, values assigned to states are taken into account.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `state` | `string` | a state |
| `value?` | ``null`` \| `number` | a state value |

#### Returns

`boolean`

true if one of the parents has the given state.

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[under](../interfaces/EShapeStateSet.md#under)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[under](DBaseStateSetImplObservable.md#under)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:94](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L94)

___

### unlock

▸ **unlock**(): `this`

Unlocks this state set and calls the change event handler if this state set has changed.
However, if this state set is locked with the `callOnChange` of false, the change event handler is not called.

#### Returns

`this`

this

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[unlock](../interfaces/EShapeStateSet.md#unlock)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[unlock](DBaseStateSetImplObservable.md#unlock)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts:37](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl-observable.ts#L37)

___

### valueOf

▸ **valueOf**(`state`, `def?`): `undefined` \| ``null`` \| `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state` | `string` |
| `def?` | ``null`` \| `number` |

#### Returns

`undefined` \| ``null`` \| `number`

#### Implementation of

[EShapeStateSet](../interfaces/EShapeStateSet.md).[valueOf](../interfaces/EShapeStateSet.md#valueof)

#### Inherited from

[DBaseStateSetImplObservable](DBaseStateSetImplObservable.md).[valueOf](DBaseStateSetImplObservable.md#valueof)

#### Defined in

[src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts:439](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.414.0/src/main/typescript/wcardinal/ui/d-base-state-set-impl.ts#L439)
