[Winter Cardinal UI - v0.457.0](../index.md) / DDiagramSerializedDataWithMapping

# Interface: DDiagramSerializedDataWithMapping

A serialized data with a mapping data.

## Hierarchy

- `Array`\<`unknown`\>

  ↳ **`DDiagramSerializedDataWithMapping`**

## Table of contents

### Properties

- [0](DDiagramSerializedDataWithMapping.md#0)
- [1](DDiagramSerializedDataWithMapping.md#1)
- [[unscopables]](DDiagramSerializedDataWithMapping.md#[unscopables])
- [length](DDiagramSerializedDataWithMapping.md#length)

### Methods

- [[iterator]](DDiagramSerializedDataWithMapping.md#[iterator])
- [concat](DDiagramSerializedDataWithMapping.md#concat)
- [copyWithin](DDiagramSerializedDataWithMapping.md#copywithin)
- [entries](DDiagramSerializedDataWithMapping.md#entries)
- [every](DDiagramSerializedDataWithMapping.md#every)
- [fill](DDiagramSerializedDataWithMapping.md#fill)
- [filter](DDiagramSerializedDataWithMapping.md#filter)
- [find](DDiagramSerializedDataWithMapping.md#find)
- [findIndex](DDiagramSerializedDataWithMapping.md#findindex)
- [forEach](DDiagramSerializedDataWithMapping.md#foreach)
- [includes](DDiagramSerializedDataWithMapping.md#includes)
- [indexOf](DDiagramSerializedDataWithMapping.md#indexof)
- [join](DDiagramSerializedDataWithMapping.md#join)
- [keys](DDiagramSerializedDataWithMapping.md#keys)
- [lastIndexOf](DDiagramSerializedDataWithMapping.md#lastindexof)
- [map](DDiagramSerializedDataWithMapping.md#map)
- [pop](DDiagramSerializedDataWithMapping.md#pop)
- [push](DDiagramSerializedDataWithMapping.md#push)
- [reduce](DDiagramSerializedDataWithMapping.md#reduce)
- [reduceRight](DDiagramSerializedDataWithMapping.md#reduceright)
- [reverse](DDiagramSerializedDataWithMapping.md#reverse)
- [shift](DDiagramSerializedDataWithMapping.md#shift)
- [slice](DDiagramSerializedDataWithMapping.md#slice)
- [some](DDiagramSerializedDataWithMapping.md#some)
- [sort](DDiagramSerializedDataWithMapping.md#sort)
- [splice](DDiagramSerializedDataWithMapping.md#splice)
- [toLocaleString](DDiagramSerializedDataWithMapping.md#tolocalestring)
- [toString](DDiagramSerializedDataWithMapping.md#tostring)
- [unshift](DDiagramSerializedDataWithMapping.md#unshift)
- [values](DDiagramSerializedDataWithMapping.md#values)

## Properties

### 0

• **0**: `number`[]

Each number is a resource index number of JSON.stringify(DDiagramSerializedDataValue).
The last number is a resource index number of JSON.stringify(DDiagramSerializedDataMapping).

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:107](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L107)

___

### 1

• **1**: `undefined` \| `number`

A resource index number of JSON.stringify(DDiagramSerializedDataSystem).

#### Defined in

[src/main/typescript/wcardinal/ui/d-diagram-serialized.ts:112](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.457.0/src/main/typescript/wcardinal/ui/d-diagram-serialized.ts#L112)

___

### [unscopables]

• `Readonly` **[unscopables]**: `Object`

Is an object whose properties have the value 'true'
when they will be absent when used in a 'with' statement.

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `[unscopables]?` | `boolean` | Is an object whose properties have the value 'true' when they will be absent when used in a 'with' statement. |
| `length?` | `boolean` | Gets or sets the length of the array. This is a number one higher than the highest index in the array. |
| `[iterator]?` | {} | - |
| `concat?` | {} | - |
| `copyWithin?` | {} | - |
| `entries?` | {} | - |
| `every?` | {} | - |
| `fill?` | {} | - |
| `filter?` | {} | - |
| `find?` | {} | - |
| `findIndex?` | {} | - |
| `forEach?` | {} | - |
| `includes?` | {} | - |
| `indexOf?` | {} | - |
| `join?` | {} | - |
| `keys?` | {} | - |
| `lastIndexOf?` | {} | - |
| `map?` | {} | - |
| `pop?` | {} | - |
| `push?` | {} | - |
| `reduce?` | {} | - |
| `reduceRight?` | {} | - |
| `reverse?` | {} | - |
| `shift?` | {} | - |
| `slice?` | {} | - |
| `some?` | {} | - |
| `sort?` | {} | - |
| `splice?` | {} | - |
| `toLocaleString?` | {} | - |
| `toString?` | {} | - |
| `unshift?` | {} | - |
| `values?` | {} | - |

#### Inherited from

Array.[unscopables]

#### Defined in

node_modules/typescript/lib/lib.es2015.symbol.wellknown.d.ts:97

___

### length

• **length**: `number`

Gets or sets the length of the array. This is a number one higher than the highest index in the array.

#### Inherited from

Array.length

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1326

## Methods

### [iterator]

▸ **[iterator]**(): `IterableIterator`\<`unknown`\>

Iterator

#### Returns

`IterableIterator`\<`unknown`\>

#### Inherited from

Array.[iterator]

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:58

___

### concat

▸ **concat**(`...items`): `unknown`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `ConcatArray`\<`unknown`\>[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`unknown`[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1350

▸ **concat**(`...items`): `unknown`[]

Combines two or more arrays.
This method returns a new array without modifying any existing arrays.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `unknown`[] | Additional arrays and/or items to add to the end of the array. |

#### Returns

`unknown`[]

#### Inherited from

Array.concat

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1356

___

### copyWithin

▸ **copyWithin**(`target`, `start`, `end?`): `this`

Returns the this object after copying a section of the array identified by start and end
to the same array starting at position target

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `number` | If target is negative, it is treated as length+target where length is the length of the array. |
| `start` | `number` | If start is negative, it is treated as length+start. If end is negative, it is treated as length+end. |
| `end?` | `number` | If not specified, length of the this object is used as its default value. |

#### Returns

`this`

#### Inherited from

Array.copyWithin

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:62

___

### entries

▸ **entries**(): `IterableIterator`\<[`number`, `unknown`]\>

Returns an iterable of key, value pairs for every entry in the array

#### Returns

`IterableIterator`\<[`number`, `unknown`]\>

#### Inherited from

Array.entries

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:63

___

### every

▸ **every**\<`S`\>(`predicate`, `thisArg?`): this is S[]

Determines whether all the members of an array satisfy the specified test.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `unknown`, `index`: `number`, `array`: `unknown`[]) => value is S | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

this is S[]

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1433

▸ **every**(`predicate`, `thisArg?`): `boolean`

Determines whether all the members of an array satisfy the specified test.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `unknown`, `index`: `number`, `array`: `unknown`[]) => `unknown` | A function that accepts up to three arguments. The every method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value false, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.every

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1442

___

### fill

▸ **fill**(`value`, `start?`, `end?`): `this`

Changes all array elements from `start` to `end` index to a static `value` and returns the modified array

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | value to fill array section with |
| `start?` | `number` | index to start filling the array at. If start is negative, it is treated as length+start where length is the length of the array. |
| `end?` | `number` | index to stop filling the array at. If end is negative, it is treated as length+end. |

#### Returns

`this`

#### Inherited from

Array.fill

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:51

___

### filter

▸ **filter**\<`S`\>(`predicate`, `thisArg?`): `S`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `unknown`, `index`: `number`, `array`: `unknown`[]) => value is S | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`S`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1469

▸ **filter**(`predicate`, `thisArg?`): `unknown`[]

Returns the elements of an array that meet the condition specified in a callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `unknown`, `index`: `number`, `array`: `unknown`[]) => `unknown` | A function that accepts up to three arguments. The filter method calls the predicate function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`unknown`[]

#### Inherited from

Array.filter

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1475

___

### find

▸ **find**\<`S`\>(`predicate`, `thisArg?`): `undefined` \| `S`

Returns the value of the first element in the array where predicate is true, and undefined
otherwise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `S` | extends `unknown` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `unknown`, `index`: `number`, `obj`: `unknown`[]) => value is S | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, find immediately returns that element value. Otherwise, find returns undefined. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`undefined` \| `S`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:29

▸ **find**(`predicate`, `thisArg?`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `predicate` | (`value`: `unknown`, `index`: `number`, `obj`: `unknown`[]) => `unknown` |
| `thisArg?` | `any` |

#### Returns

`unknown`

#### Inherited from

Array.find

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:30

___

### findIndex

▸ **findIndex**(`predicate`, `thisArg?`): `number`

Returns the index of the first element in the array where predicate is true, and -1
otherwise.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `unknown`, `index`: `number`, `obj`: `unknown`[]) => `unknown` | find calls predicate once for each element of the array, in ascending order, until it finds one where predicate returns true. If such an element is found, findIndex immediately returns that element index. Otherwise, findIndex returns -1. |
| `thisArg?` | `any` | If provided, it will be used as the this value for each invocation of predicate. If it is not provided, undefined is used instead. |

#### Returns

`number`

#### Inherited from

Array.findIndex

#### Defined in

node_modules/typescript/lib/lib.es2015.core.d.ts:41

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each element in an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `unknown`, `index`: `number`, `array`: `unknown`[]) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Inherited from

Array.forEach

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1457

___

### includes

▸ **includes**(`searchElement`, `fromIndex?`): `boolean`

Determines whether an array includes a certain element, returning true or false as appropriate.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `unknown` | The element to search for. |
| `fromIndex?` | `number` | The position in this array at which to begin searching for searchElement. |

#### Returns

`boolean`

#### Inherited from

Array.includes

#### Defined in

node_modules/typescript/lib/lib.es2016.array.include.d.ts:25

___

### indexOf

▸ **indexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the first occurrence of a value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `unknown` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin the search. If fromIndex is omitted, the search starts at index 0. |

#### Returns

`number`

#### Inherited from

Array.indexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1418

___

### join

▸ **join**(`separator?`): `string`

Adds all the elements of an array into a string, separated by the specified separator string.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `separator?` | `string` | A string used to separate one element of the array from the next in the resulting string. If omitted, the array elements are separated with a comma. |

#### Returns

`string`

#### Inherited from

Array.join

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1361

___

### keys

▸ **keys**(): `IterableIterator`\<`number`\>

Returns an iterable of keys in the array

#### Returns

`IterableIterator`\<`number`\>

#### Inherited from

Array.keys

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:68

___

### lastIndexOf

▸ **lastIndexOf**(`searchElement`, `fromIndex?`): `number`

Returns the index of the last occurrence of a specified value in an array, or -1 if it is not present.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `searchElement` | `unknown` | The value to locate in the array. |
| `fromIndex?` | `number` | The array index at which to begin searching backward. If fromIndex is omitted, the search starts at the last index in the array. |

#### Returns

`number`

#### Inherited from

Array.lastIndexOf

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1424

___

### map

▸ **map**\<`U`\>(`callbackfn`, `thisArg?`): `U`[]

Calls a defined callback function on each element of an array, and returns an array that contains the results.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `unknown`, `index`: `number`, `array`: `unknown`[]) => `U` | A function that accepts up to three arguments. The map method calls the callbackfn function one time for each element in the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`U`[]

#### Inherited from

Array.map

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1463

___

### pop

▸ **pop**(): `unknown`

Removes the last element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`unknown`

#### Inherited from

Array.pop

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1339

___

### push

▸ **push**(`...items`): `number`

Appends new elements to the end of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `unknown`[] | New elements to add to the array. |

#### Returns

`number`

#### Inherited from

Array.push

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1344

___

### reduce

▸ **reduce**(`callbackfn`): `unknown`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `unknown`, `currentValue`: `unknown`, `currentIndex`: `number`, `array`: `unknown`[]) => `unknown` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |

#### Returns

`unknown`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1481

▸ **reduce**(`callbackfn`, `initialValue`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `unknown`, `currentValue`: `unknown`, `currentIndex`: `number`, `array`: `unknown`[]) => `unknown` |
| `initialValue` | `unknown` |

#### Returns

`unknown`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1482

▸ **reduce**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `unknown`, `currentIndex`: `number`, `array`: `unknown`[]) => `U` | A function that accepts up to four arguments. The reduce method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduce

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1488

___

### reduceRight

▸ **reduceRight**(`callbackfn`): `unknown`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `unknown`, `currentValue`: `unknown`, `currentIndex`: `number`, `array`: `unknown`[]) => `unknown` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |

#### Returns

`unknown`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1494

▸ **reduceRight**(`callbackfn`, `initialValue`): `unknown`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`previousValue`: `unknown`, `currentValue`: `unknown`, `currentIndex`: `number`, `array`: `unknown`[]) => `unknown` |
| `initialValue` | `unknown` |

#### Returns

`unknown`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1495

▸ **reduceRight**\<`U`\>(`callbackfn`, `initialValue`): `U`

Calls the specified callback function for all the elements in an array, in descending order. The return value of the callback function is the accumulated result, and is provided as an argument in the next call to the callback function.

#### Type parameters

| Name |
| :------ |
| `U` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`previousValue`: `U`, `currentValue`: `unknown`, `currentIndex`: `number`, `array`: `unknown`[]) => `U` | A function that accepts up to four arguments. The reduceRight method calls the callbackfn function one time for each element in the array. |
| `initialValue` | `U` | If initialValue is specified, it is used as the initial value to start the accumulation. The first call to the callbackfn function provides this value as an argument instead of an array value. |

#### Returns

`U`

#### Inherited from

Array.reduceRight

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1501

___

### reverse

▸ **reverse**(): `unknown`[]

Reverses the elements in an array in place.
This method mutates the array and returns a reference to the same array.

#### Returns

`unknown`[]

#### Inherited from

Array.reverse

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1366

___

### shift

▸ **shift**(): `unknown`

Removes the first element from an array and returns it.
If the array is empty, undefined is returned and the array is not modified.

#### Returns

`unknown`

#### Inherited from

Array.shift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1371

___

### slice

▸ **slice**(`start?`, `end?`): `unknown`[]

Returns a copy of a section of an array.
For both start and end, a negative index can be used to indicate an offset from the end of the array.
For example, -2 refers to the second to last element of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start?` | `number` | The beginning index of the specified portion of the array. If start is undefined, then the slice begins at index 0. |
| `end?` | `number` | The end index of the specified portion of the array. This is exclusive of the element at the index 'end'. If end is undefined, then the slice extends to the end of the array. |

#### Returns

`unknown`[]

#### Inherited from

Array.slice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1381

___

### some

▸ **some**(`predicate`, `thisArg?`): `boolean`

Determines whether the specified callback function returns true for any element of an array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predicate` | (`value`: `unknown`, `index`: `number`, `array`: `unknown`[]) => `unknown` | A function that accepts up to three arguments. The some method calls the predicate function for each element in the array until the predicate returns a value which is coercible to the Boolean value true, or until the end of the array. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the predicate function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`boolean`

#### Inherited from

Array.some

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1451

___

### sort

▸ **sort**(`compareFn?`): `this`

Sorts an array in place.
This method mutates the array and returns a reference to the same array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `compareFn?` | (`a`: `unknown`, `b`: `unknown`) => `number` | Function used to determine the order of the elements. It is expected to return a negative value if the first argument is less than the second argument, zero if they're equal, and a positive value otherwise. If omitted, the elements are sorted in ascending, ASCII character order. ```ts [11,2,22,1].sort((a, b) => a - b) ``` |

#### Returns

`this`

#### Inherited from

Array.sort

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1392

___

### splice

▸ **splice**(`start`, `deleteCount?`): `unknown`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount?` | `number` | The number of elements to remove. |

#### Returns

`unknown`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1399

▸ **splice**(`start`, `deleteCount`, `...items`): `unknown`[]

Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `start` | `number` | The zero-based location in the array from which to start removing elements. |
| `deleteCount` | `number` | The number of elements to remove. |
| `...items` | `unknown`[] | Elements to insert into the array in place of the deleted elements. |

#### Returns

`unknown`[]

An array containing the elements that were deleted.

#### Inherited from

Array.splice

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1407

___

### toLocaleString

▸ **toLocaleString**(): `string`

Returns a string representation of an array. The elements are converted to string using their toLocaleString methods.

#### Returns

`string`

#### Inherited from

Array.toLocaleString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1334

___

### toString

▸ **toString**(): `string`

Returns a string representation of an array.

#### Returns

`string`

#### Inherited from

Array.toString

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1330

___

### unshift

▸ **unshift**(`...items`): `number`

Inserts new elements at the start of an array, and returns the new length of the array.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...items` | `unknown`[] | Elements to insert at the start of the array. |

#### Returns

`number`

#### Inherited from

Array.unshift

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1412

___

### values

▸ **values**(): `IterableIterator`\<`unknown`\>

Returns an iterable of values in the array

#### Returns

`IterableIterator`\<`unknown`\>

#### Inherited from

Array.values

#### Defined in

node_modules/typescript/lib/lib.es2015.iterable.d.ts:73
