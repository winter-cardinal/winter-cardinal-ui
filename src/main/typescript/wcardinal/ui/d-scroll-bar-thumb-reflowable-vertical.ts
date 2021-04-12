/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphics } from "pixi.js";
import { DBase, DReflowable } from "./d-base";

export class DScrollBarThumbReflowableVertical extends Graphics implements DReflowable {
	constructor(base: DBase) {
		super();
		base.addRenderable(this, true);
		base.addReflowable(this);
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
			this.drawRect(width - borderWidth - borderAlign, 0, borderWidth, height);
			this.endFill();
			this.visible = true;
		} else {
			this.visible = false;
		}
	}
}
