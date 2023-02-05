/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Renderer } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import InteractionManager = interaction.InteractionManager;
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";

/**
 * An action runtime.
 * Please note that all the action runtimes are shared across shapes.
 */
export interface EShapeActionRuntime {
	readonly reset: EShapeRuntimeReset;

	/**
	 * Called to initialize this action runtime for the given shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 */
	initialize(shape: EShape, runtime: EShapeRuntime): void;

	/**
	 * Called to execute this action for the given shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param time a current time
	 */
	execute(shape: EShape, runtime: EShapeRuntime, time: number): void;

	/**
	 * Called when the shape size is changed.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 */
	onResize(shape: EShape, runtime: EShapeRuntime): void;

	/**
	 * Called when a shape is clicked.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onClick(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void;

	/**
	 * Called when a shape is double clicked.
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 * @param manager the interaction manager
	 */
	onDblClick(
		shape: EShape,
		runtime: EShapeRuntime,
		e: MouseEvent | TouchEvent,
		manager: InteractionManager
	): void;

	/**
	 * Called when a pointer or a key are about to be pressed on a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onDowning(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void;

	/**
	 * Called when a pointer or a key get pressed on a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onDown(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void;

	/**
	 * Called when a pointer is moved on a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onMove(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void;

	/**
	 * Called when a pointer gets on a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onOver(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void;

	/**
	 * Called when a pointer gets out of a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onOut(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void;

	/**
	 * Called when a pointer or a key get released on a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onUp(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void;

	/**
	 * Called when a pointer or a key get released outside of a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onUpOutside(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void;

	/**
	 * Called when a shape is pressed.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onPressed(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void;

	/**
	 * Called when a shape is released.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onUnpressed(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void;

	/**
	 * Called when a key is pressed on a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onKeyDown(shape: EShape, runtime: EShapeRuntime, e: KeyboardEvent): void;

	/**
	 * Called when a key is released on a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onKeyUp(shape: EShape, runtime: EShapeRuntime, e: KeyboardEvent): void;

	/**
	 * Called when a shape get focused.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 */
	onFocus(shape: EShape, runtime: EShapeRuntime): void;

	/**
	 * Called when a shape losees a focuse.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 */
	onBlur(shape: EShape, runtime: EShapeRuntime): void;

	/**
	 * Called when a shape is right-clicked.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onRightClick(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void;

	/**
	 * Called when a secondary button is about to be pressed on a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onRightDowning(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void;

	/**
	 * Called when a secondary button gets pressed on a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onRightDown(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void;

	/**
	 * Called when a secondary button gets released on a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onRightUp(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void;

	/**
	 * Called when a secondary button get released outside of a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onRightUpOutside(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void;

	/**
	 * Called when a secondary button is pressed on a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onRightPressed(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void;

	/**
	 * Called when a secondary button is released on a shape.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 * @param e an event object
	 */
	onRightUnpressed(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void;

	/**
	 * Called when a shape get rendered.
	 *
	 * @param shape a shape
	 * @param runtime a runtime
	 */
	onRender(shape: EShape, runtime: EShapeRuntime, time: number, renderer: Renderer): void;
}
