/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasTicker } from "./d-diagram-canvas-ticker";
import { DDiagramTicker, DDiagramTickerParent } from "./d-diagram-ticker";
import { isNumber } from "./util/is-number";

export class DDiagramCanvasTickerImpl implements DDiagramCanvasTicker {
	protected _parent: DDiagramTickerParent;
	protected _data: Map<number, DDiagramTicker>;

	constructor(parent: DDiagramTickerParent) {
		this._parent = parent;
		this._data = new Map<number, DDiagramTicker>();
	}

	add(interval: unknown): DDiagramTicker {
		const data = this._data;
		const normalized = this.toNormalized(interval);
		const ticker = data.get(normalized);
		if (ticker != null) {
			return ticker;
		}
		const newTicker = new DDiagramTicker(this._parent, normalized);
		data.set(normalized, newTicker);
		return newTicker;
	}

	protected toNormalized(interval: unknown): number {
		return isNumber(interval) ? Math.max(1, Math.round(interval)) : 1000;
	}

	start(): void {
		this._data.forEach((ticker): void => {
			ticker.start();
		});
	}

	stop(): void {
		this._data.forEach((ticker): void => {
			ticker.stop();
		});
	}
}
