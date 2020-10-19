/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DCoordinateSize } from "./d-coordinate";

export class DBaseAuto {
	protected _isOn: boolean;

	constructor() {
		this._isOn = false;
	}

	get isOff(): boolean {
		return ! this._isOn;
	}

	get isOn(): boolean {
		return this._isOn;
	}

	toCoordinate( def: DCoordinateSize ): DCoordinateSize {
		return ( this._isOn ? "auto" : def );
	}

	/**
	 * Update the auto settings by the given size.
	 *
	 * @param size a size
	 * @returns True if the given size is "auto".
	 */
	from( size: DCoordinateSize ): boolean {
		if( size === "auto" || size === "AUTO" ) {
			this._isOn = true;
			return true;
		}
		this._isOn = false;
		return false;
	}
}
