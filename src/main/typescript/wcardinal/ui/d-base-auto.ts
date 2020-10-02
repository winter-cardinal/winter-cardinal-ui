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
	 * @returns True if changed. False if not changed.
	 * Null if the given size is not an auto parameter.
	 */
	from( size: DCoordinateSize ): boolean | null {
		if( size === "auto" || size === "AUTO" ) {
			if( ! this._isOn ) {
				this._isOn = true;
				return true;
			}
			return false;
		}
		return null;
	}
}
