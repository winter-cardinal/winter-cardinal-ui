/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasDataPrivate } from "./d-diagram-canvas-data-private";
import { EShapeDataValue } from "./shape/e-shape-data-value";

export interface DDiagramCanvasData {
	readonly private: DDiagramCanvasDataPrivate;
	readonly ids: string[];
	each(callback: (id: string) => boolean | void): string | null;
	add(id: string, value: EShapeDataValue): void;
	set(
		id: string,
		value: unknown,
		time?: number,
		from?: number | null,
		to?: number | null
	): boolean;
	clear(id: string): boolean;
	setAll(
		id: string,
		values: unknown[],
		times?: number[],
		from?: number | null,
		to?: number | null
	): boolean;
	setValue(id: string, value: unknown, time?: number): boolean;
	setValues(id: string, values: unknown[], times?: number[]): boolean;
	setTime(id: string, time: number): boolean;
	setTimes(id: string, times: number[]): boolean;
	setRange(id: string, from?: number | null, to?: number | null): boolean;
}
