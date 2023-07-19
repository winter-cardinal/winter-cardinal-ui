/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, IPoint, Point, Rectangle, utils } from "pixi.js";
import { DBase } from "./d-base";
import { UtilGestureModifier } from "./util/util-gesture-modifier";
import { UtilGestureModifiers } from "./util/util-gesture-modifiers";
import { DThemeView, DView, DViewChecker, DViewOptions } from "./d-view";
import { DViewGesture } from "./d-view-gesture";
import { DViewGestureImpl } from "./d-view-gesture-impl";
import { DViewTargetPoint, DViewToTarget } from "./d-view-to-target";
import { DViewTransformImpl } from "./d-view-transform-impl";
import { DThemes } from "./theme/d-themes";
import { isString } from "./util/is-string";
import { toEnum } from "./util/to-enum";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";
import { DViewConstraint } from "./d-view-constraint";

export class DViewImpl extends utils.EventEmitter implements DView {
	protected static CONSTRAINT: DViewConstraint = (target, x, y, scaleX, scaleY): void => {
		target.scale.set(scaleX, scaleY);
		target.position.set(x, y);
	};

	protected _parent: DBase;
	protected _toTarget: DViewToTarget;
	protected _constraint: DViewConstraint;

	protected _zoomPoint: Point;
	protected _zoomMin: number;
	protected _zoomMax: number;
	protected _zoomKeepRatio: boolean;

	protected _isWheelZoomEnabled: boolean;
	protected _wheelZoomSpeed: number;
	protected _wheelZoomModifier: UtilGestureModifier;
	protected _wheelZoomChecker: DViewChecker;

	protected _isDblClickZoomEnabled: boolean;
	protected _dblClickZoomSpeed: number;
	protected _dblClickZoomModifier: UtilGestureModifier;
	protected _dblClickZoomChecker: DViewChecker;
	protected _dblclickZoomDuration: number;

	protected _isWheelTranslationEnabled: boolean;
	protected _wheelTranslationSpeed: number;
	protected _wheelTranslationModifier: UtilGestureModifier;
	protected _wheelTranslationChecker: DViewChecker;

	protected _transform: DViewTransformImpl;
	protected _gesture: DViewGestureImpl;

	protected _workRect: Rectangle;

	constructor(parent: DBase, toTarget: DViewToTarget, options: DViewOptions | undefined) {
		super();
		this._parent = parent;
		this._toTarget = toTarget;
		this._constraint = (options && options.constraint) || DViewImpl.CONSTRAINT;

		this._workRect = new Rectangle();

		// Theme
		const theme = this.toTheme(options) || this.getThemeDefault();

		// Zoom
		const zoom = options?.zoom;
		this._zoomPoint = new Point();
		this._zoomMin = zoom?.min ?? theme.getZoomMin();
		this._zoomMax = zoom?.max ?? theme.getZoomMax();
		this._zoomKeepRatio = zoom?.keepRatio ?? theme.getZoomKeepRatio();

		// Zoom: Wheel
		const wheelZoom = zoom?.wheel;
		this._isWheelZoomEnabled = wheelZoom?.enable ?? theme.isWheelZoomEnabled();
		this._wheelZoomSpeed = wheelZoom?.speed ?? theme.getWheelZoomSpeed();
		this._wheelZoomModifier = toEnum(
			wheelZoom?.modifier ?? theme.getWheelZoomModifier(),
			UtilGestureModifier
		);
		this._wheelZoomChecker = wheelZoom?.checker ?? UtilGestureModifiers.match;

		// Zoom: Dbl click
		const dblClickZoom = zoom?.dblclick;
		this._isDblClickZoomEnabled = dblClickZoom?.enable ?? theme.isDblClickZoomEnabled();
		this._dblClickZoomSpeed = dblClickZoom?.amount ?? theme.getDblClickZoomSpeed();
		this._dblClickZoomModifier = toEnum(
			dblClickZoom?.modifier ?? theme.getDblClickZoomModifier(),
			UtilGestureModifier
		);
		this._dblClickZoomChecker = dblClickZoom?.checker ?? UtilGestureModifiers.match;
		this._dblclickZoomDuration = dblClickZoom?.duration ?? theme.getDblClickZoomDuration();

		// Translation: Wheel
		const wheelTranslation = options?.translation?.wheel;
		this._isWheelTranslationEnabled =
			wheelTranslation?.enable ?? theme.isWheelTranslationEnabled();
		this._wheelTranslationSpeed = wheelTranslation?.speed ?? theme.getWheelTranslationSpeed();
		this._wheelTranslationModifier = toEnum(
			wheelTranslation?.modifier ?? theme.getWheelTranslationModifier(),
			UtilGestureModifier
		);
		this._wheelTranslationChecker = wheelTranslation?.checker ?? UtilGestureModifiers.match;

		// Gesture
		this._gesture = new DViewGestureImpl(
			parent,
			toTarget,
			this,
			this._constraint,
			theme,
			options?.gesture
		);

		// Transform
		this._transform = new DViewTransformImpl(
			parent,
			toTarget,
			this,
			this._constraint,
			this._dblclickZoomDuration
		);

		// Events
		if (options != null) {
			const on = options.on;
			if (on != null) {
				for (const name in on) {
					const handler = on[name];
					if (handler) {
						this.on(name, handler);
					}
				}
			}
		}
	}

