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

export class EShapeActionRuntimeOpen extends EShapeActionRuntimeConditional {
	protected subtype: number;
	protected readonly target: EShapeActionExpression<unknown>;
	protected inNewWindow: boolean;

	protected _theme: EThemeShapeActionValueOpen;
	protected _isDraggable: boolean;
	protected _dragImage: HTMLImageElement | HTMLCanvasElement | null;

	constructor(
		value: EShapeActionValueOpen | EShapeActionValueOpenExtension,
		subtype: DDiagramBaseControllerOpenType
	) {
		super(value, EShapeRuntimeReset.NONE);
		this.subtype = subtype;
		this.target = EShapeActionExpressions.ofUnknown(value.target);
		this.inNewWindow = value.inNewWindow;

		this._theme = DThemes.getInstance().get("EShapeActionValueOpen");
		const theme = this._theme;
		this._isDraggable = theme.isDraggable();
		if (this._isDraggable) {
			const dragImage = theme.getDragImage();
			if (dragImage != null) {
				document.body.appendChild(dragImage);
			}
			this._dragImage = dragImage;
		} else {
			this._dragImage = null;
		}
	}

	override isDraggable(shape: EShape, runtime: EShapeRuntime): boolean {
		return this._isDraggable;
	}

	override onDragStart(
		shape: EShape,
		runtime: EShapeRuntime,
		e: DragEvent,
		manager: PIXI.InteractionManager
	): void {
		const dataTransfer = e.dataTransfer;
		if (dataTransfer == null) {
			return;
		}
		const target = this.target(shape, e.timeStamp, EShapeActionEnvironment);
		if (target == null) {
			return;
		}
		const data = this.toDragData(target);
		if (data == null) {
			return;
		}
		const theme = this._theme;
		dataTransfer.setData(theme.getDragDataFormat(), JSON.stringify(target));
		dataTransfer.effectAllowed = theme.getDragEffectAllowed();
		const dragImage = this._dragImage;
		if (dragImage != null) {
			dataTransfer.setDragImage(
				dragImage,
				theme.getDragImageOffsetX(),
				theme.getDragImageOffsetY()
			);
		}
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
