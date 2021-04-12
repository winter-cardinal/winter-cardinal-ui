/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";

export interface DViewTransform {
	/**
	 * Sets to the specified position and scale.
	 *
	 * @param target a target
	 * @param x a local X coordinate positoon
	 * @param y a local Y coordinate position
	 * @param scaleX a X coordinate scale
	 * @param scaleY a Y coordinate scale
	 * @param duration an animation duration
	 * @param stop false to keep a previous animation
	 */
	start(
		target: DBase,
		x: number,
		y: number,
		scaleX: number,
		scaleY: number,
		duration?: number,
		stop?: boolean
	): void;

	/**
	 * Stops an animation if exits.
	 */
	stop(): void;
}
