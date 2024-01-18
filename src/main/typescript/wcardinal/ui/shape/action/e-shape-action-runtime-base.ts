/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { InteractionEvent, InteractionManager, Renderer } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { EShapeActionRuntime } from "./e-shape-action-runtime";

/**
 * A base class of action runtimes.
 */
export class EShapeActionRuntimeBase implements EShapeActionRuntime {
	readonly reset: EShapeRuntimeReset;

	constructor(reset?: EShapeRuntimeReset) {
		this.reset = reset || EShapeRuntimeReset.NONE;
	}

	initialize(shape: EShape, runtime: EShapeRuntime): void {
		// DO NOTHING
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		// DO NOTHING
	}

	onResize(shape: EShape, runtime: EShapeRuntime): void {
		// DO NOTHING
	}

	onFocus(shape: EShape, runtime: EShapeRuntime): void {
		// DO NOTHING
	}

	onBlur(shape: EShape, runtime: EShapeRuntime): void {
		// DO NOTHING
	}

	onClick(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void {
		// DO NOTHING
	}

	onDblClick(
		shape: EShape,
		runtime: EShapeRuntime,
		e: MouseEvent | TouchEvent,
		manager: InteractionManager
	): void {
		// DO NOTHING
	}

	onDowning(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void {
		// DO NOTHING
	}

	onDown(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void {
		// DO NOTHING
	}

	onMove(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void {
		// DO NOTHING
	}

	onOver(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void {
		// DO NOTHING
	}

	onOut(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void {
		// DO NOTHING
	}

	onUp(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void {
		// DO NOTHING
	}

	onUpOutside(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void {
		// DO NOTHING
	}

	onPressed(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void {
		// DO NOTHING
	}

	onUnpressed(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void {
		// DO NOTHING
	}

	onKeyDown(shape: EShape, runtime: EShapeRuntime, e: KeyboardEvent): void {
		// DO NOTHING
	}

	onKeyUp(shape: EShape, runtime: EShapeRuntime, e: KeyboardEvent): void {
		// DO NOTHING
	}

	onRightClick(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void {
		// DO NOTHING
	}

	onRightDowning(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void {
		// DO NOTHING
	}

	onRightDown(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void {
		// DO NOTHING
	}

	onRightUp(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void {
		// DO NOTHING
	}

	onRightUpOutside(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void {
		// DO NOTHING
	}

	onRightPressed(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void {
		// DO NOTHING
	}

	onRightUnpressed(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): void {
		// DO NOTHING
	}

	onRender(shape: EShape, runtime: EShapeRuntime, time: number, renderer: Renderer): void {
		// DO NOTHING
	}
}
