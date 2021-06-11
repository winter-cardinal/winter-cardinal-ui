/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Graphics, Renderer } from "pixi.js";
import { DBase } from "./d-base";
import { DBaseReflowable } from "./d-base-reflowable";

export class DBaseOverflowMaskSimple extends Graphics implements DBaseReflowable {
	constructor(parent: DBase) {
		super();
		(this as any).parent = parent;
	}

	render(renderer: Renderer): void {
		this.updateTransform();
		super.render(renderer);
	}

	onReflow(base: DBase, width: number, height: number): void {
		this.clear();
		this.beginFill(0xffffff, 1);
		this.drawRect(0, 0, width, height);
		this.endFill();
	}
}
