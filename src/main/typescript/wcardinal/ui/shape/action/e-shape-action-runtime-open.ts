/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramBaseControllerOpenType } from "../../d-diagram-base-controller";
import { EShape } from "../e-shape";
import { EShapeRuntime } from "../e-shape-runtime";
import { EShapeRuntimeReset } from "../e-shape-runtime-reset";
import { EShapeActionEnvironment } from "./e-shape-action-environment";
import { EShapeActionExpression } from "./e-shape-action-expression";
import { EShapeActionExpressions } from "./e-shape-action-expressions";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { EShapeActions } from "./e-shape-actions";
import { EShapeActionValueOpen, EThemeShapeActionValueOpen } from "./e-shape-action-value-open";
import { EShapeActionValueOpenExtension } from "./e-shape-action-value-open-extension";
import { DThemes } from "../../theme";
import { InteractionEvent, InteractionManager } from "pixi.js";
import { EShapeActionRuntimeOpenDropped } from "./e-shape-action-runtime-open-dropped";

export class EShapeActionRuntimeOpen extends EShapeActionRuntimeConditional {
	protected subtype: number;
	protected readonly target: EShapeActionExpression<unknown>;
	protected inNewWindow: boolean;

	constructor(
		value: EShapeActionValueOpen | EShapeActionValueOpenExtension,
		subtype: DDiagramBaseControllerOpenType
	) {
		super(value, EShapeRuntimeReset.NONE);
		this.subtype = subtype;
		this.target = EShapeActionExpressions.ofUnknown(value.target);
		this.inNewWindow = value.inNewWindow;
	}

	override isDraggable(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent): boolean {
		return this.condition(shape, e.data.originalEvent.timeStamp, EShapeActionEnvironment);
	}

	override onDragStart(
		shape: EShape,
		runtime: EShapeRuntime,
		e: DragEvent,
		manager: InteractionManager
	): boolean {
		const dataTransfer = e.dataTransfer;
		if (dataTransfer == null) {
			return false;
		}
		const target = this.target(shape, e.timeStamp, EShapeActionEnvironment);
		if (target == null) {
			return false;
		}
		const data = this.toDragData(
			new EShapeActionRuntimeOpenDropped(shape, this.subtype, target)
		);
		if (data == null) {
			return false;
		}
		const theme =
			DThemes.getInstance().get<EThemeShapeActionValueOpen>("EShapeActionValueOpen");
		dataTransfer.setData(theme.getDragDataFormat(), data);
		dataTransfer.effectAllowed = theme.getDragEffectAllowed();
		const dragImage = theme.getDragImage();
		if (dragImage != null) {
			document.body.appendChild(dragImage);
			dataTransfer.setDragImage(
				dragImage,
				theme.getDragImageOffsetX(),
				theme.getDragImageOffsetY()
			);
			requestAnimationFrame(() => {
				document.body.removeChild(dragImage);
			});
		}
		return true;
	}

	protected toDragData(target: unknown): string | null {
		try {
			return JSON.stringify(target);
		} catch {
			return null;
		}
	}

	execute(shape: EShape, runtime: EShapeRuntime, time: number): void {
		if (this.condition(shape, time, EShapeActionEnvironment)) {
			const target = this.target(shape, time, EShapeActionEnvironment);
			if (target != null) {
				EShapeActions.open(
					shape,
					this.subtype,
					target,
					this.inNewWindow,
					EShapeActionEnvironment
				);
			}
		}
	}
}
