/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { EShapeResourceManagerDeserialization } from "../e-shape-resource-manager-deserialization";
import { EShapeResourceManagerSerialization } from "../e-shape-resource-manager-serialization";
import { EShapeStroke, EShapeStrokeLike } from "../e-shape-stroke";
import { EShapeStrokeSide } from "../e-shape-stroke-side";
import { EShapeStrokeStyle } from "../e-shape-stroke-style";
import { EShapeGroupPropertyParent } from "./e-shape-group-property-parent";

export class EShapeGroupStrokeEditor implements EShapeStroke {
	protected _parent: EShapeGroupPropertyParent;

	constructor(parent: EShapeGroupPropertyParent) {
		this._parent = parent;
	}

	get enable(): boolean {
		const children = this._parent.children;
		if (0 < children.length) {
			return children[children.length - 1].stroke.enable;
		}
		return false;
	}

	set enable(enable: boolean) {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].stroke.enable = enable;
		}
	}

	get color(): number {
		const children = this._parent.children;
		if (0 < children.length) {
			return children[children.length - 1].stroke.color;
		}
		return 0xffffff;
	}

	set color(color: number) {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].stroke.color = color;
		}
	}

	get alpha(): number {
		const children = this._parent.children;
		if (0 < children.length) {
			return children[children.length - 1].stroke.alpha;
		}
		return 1.0;
	}

	set alpha(alpha: number) {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].stroke.alpha = alpha;
		}
	}

	get width(): number {
		const children = this._parent.children;
		if (0 < children.length) {
			return children[children.length - 1].stroke.width;
		}
		return 1.0;
	}

	set width(width: number) {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].stroke.width = width;
		}
	}

	get align(): number {
		const children = this._parent.children;
		if (0 < children.length) {
			return children[children.length - 1].stroke.align;
		}
		return 1.0;
	}

	set align(align: number) {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].stroke.align = align;
		}
	}

	get side(): EShapeStrokeSide {
		const children = this._parent.children;
		if (0 < children.length) {
			return children[children.length - 1].stroke.side;
		}
		return 1.0;
	}

	set side(side: EShapeStrokeSide) {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].stroke.side = side;
		}
	}

	get style(): EShapeStrokeStyle {
		const children = this._parent.children;
		if (0 < children.length) {
			return children[children.length - 1].stroke.style;
		}
		return EShapeStrokeStyle.NONE;
	}

	set style(style: EShapeStrokeStyle) {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].stroke.style = style;
		}
	}

	copy(target?: Partial<EShapeStrokeLike>): void {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].stroke.copy(target);
		}
	}

	set(
		enable: boolean,
		color: number,
		alpha: number,
		width: number,
		side: EShapeStrokeSide
	): void {
		const children = this._parent.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].stroke.set(enable, color, alpha, width, side);
		}
	}

	clone(): EShapeGroupStrokeEditor {
		return new EShapeGroupStrokeEditor(this._parent);
	}

	toObject(): EShapeStrokeLike {
		const children = this._parent.children;
		if (0 < children.length) {
			return children[children.length - 1].stroke.toObject();
		}
		return {
			enable: false,
			color: 0xffffff,
			alpha: 1.0,
			width: 1.0,
			align: 0.0,
			side: EShapeStrokeSide.NONE,
			style: EShapeStrokeStyle.NONE
		};
	}

	serialize(manager: EShapeResourceManagerSerialization): number {
		return -1;
	}

	deserialize(target: number, manager: EShapeResourceManagerDeserialization): void {
		//
	}
}