	get gesture(): DViewGesture {
		return this._gesture;
	}

	stop(): void {
		this._gesture.stop();
		this._transform.stop();
	}

	reset(duration?: number, stop?: boolean): void {
		const parent = this._parent;
		const target = this._toTarget(parent);
		if (target) {
			const targetRect = target.getLocalBounds(this._workRect);
			const newTargetX = (parent.width - targetRect.width) * 0.5 - targetRect.x;
			const newTargetY = (parent.height - targetRect.height) * 0.5 - targetRect.y;
			this._transform.start(target, newTargetX, newTargetY, 1, 1, duration, stop);
		}
	}

	fit(duration?: number, stop?: boolean): void {
		const parent = this._parent;
		const target = this._toTarget(parent) as any;
		if (target) {
			const padding = parent.padding;
			const width = parent.width;
			const height = parent.height;
			const targetRect = target.getLocalBounds(this._workRect);
			const targetX = targetRect.x;
			const targetY = targetRect.y;
			const targetWidth = targetRect.width;
			const targetHeight = targetRect.height;
			let newTargetScaleX = (width - padding.getLeft() - padding.getRight()) / targetWidth;
			let newTargetScaleY = (height - padding.getTop() - padding.getBottom()) / targetHeight;
			if (this._zoomKeepRatio) {
				const newTargetScale = this.toNormalizedScale(
					Math.min(newTargetScaleX, newTargetScaleY)
				);
				newTargetScaleX = newTargetScale;
				newTargetScaleY = newTargetScale;
			} else {
				newTargetScaleX = this.toNormalizedScale(newTargetScaleX);
				newTargetScaleY = this.toNormalizedScale(newTargetScaleY);
			}
			const newTargetWidth = targetWidth * newTargetScaleX;
			const newTargetHeight = targetHeight * newTargetScaleY;
			const newTargetX = (width - newTargetWidth) * 0.5 - targetX * newTargetScaleX;
			const newTargetY = (height - newTargetHeight) * 0.5 - targetY * newTargetScaleY;
			this._transform.start(
				target,
				newTargetX,
				newTargetY,
				newTargetScaleX,
				newTargetScaleY,
				duration,
				stop
			);
		}
	}

	zoomIn(duration?: number, stop?: boolean): void {
		const target = this._toTarget(this._parent);
		if (target) {
			const factor = this._dblClickZoomSpeed;
			const targetScale = target.scale;
			this.zoom(targetScale.x * factor, targetScale.y * factor, duration, stop);
		}
	}

	zoomOut(duration?: number, stop?: boolean): void {
		const target = this._toTarget(this._parent);
		if (target) {
			const factor = 1 / this._dblClickZoomSpeed;
			const targetScale = target.scale;
			this.zoom(targetScale.x * factor, targetScale.y * factor, duration, stop);
		}
	}

	zoomAt(
		x: number,
		y: number,
		scaleX: number,
		scaleY: number,
		duration?: number,
		stop?: boolean
	): void {
		const target = this._toTarget(this._parent);
		if (target) {
			// Scale
			const oldScaleX = target.scale.x;
			const oldScaleY = target.scale.y;
			const newScaleX = this.toNormalizedScale(scaleX);
			const newScaleY = this.toNormalizedScale(scaleY);
			const scaleRatioX = newScaleX / oldScaleX;
			const scaleRatioY = newScaleY / oldScaleY;

			// Position
			const newX = (target.position.x - x) * scaleRatioX + x;
			const newY = (target.position.y - y) * scaleRatioY + y;

			// Start
			this._transform.start(target, newX, newY, newScaleX, newScaleY, duration, stop);
		}
	}

	zoomAtGlobal(
		x: number,
		y: number,
		scaleX: number,
		scaleY: number,
		duration?: number,
		stop?: boolean
	): void {
		const local = this._zoomPoint;
		local.set(x, y);
		this.toLocal(local, local);
		this.zoomAt(local.x, local.y, scaleX, scaleY, duration, stop);
	}

