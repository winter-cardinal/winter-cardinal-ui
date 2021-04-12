/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DDiagramCanvasTileMapping } from "./d-diagram-canvas-mapping";
import { DDiagramCanvasTileMappingPointImpl } from "./d-diagram-canvas-mapping-point-impl";
import { DMapTileMappingPoint } from "./d-map-tile-mapping";

export class DDiagramCanvasTileMappingImpl implements DDiagramCanvasTileMapping {
	protected _enable: boolean;
	protected _from: DDiagramCanvasTileMappingPointImpl;
	protected _to: DDiagramCanvasTileMappingPointImpl;
	protected _cb: () => void;

	constructor(cb: () => void, mapping?: DDiagramCanvasTileMapping);
	constructor(
		cb: () => void,
		enable: boolean,
		lon0: number,
		lat0: number,
		lon1: number,
		lat1: number
	);
	constructor(
		cb: () => void,
		mappingOrEnable?: DDiagramCanvasTileMapping | boolean,
		lon0?: number,
		lat0?: number,
		lon1?: number,
		lat1?: number
	) {
		this._cb = cb;
		if (mappingOrEnable === true || mappingOrEnable === false) {
			this._enable = mappingOrEnable;
			this._from = new DDiagramCanvasTileMappingPointImpl(cb, null, lon0, lat0);
			this._to = new DDiagramCanvasTileMappingPointImpl(cb, null, lon1, lat1);
		} else if (mappingOrEnable != null) {
			this._enable = mappingOrEnable.enable;
			const from = mappingOrEnable.from;
			const to = mappingOrEnable.to;
			this._from = new DDiagramCanvasTileMappingPointImpl(cb, null, from.lon, from.lat);
			this._to = new DDiagramCanvasTileMappingPointImpl(cb, null, to.lon, to.lat);
		} else {
			this._enable = false;
			this._from = new DDiagramCanvasTileMappingPointImpl(cb, null, -180, +85.05112877980659);
			this._to = new DDiagramCanvasTileMappingPointImpl(cb, null, +180, -85.05112877980659);
		}
	}

	get enable(): boolean {
		return this._enable;
	}

	set enable(enable: boolean) {
		if (this._enable !== enable) {
			this._enable = enable;
			this._cb();
		}
	}

	get from(): DMapTileMappingPoint {
		return this._from;
	}

	get to(): DMapTileMappingPoint {
		return this._to;
	}

	serialize(): DDiagramCanvasTileMapping {
		return {
			enable: this._enable,
			from: this._from.toObject(),
			to: this._to.toObject()
		};
	}
}
