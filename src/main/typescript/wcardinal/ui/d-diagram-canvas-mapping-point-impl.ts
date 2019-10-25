/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { ObservablePoint } from "pixi.js";
import { DMapTileMappingPoint } from "./d-map-tile-mapping";

export class DDiagramCanvasTileMappingPointImpl extends ObservablePoint implements DMapTileMappingPoint {
	get lon(): number {
		return this.x;
	}

	set lon( lon: number ) {
		this.x = lon;
	}

	get lat(): number {
		return this.y;
	}

	set lat( lat: number ) {
		this.y = lat;
	}

	toObject(): { lon: number, lat: number } {
		return {
			lon: this.x,
			lat: this.y
		};
	}
}
