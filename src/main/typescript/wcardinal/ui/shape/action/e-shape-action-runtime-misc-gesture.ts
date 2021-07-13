/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import InteractionEvent = interaction.InteractionEvent;
import { EShape } from "../e-shape";
import { EShapeRuntime, EShapeRuntimeReset } from "../e-shape-runtime";
import { EShapeActionRuntimeConditional } from "./e-shape-action-runtime-conditional";
import { DApplications } from "../../d-applications";
import { UtilGesture } from "../../util/util-gesture";
import { EShapeActionValueMiscGesture } from "./e-shape-action-value-misc-gesture";
import { EShapeActionValueMiscGestureType } from "./e-shape-action-value-misc-gesture-type";

export class EShapeActionRuntimeMiscGesture extends EShapeActionRuntimeConditional {
	protected static GESTURE_UTIL?: UtilGesture<EShape>;
	protected _gestureType: EShapeActionValueMiscGestureType;
	protected _scaleMin: number;
	protected _scaleMax: number;

	constructor(value: EShapeActionValueMiscGesture) {
		super(value, EShapeRuntimeReset.NONE);
		this._gestureType = value.gestureType;
		this._scaleMin = value.scaleMin;
		this._scaleMax = value.scaleMax;
	}

	onDown(shape: EShape, runtime: EShapeRuntime, e: InteractionEvent | KeyboardEvent): void {
		super.onDown(shape, runtime, e);

		if (e instanceof InteractionEvent) {
			if (this.condition(shape, e.data.originalEvent.timeStamp)) {
				this.getGestureUtil().onDown(shape, e);
			}
		}
	}

	protected getGestureUtil(): UtilGesture<EShape> {
		return (EShapeActionRuntimeMiscGesture.GESTURE_UTIL ??= this.newGestureUtil());
	}

	protected newGestureUtil(): UtilGesture<EShape> {
		const work = new Point();
		return new UtilGesture<EShape>({
			on: {
				move: (
					target: EShape,
					dx: number,
					dy: number,
					x: number,
					y: number,
					ds: number
				): void => {
					this.onGestureMove(target, dx, dy, x, y, ds, work);
				}
			}
		});
	}

	protected onGestureMove(
		target: EShape,
		dx: number,
		dy: number,
		x: number,
		y: number,
		ds: number,
		work: Point
	): void {
		const parent = target.parent;
		if (parent) {
			const transform = target.transform;
			const gestureType = this._gestureType;
			let isChanged = false;

			// Scale
			let scaleRatio = 1;
			if (gestureType & EShapeActionValueMiscGestureType.PINCH) {
				const scale = transform.scale;
				const oldScale = scale.y;
				const newScale = Math.min(this._scaleMax, Math.max(this._scaleMin, oldScale * ds));
				scaleRatio = newScale / oldScale;
				scale.set(newScale, newScale);
				isChanged = true;
			}

			// Position
			if (gestureType & EShapeActionValueMiscGestureType.DRAG) {
				parent.toLocal(work.set(x, y), undefined, work);
				const lx = work.x;
				const ly = work.y;
				const cx = x - dx;
				const cy = y - dy;
				parent.toLocal(work.set(cx, cy), undefined, work);
				const lcx = work.x;
				const lcy = work.y;
				const position = transform.position;
				const newX = (position.x - lcx) * scaleRatio + lx;
				const newY = (position.y - lcy) * scaleRatio + ly;
				position.set(newX, newY);
				isChanged = true;
			}

			// Update
			if (isChanged) {
				DApplications.update(target);
			}
		}
	}
}
