/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphics } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseReflowable } from "./d-base-reflowable";
import { DScrollBarThumb } from "./d-scroll-bar-thumb";

export class DScrollBarThumbReflowableHorizontal extends Graphics implements DBaseReflowable {
	constructor(base: DScrollBarThumb) {
		super();
		base.snippet.add(this, true);
		base.reflowable.add(this);
	}

	onReflow(base: DBase, width: number, height: number): void {
		this.clear();
		const state = base.state;
		const border = base.border;
		const borderColor = border.getColor(state);
		if (borderColor != null) {
			const borderAlpha = border.getAlpha(state);
			const borderWidth = border.getWidth(state);
			const borderAlign = border.getAlign(state);
			this.beginFill(borderColor, borderAlpha);
			this.lineStyle(0, 0, 0, 0);
			this.drawRect(0, borderAlign * (height - borderWidth), width, borderWidth);
			this.endFill();
			this.visible = true;
		} else {
			this.visible = false;
		}
	}
}
