/*
 * Copyright (C) 2026 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShape } from "../e-shape";

/**
 * Data that open actions set to {@link DataTransfer.setData} when users drag and drop shapes.
 */
export class EShapeActionRuntimeOpenDropped {
	/**
	 * The ID of {@link EShape}s on which open actions are executed.
	 */
	shape: string;

	/**
	 * {@link EShapeActionValueOpenType} or {@link EShapeActionOpenExtension.type} of open actions which set this data
	 */
	type: number;

	/**
	 * Returned value of the `target` expression.
	 */
	target: unknown;

	constructor(shape: EShape, type: number, target: unknown) {
		this.shape = shape.id;
		this.type = type;
		this.target = target;
	}
}
