/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Renderer } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";

/**
 * An action runtime.
 * Please note that all the action runtimes are shared across shapes.
 */
export class EShapeActionRuntime {
	reset: EShapeRuntimeReset;

	constructor(reset?: EShapeRuntimeReset) {
		this.reset = reset || EShapeRuntimeReset.NONE;
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		// OVERRIDE THIS
	}

	onFocus(shape: EShape, runtime: EShapeRuntime): void {
		// DO NOTHING
	}

	onBlur(shape: EShape, runtime: EShapeRuntime): void {
		// DO NOTHING
	}

	onDownThisBefore(
		shape: EShape,
		runtime: EShapeRuntime,
		e: interaction.InteractionEvent | KeyboardEvent
	): void {
		// DO NOTHING
	}

	onDownThisAfter(
		shape: EShape,
		runtime: EShapeRuntime,
		e: interaction.InteractionEvent | KeyboardEvent
	): void {
		// DO NOTHING
	}

	onDblClick(
		shape: EShape,
		runtime: EShapeRuntime,
		e: MouseEvent | TouchEvent,
		interactionManager: interaction.InteractionManager
	): void {
		// DO NOTHING
	}

	onRender(shape: EShape, runtime: EShapeRuntime, time: number, renderer: Renderer): void {
		// DO NOTHING
	}
}
