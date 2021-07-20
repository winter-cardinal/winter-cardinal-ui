/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphics } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseReflowable } from "./d-base-reflowable";

export class DScrollBarThumbReflowableVertical extends Graphics implements DBaseReflowable {
	constructor(base: DBase) {
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
			this.drawRect(borderAlign * (width - borderWidth), 0, borderWidth, height);
			this.endFill();
			this.visible = true;
		} else {
			this.visible = false;
		}
	}
}
