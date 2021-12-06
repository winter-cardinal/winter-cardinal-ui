/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from "pixi.js";
import { DApplicationLayerLike } from "./d-application-layer-like";
import { DControllerFocus } from "./d-controller-focus";

export interface DApplicationTarget {
	parent?: DApplicationTarget | null;
}

export interface DApplicationLike {
	/**
	 * The stage of the base layer.
	 */
	readonly stage: Container;

	/**
	 * Returns a root element.
	 */
	getRootElement(): HTMLElement;

	/**
	 * Returns a focus controller.
	 */
	getFocusController(): DControllerFocus;

	/**
	 * Returns a resolution.
	 */
	getResolution(): number;

	/**
	 * Returns a base layer.
	 */
	getLayerBase(): DApplicationLayerLike;

	/**
	 * Returns an overlay layer.
	 * Note that the overlay layer and the base layer are same
	 * if the overlay layer is disabled.
	 */
	getLayerOverlay(): DApplicationLayerLike;

	/**
	 * Updates layers.
	 */
	update(): void;

	/**
	 * Renders layers.
	 */
	render(): void;
}
