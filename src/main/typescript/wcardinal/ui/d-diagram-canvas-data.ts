/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeDataScoped } from "./shape/e-shape-data-scoped";
import { EShapeDataValue } from "./shape/e-shape-data-value";
import { EShapeDataValueState } from "./shape/e-shape-data-value-state";

export interface DDiagramCanvasData {
	readonly private: EShapeDataScoped;
	readonly protected: EShapeDataScoped;
	readonly extended: EShapeDataScoped;
	readonly ids: string[];
	each(iteratee: (id: string) => boolean | void): string | null;
	add(id: string, value: EShapeDataValue): void;
	set(
		id: string,
		value: unknown,
		time?: number,
		state?: EShapeDataValueState,
		from?: number | null,
		to?: number | null
	): boolean;
	get(id: string): EShapeDataValue[] | null;
	clear(id: string): boolean;
	toDirty(id: string): boolean;
	setAll(
		id: string,
		values: unknown[],
		times?: number[],
		states?: EShapeDataValueState[],
		from?: number | null,
		to?: number | null
	): boolean;
	setValue(id: string, value: unknown): boolean;
	setValues(id: string, values: unknown[]): boolean;
	setTime(id: string, time: number): boolean;
	setTimes(id: string, times: number[]): boolean;
	setState(id: string, state: EShapeDataValueState): boolean;
	setStates(id: string, states: EShapeDataValueState[]): boolean;
	setRange(id: string, from?: number | null, to?: number | null): boolean;
}
