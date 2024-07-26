[Winter Cardinal UI - v0.442.0](../index.md) / EShapeActionEnvironment

# Interface: EShapeActionEnvironment

[EShape](EShape.md) action environment.

In action expressions, all the properties in this object can be accessed without `EShapeActionEnvironment.`.
For instance, if this object has a property of the name `apple`, the string `apple` is a valid expression
and is equivalent to `EShapeActionEnvironment.apple`.

## Indexable

▪ [key: `string`]: `unknown`

## Table of contents

### Properties

- [isInitializing](EShapeActionEnvironment.md#isinitializing)

## Properties

### isInitializing

• **isInitializing**: `boolean`

True if evaluating actions for the first time and false otherwise.
This property is intended to be used to execute actions up to once.

#### Defined in

[src/main/typescript/wcardinal/ui/shape/action/e-shape-action-environment.ts:20](https://github.com/winter-cardinal/winter-cardinal-ui/blob/v0.442.0/src/main/typescript/wcardinal/ui/shape/action/e-shape-action-environment.ts#L20)
