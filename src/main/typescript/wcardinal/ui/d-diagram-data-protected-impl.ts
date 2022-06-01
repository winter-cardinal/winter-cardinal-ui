/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramDataDiagram } from "./d-diagram-data";
import { DDiagramDataScoped } from "./d-diagram-data-scoped";

export class DDiagramDataProtectedImpl implements DDiagramDataScoped {
	protected _diagram: DDiagramDataDiagram;

	constructor(diagram: DDiagramDataDiagram) {
		this._diagram = diagram;
	}

	set(
		id: string,
		value: unknown,
		time?: number,
		from?: number | null,
		to?: number | null
	): boolean {
		const canvas = this._diagram.canvas;
		if (canvas != null) {
			return canvas.data.protected.set(id, value, time, from, to);
		}
		return false;
	}
}
