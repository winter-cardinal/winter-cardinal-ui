/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBase } from "./d-base";
import { UtilGestureModifier } from "./util/util-gesture-modifier";
import { DThemeViewGesture, DViewGesture, DViewGestureOptions } from "./d-view-gesture";
import { DViewTargetPoint } from "./d-view-to-target";
import { DViewConstraint } from "./d-view-constraint";
import { DOnOptions } from "./d-on-options";
import { DViewTransform } from "./d-view-transform";

export type DViewChecker = (
	e: WheelEvent | MouseEvent | TouchEvent,
	modifier: UtilGestureModifier,
	target: DBase
) => boolean;

/**
 * {@link DView} wheel zoom options.
 */
export interface DViewZoomWheelOptions {
	/** True to enable wheel zoom */
	enable?: boolean;

	/** Zoom speed */
	speed?: number;

	/** Mouse modifiers */
	modifier?: keyof typeof UtilGestureModifier | UtilGestureModifier;

	/**
	 * Wheel zoom checker.
	 * If a checker returns false, wheel zooms will be canceled.
	 */
	checker?: DViewChecker;
}

/**
 * {@link DView} double-click zoom options.
 */
export interface DViewZoomDblClickOptions {
	/** True to enable double click zoom */
	enable?: boolean;

	/** Zoom amount */
	amount?: number;

	/** Mouse modifiers */
	modifier?: keyof typeof UtilGestureModifier | UtilGestureModifier;

	/**
	 * Double click zoom checker.
	 * If a checker returns false, double click zooms will be canceled.
	 */
	checker?: DViewChecker;

	/** Zoom duration */
	duration?: number;
}

/**
 * {@link DView} zoom options.
 */
export interface DViewZoomOptions {
	/** Minimum scale */
	min?: number;

	/** Maximum scale */
	max?: number;

	/** True to keep size ratio */
	keepRatio?: boolean;

	/** Wheel zoom options */
	wheel?: DViewZoomWheelOptions;

	/** Double click zoom options */
	dblclick?: DViewZoomDblClickOptions;
}

/**
 * {@link DView} wheel translation options.
 */
export interface DViewTranslationWheelOptions {
	/** True to enable wheel translation */
	enable?: boolean;

	/** Translation speed */
	speed?: number;

	/** Mouse modifiers */
	modifier?: keyof typeof UtilGestureModifier | UtilGestureModifier;

	/**
	 * Wheel translation checker.
	 * If a checker returns false, wheel translations will be canceled.
	 */
	checker?: DViewChecker;
}

/**
 * {@link DView} translation options.
 */
export interface DViewTranslationOptions {
	/** Wheel translation options */
	wheel?: DViewTranslationWheelOptions;
}

/**
 * {@link DView} events.
 */
export interface DViewEvents<EMITTER> {
	/**
	 * Triggered when a view operation starts.
	 *
	 * @param operation a view operation
	 * @param emitter an emitter
	 */
	start(operation: DViewTransform | DViewGesture, emitter: EMITTER): void;

	/**
	 * Triggered when a view operation ends.
	 *
	 * @param operation a view operation
	 * @param emitter an emitter
	 */
	end(operation: DViewTransform | DViewGesture, emitter: EMITTER): void;

	/**
	 * Triggered when a view operation stops.
	 *
	 * @param operation a view operation
	 * @param emitter an emitter
	 */
	stop(operation: DViewTransform | DViewGesture, emitter: EMITTER): void;
}

/**
 * {@link DView} "on" options.
 */
export interface DViewOnOptions<EMITTER> extends Partial<DViewEvents<EMITTER>>, DOnOptions {}

/**
 * {@link DView} options.
 */
export interface DViewOptions {
	/** Gesture options */
	gesture?: DViewGestureOptions;

	/** Zoom options */
	zoom?: DViewZoomOptions;

	/** Translation options */
	translation?: DViewTranslationOptions;

	/** Constraint options */
	constraint?: DViewConstraint;

	/** Theme */
	theme?: DThemeView | string;

	/** On options */
	on?: DViewOnOptions<DView>;
}

/**
 * {@link DView} theme.
 */
export interface DThemeView extends DThemeViewGesture {
	isWheelZoomEnabled(): boolean;
	isDblClickZoomEnabled(): boolean;
	isWheelTranslationEnabled(): boolean;
	getWheelZoomSpeed(): number;
	getWheelZoomModifier(): UtilGestureModifier;
	getDblClickZoomSpeed(): number;
	getDblClickZoomModifier(): UtilGestureModifier;
	getDblClickZoomDuration(): number;
	getWheelTranslationSpeed(): number;
	getWheelTranslationModifier(): UtilGestureModifier;
	getZoomMin(): number;
	getZoomMax(): number;
	getZoomKeepRatio(): boolean;
}

export interface DView {
	readonly gesture: DViewGesture;
	scale: DViewTargetPoint;
	position: DViewTargetPoint;

	/**
	 * Stops an animation if exits.
	 */
	stop(): void;

	/**
	 * Resets a position and a scale.
	 *
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	reset(duration?: number, stop?: boolean): void;

	/**
	 * Fits into a screen.
	 *
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	fit(duration?: number, stop?: boolean): void;

	/**
	 * Zooms in at the current position.
	 *
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	zoomIn(duration?: number, stop?: boolean): void;

	/**
	 * Zooms out at the current position.
	 *
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	zoomOut(duration?: number, stop?: boolean): void;

	/**
	 * Zooms into the given position.
	 *
	 * @param x a local X coordinate position
	 * @param y a local Y coordinate position
	 * @param scaleX a X coordinate scale
	 * @param scaleY a Y coordinate scale
	 * @param duration an duration
	 * @param stop false to keep a previous animation
	 */
	zoomAt(
		x: number,
		y: number,
		scaleX: number,
		scaleY: number,
		duration?: number,
		stop?: boolean
	): void;

	/**
	 * Zooms into the specified global position.
	 *
	 * @param x a global X coordinate position
	 * @param y a global Y coordinate position
	 * @param scaleX a X coordinate scale
	 * @param scaleY a Y coordinate scale
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	zoomAtGlobal(
		x: number,
		y: number,
		scaleX: number,
		scaleY: number,
		duration?: number,
		stop?: boolean
	): void;

	/**
	 * Zooms in / out at the current position.
	 *
	 * @param scaleX a X coordinate scale
	 * @param scaleY a Y coordinate scale
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	zoom(scaleX: number, scaleY: number, duration?: number, stop?: boolean): void;

	/**
	 * Moves to the given position.
	 *
	 * @param x a local X coordinate position
	 * @param y a local Y coordinate position
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	moveTo(x: number, y: number, duration?: number, stop?: boolean): void;

	/**
	 * Sets to the specified position and scale.
	 *
	 * @param x a local X coordinate position
	 * @param y a local Y coordinate position
	 * @param scaleX a X coordinate scale
	 * @param scaleY a Y coordinate scale
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	transform(
		x: number,
		y: number,
		scaleX: number,
		scaleY: number,
		duration?: number,
		stop?: boolean
	): void;

	toLocal(global: IPoint, local: IPoint, skipUpdate?: boolean): IPoint;
	toGlobal(local: IPoint, global: IPoint, skipUpdate?: boolean): IPoint;
}
