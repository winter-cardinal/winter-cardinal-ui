/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramDataDiagram } from "./d-diagram-data";
import { DDiagramDataPrivate } from "./d-diagram-data-private";

export class DDiagramDataPrivateImpl implements DDiagramDataPrivate {
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
			return canvas.data.private.set(id, value, time, from, to);
		}
		return false;
	}
}
