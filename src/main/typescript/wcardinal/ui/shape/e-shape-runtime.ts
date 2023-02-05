/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Renderer } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import InteractionManager = interaction.InteractionManager;
import { EShapeActionRuntime } from "./action/e-shape-action-runtime";
import { EShape } from "./e-shape";
import { EShapeFillLike } from "./e-shape-fill";
import { EShapeStrokeLike } from "./e-shape-stroke";
import { EShapeTextLike } from "./e-shape-text";
import { DBaseStateSet } from "../d-base-state-set";
import { EShapeRuntimeReset } from "./e-shape-runtime-reset";

export interface EShapeRuntime {
	readonly x: number;
	readonly y: number;
	readonly sizeX: number;
	readonly sizeY: number;
	readonly rotation: number;
	readonly actions: EShapeActionRuntime[];
	readonly fill: EShapeFillLike;
	readonly stroke: EShapeStrokeLike;
	readonly text: EShapeTextLike;
	readonly cursor?: string;
	readonly interactive: boolean;

	reset: EShapeRuntimeReset;
	written: EShapeRuntimeReset;
	effect: number;
	isStateChanged: boolean;

	initialize(shape: EShape): void;

	isActionable(): boolean;

	update(shape: EShape, time: number): void;

	onResize(shape: EShape): void;

	onClick(shape: EShape, e: InteractionEvent | KeyboardEvent): void;

	onDblClick(
		shape: EShape,
		e: MouseEvent | TouchEvent,
		interactionManager: InteractionManager
	): boolean;

	onOver(shape: EShape, e: InteractionEvent): void;

	onOut(shape: EShape, e: InteractionEvent): void;

	onDown(shape: EShape, e: InteractionEvent | KeyboardEvent): void;

	onUp(shape: EShape, e: InteractionEvent | KeyboardEvent): void;

	onUpOutside(shape: EShape, e: InteractionEvent): void;

	onMove(shape: EShape, e: InteractionEvent): void;

	onKeyDown(shape: EShape, e: KeyboardEvent): boolean;

	onKeyUp(shape: EShape, e: KeyboardEvent): boolean;

	onStateChange(shape: EShape, newState: DBaseStateSet, oldState: DBaseStateSet): void;

	onFocus(shape: EShape): void;

	onBlur(shape: EShape): void;

	onRightClick(shape: EShape, e: InteractionEvent): void;

	onRightDown(shape: EShape, e: InteractionEvent): void;

	onRightUp(shape: EShape, e: InteractionEvent): void;

	onRightUpOutside(shape: EShape, e: InteractionEvent): void;

	onRender(shape: EShape, time: number, renderer: Renderer): void;
}