	zoom(scaleX: number, scaleY: number, duration?: number, stop?: boolean): void {
		const parent = this._parent;
		this.zoomAt(parent.width * 0.5, parent.height * 0.5, scaleX, scaleY, duration, stop);
	}

	get scale(): DViewTargetPoint {
		const target = this._toTarget(this._parent);
		if (target) {
			return target.scale;
		}
		return new Point(1, 1);
	}

	set scale(scale: DViewTargetPoint) {
		const target = this._toTarget(this._parent);
		if (target) {
			const newScaleX = this.toNormalizedScale(scale.x);
			const newScaleY = this.toNormalizedScale(scale.y);
			const targetPosition = target.position;
			this._constraint(target, targetPosition.x, targetPosition.y, newScaleX, newScaleY);
		}
	}

	moveTo(x: number, y: number, duration?: number, stop?: boolean): void {
		const target = this._toTarget(this._parent);
		if (target) {
			const targetScale = target.scale;
			this._transform.start(target, x, y, targetScale.x, targetScale.y, duration, stop);
		}
	}

	get position(): DViewTargetPoint {
		const target = this._toTarget(this._parent);
		if (target) {
			return target.position;
		}
		return new Point(0, 0);
	}

	set position(position: DViewTargetPoint) {
		const target = this._toTarget(this._parent);
		if (target) {
			const targetScale = target.scale;
			this._constraint(target, position.x, position.y, targetScale.x, targetScale.y);
		}
	}

	transform(
		x: number,
		y: number,
		scaleX: number,
		scaleY: number,
		duration?: number,
		stop?: boolean
	): void {
		const target = this._toTarget(this._parent);
		if (target) {
			this._transform.start(target, x, y, scaleX, scaleY, duration, stop);
		}
	}

	toLocal(global: IPoint, local: IPoint, skipUpdate?: boolean): IPoint {
		return this._parent.toLocal(global, undefined, local, skipUpdate);
	}

	toGlobal(local: IPoint, global: IPoint, skipUpdate?: boolean): IPoint {
		return this._parent.toGlobal(local, global, skipUpdate);
	}

	toNormalizedScale(scale: number): number {
		return Math.min(this._zoomMax, Math.max(this._zoomMin, scale));
	}

	onWheel(e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point): boolean {
		if (
			this._isWheelZoomEnabled &&
			this._wheelZoomChecker(e, this._wheelZoomModifier, this._parent)
		) {
			if (deltas.deltaY !== 0) {
				const target = this._toTarget(this._parent);
				if (target) {
					const speed = deltas.lowest * this._wheelZoomSpeed;
					const factor = 1 + deltas.deltaY * speed;
					const targetScale = target.scale;
					this.zoomAtGlobal(
						global.x,
						global.y,
						targetScale.x * factor,
						targetScale.y * factor,
						0
					);
					return true;
				}
			}
		}

		if (
			this._isWheelTranslationEnabled &&
			this._wheelTranslationChecker(e, this._wheelTranslationModifier, this._parent)
		) {
			const target = this._toTarget(this._parent);
			if (target) {
				this.stop();
				const speed = deltas.lowest * this._wheelTranslationSpeed;
				const targetPosition = target.position;
				const newX = targetPosition.x - deltas.deltaX * speed;
				const newY = targetPosition.y + deltas.deltaY * speed;
				const targetScale = target.scale;
				this._constraint(target, newX, newY, targetScale.x, targetScale.y);
				return true;
			}
		}

		return false;
	}

	onDown(e: interaction.InteractionEvent): void {
		this._gesture.onDown(e);
	}

	onDblClick(
		e: MouseEvent | TouchEvent,
		interactionManager: interaction.InteractionManager
	): boolean {
		if (
			this._isDblClickZoomEnabled &&
			this._dblClickZoomChecker(e, this._dblClickZoomModifier, this._parent)
		) {
			const target = this._toTarget(this._parent);
			if (target) {
				const global = this._zoomPoint;
				UtilPointerEvent.toGlobal(e, interactionManager, global);
				const factor = this._dblClickZoomSpeed;
				const targetScale = target.scale;
				this.zoomAtGlobal(
					global.x,
					global.y,
					targetScale.x * factor,
					targetScale.y * factor,
					this._dblclickZoomDuration
				);
				return true;
			}
		}

		return false;
	}

	protected toTheme(options?: DViewOptions): DThemeView | null {
		if (options && options.theme) {
			const theme = options.theme;
			if (isString(theme)) {
				return DThemes.getInstance().get(theme);
			} else {
				return theme;
			}
		}
		return null;
	}

	protected getThemeDefault(): DThemeView {
		return DThemes.getInstance().get(this.getType());
	}

	protected getType(): string {
		return "DView";
	}
}
