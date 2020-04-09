/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { DBase } from "./d-base";
import { DMouseModifier } from "./d-mouse-modifier";
import { DThemeViewDrag, DViewDrag, DViewDragOptions } from "./d-view-drag";
import { DViewTargetPoint } from "./d-view-to-target";

export type DViewChecker = (
	e: WheelEvent | MouseEvent | TouchEvent, modifier: DMouseModifier, target: DBase
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
	modifier?: (keyof typeof DMouseModifier) | DMouseModifier;

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
	modifier?: (keyof typeof DMouseModifier) | DMouseModifier;

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
	modifier?: (keyof typeof DMouseModifier) | DMouseModifier;

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
	/** Wheel transtion options */
	wheel?: DViewTranslationWheelOptions;
}

/**
 * {@link DView} options.
 */
export interface DViewOptions {
	/** Drag options */
	drag?: DViewDragOptions;

	/** Zoom options */
	zoom?: DViewZoomOptions;

	/** Translation options */
	translation?: DViewTranslationOptions;

	/** Theme */
	theme?: DThemeView | string;
}

/**
 * {@link DView} theme.
 */
export interface DThemeView extends DThemeViewDrag {
	isWheelZoomEnabled(): boolean;
	isDblClickZoomEnabled(): boolean;
	isWheelTranslationEnabled(): boolean;
	getWheelZoomSpeed(): number;
	getWheelZoomModifier(): DMouseModifier;
	getDblClickZoomSpeed(): number;
	getDblClickZoomModifier(): DMouseModifier;
	getDblClickZoomDuration(): number;
	getWheelTranslationSpeed(): number;
	getWheelTranslationModifier(): DMouseModifier;
	getZoomMin(): number;
	getZoomMax(): number;
	getZoomKeepRatio(): boolean;
}

export interface DView {
	readonly drag: DViewDrag;
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
	reset( duration?: number, stop?: boolean ): void;

	/**
	 * Fits into a screen.
	 *
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	fit( duration?: number, stop?: boolean ): void;

	/**
	 * Zooms in at the current position.
	 *
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	zoomIn( duration?: number, stop?: boolean ): void;

	/**
	 * Zooms out at the current position.
	 *
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	zoomOut( duration?: number, stop?: boolean ): void;

	/**
	 * Zooms into the spcecified position.
	 *
	 * @param x a local X coordinate position
	 * @param y a local Y coordinate position
	 * @param scaleX a X coordinate scale
	 * @param scaleY a Y coordinate scale
	 * @param duration an duration
	 * @param stop false to keep a previous animation
	 */
	zoomAt( x: number, y: number, scaleX: number, scaleY: number, duration?: number, stop?: boolean ): void;

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
	zoomAtGlobal( x: number, y: number, scaleX: number, scaleY: number, duration?: number, stop?: boolean ): void;

	/**
	 * Zooms in / out at the current position.
	 *
	 * @param scaleX a X coordinate scale
	 * @param scaleY a Y coordinate scale
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	zoom( scaleX: number, scaleY: number, duration?: number, stop?: boolean ): void;

	/**
	 * Moves to the spacified position.
	 *
	 * @param x a local X coordinate position
	 * @param y a local Y coordinate position
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	moveTo( x: number, y: number, duration?: number, stop?: boolean ): void;

	/**
	 * Sets to the specified position and scale.
	 *
	 * @param x a local X coordinate positoon
	 * @param y a local Y coordinate position
	 * @param scaleX a X coordinate scale
	 * @param scaleY a Y coordinate scale
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	transform( x: number, y: number, scaleX: number, scaleY: number, duration?: number, stop?: boolean ): void;

	toLocal( global: IPoint, local: IPoint, skipUpdate?: boolean ): IPoint;
	toGlobal( local: IPoint, global: IPoint, skipUpdate?: boolean ): IPoint;
}
