/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeFill, EShapeFillLike } from "../e-shape-fill";
import { EShapeFillDirection } from "../e-shape-fill-direction";
import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeGroupPropertyParent } from "./e-shape-group-property-parent";

export class EShapeGroupFillEditor implements EShapeFill {
	protected _parent: EShapeGroupPropertyParent;

	constructor(parent: EShapeGroupPropertyParent) {
		this._parent = parent;
	}

	get enable(): boolean {
		const children = this._parent.children;
		if (0 < children.length) {
			return children[children.length - 1].fill.enable;
		}
		return true;
	}

	set enable(enable: boolean) {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].fill.enable = enable;
		}
	}

	get color(): number {
		const children = this._parent.children;
		if (0 < children.length) {
			return children[children.length - 1].fill.color;
		}
		return 0xffffff;
	}

	set color(color: number) {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].fill.color = color;
		}
	}

	get alpha(): number {
		const children = this._parent.children;
		if (0 < children.length) {
			return children[children.length - 1].fill.alpha;
		}
		return 1.0;
	}

	set alpha(alpha: number) {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].fill.alpha = alpha;
		}
	}

	get direction(): EShapeFillDirection {
		const children = this._parent.children;
		if (0 < children.length) {
			return children[children.length - 1].fill.direction;
		}
		return 1.0;
	}

	set direction(direction: EShapeFillDirection) {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].fill.direction = direction;
		}
	}

	get percent(): number {
		const children = this._parent.children;
		if (0 < children.length) {
			return children[children.length - 1].fill.percent;
		}
		return 1.0;
	}

	set percent(percent: number) {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].fill.percent = percent;
		}
	}

	copy(target?: Partial<EShapeFillLike>): void {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].fill.copy(target);
		}
	}

	set(enable: boolean, color: number, alpha: number): void {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].fill.set(enable, color, alpha);
		}
	}

	clone(): EShapeGroupFillEditor {
		return new EShapeGroupFillEditor(this._parent);
	}

	toObject(): EShapeFillLike {
		const children = this._parent.children;
		if (0 < children.length) {
			return children[children.length - 1].fill.toObject();
		}
		return {
			enable: true,
			color: 0xffffff,
			alpha: 1.0,
			direction: EShapeFillDirection.BOTTOM,
			percent: 1.0
		};
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		return -1;
	}

	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void {
		// DO NOTHING
	}
}
