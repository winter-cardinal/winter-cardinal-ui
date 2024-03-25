/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { DBase } from "./d-base";
import { DBaseOverflowMaskSimple } from "./d-base-overflow-mask-simple";

export class DChartPlotAreaTwofoldOverflowMaskSecondary extends DBaseOverflowMaskSimple {
	override onReflow(base: DBase, width: number, height: number): void {
		if (this._isInitialized && this._width === width && this._height === height) {
			return;
		}
		this._isInitialized = true;
		this._width = width;
		this._height = height;
		const hh = height * 0.5;

		this.clear();
		this.beginFill(0xffffff, 1);
		this.drawRect(0, hh, width, hh);
		this.endFill();
	}
}
