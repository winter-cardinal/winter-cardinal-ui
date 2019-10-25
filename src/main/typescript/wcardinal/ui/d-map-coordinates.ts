/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DMapCoordinate } from "./d-map-coordinate";
import { DMapCoordinateEPSG3857 } from "./d-map-coordinate-epsg3857";

export class DMapCoordinates {
	protected static _default?: DMapCoordinate;

	static get DEFAULT(): DMapCoordinate {
		if( this._default == null ) {
			this._default = new DMapCoordinateEPSG3857();
		}
		return this._default;
	}
}
