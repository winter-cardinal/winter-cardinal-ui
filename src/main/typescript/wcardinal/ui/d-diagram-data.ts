/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasData } from "./d-diagram-canvas-data";
import { DDiagramDataMapper } from "./d-diagram-data-mapper";
import { DDiagramDataScoped } from "./d-diagram-data-scoped";
import { DDiagramDataRemote } from "./d-diagram-data-remote";
import { DDiagramDataRemoteOptions } from "./d-diagram-data-remote";
import { EShapeDataValueState } from "./shape/e-shape-data-value-state";
import { EShapeDataValue } from "./shape/e-shape-data-value";

export interface DDiagramDataCanvas {
	data: DDiagramCanvasData;
}

export interface DDiagramDataDiagram {
	canvas: DDiagramDataCanvas | null;
}

export interface DDiagramDataOptions {
	/**
	 * A data mapper.
	 */
	mapper?: DDiagramDataMapper;

	/**
	 * Remote data options.
	 */
	remote?: DDiagramDataRemoteOptions;
}

/**
 * A data helper class for diagrams.
 */
export interface DDiagramData {
	readonly remote: DDiagramDataRemote;
	readonly private: DDiagramDataScoped;
	readonly protected: DDiagramDataScoped;
	readonly extended: DDiagramDataScoped;
	readonly ids: string[];
	mapper: DDiagramDataMapper | null;
	each(iteratee: (id: string) => boolean | void): string | null;
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
	setValue(id: string, value: unknown, time?: number): boolean;
	setValues(id: string, values: unknown[], times?: number[]): boolean;
	setTime(id: string, time: number): boolean;
	setTimes(id: string, times: number[]): boolean;
	setState(id: string, state: unknown): boolean;
	setStates(id: string, states: unknown[]): boolean;
	setRange(id: string, from?: number | null, to?: number | null): boolean;
	update(): void;
}
