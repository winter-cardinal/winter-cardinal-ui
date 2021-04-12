/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DColorAndAlpha } from "./d-color-and-alpha";

export class DPickerColorAndAlpha implements DColorAndAlpha {
	protected _colorAndAlpha: DColorAndAlpha;
	protected _onColorChange: (color: number) => void;
	protected _onAlphaChange: (alpha: number) => void;

	constructor(
		colorAndAlpha: DColorAndAlpha,
		onColorChange: (color: number) => void,
		onAlphaChange: (alpha: number) => void
	) {
		this._colorAndAlpha = colorAndAlpha;
		this._onColorChange = onColorChange;
		this._onAlphaChange = onAlphaChange;
	}

	get color(): number {
		return this._colorAndAlpha.color;
	}

	set color(color: number) {
		if (this._colorAndAlpha.color !== color) {
			const callback = this._onColorChange;
			if (callback != null) {
				callback(color);
			}
		}
	}

	get alpha(): number {
		return this._colorAndAlpha.alpha;
	}

	set alpha(alpha: number) {
		if (this._colorAndAlpha.alpha !== alpha) {
			const callback = this._onAlphaChange;
			if (callback != null) {
				callback(alpha);
			}
		}
	}
}
