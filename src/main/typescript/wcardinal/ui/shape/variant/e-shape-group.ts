/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint } from "pixi.js";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeFill } from "../e-shape-fill";
import { EShapeGradientLike } from "../e-shape-gradient";
import { EShapePoints } from "../e-shape-points";
import { EShapeStroke } from "../e-shape-stroke";
import { EShapeData } from "../e-shape-data";
import { EShapeText } from "../e-shape-text";
import { EShapeType } from "../e-shape-type";
import { EShapeBase } from "./e-shape-base";
import { EShapeGroupFillEditor } from "./e-shape-group-fill-editor";
import { EShapeGroupPoints } from "./e-shape-group-points";
import { EShapeGroupPropertyParent } from "./e-shape-group-property-parent";
import { EShapeGroupSize } from "./e-shape-group-size";
import { EShapeGroupSizeEditor } from "./e-shape-group-size-editor";
import { EShapeGroupSizeViewer } from "./e-shape-group-size-viewer";
import { EShapeGroupStrokeEditor } from "./e-shape-group-stroke-editor";
import { EShapeDataImpl } from "../e-shape-data-impl";
import { EShapeTextImpl } from "./e-shape-text-impl";
import { EShapeResourceManagerDeserializationMode } from "../e-shape-resource-manager-deserialization-mode";

export class EShapeGroup extends EShapeBase implements EShapeGroupPropertyParent {
	size: EShapeGroupSize;
	fill: EShapeFill;
	stroke: EShapeStroke;
	/** @deprecated in favor of {@link data} */
	tag: EShapeData;
	data: EShapeData;
	text: EShapeText;

	protected _mode: EShapeResourceManagerDeserializationMode;
	protected _points?: EShapePoints;

	constructor(
		mode: EShapeResourceManagerDeserializationMode,
		type: EShapeType = EShapeType.GROUP
	) {
		super(type);
		this._mode = mode;
		const data = new EShapeDataImpl();
		this.data = data;
		this.tag = data;
		this.size = this.newGroupSize(mode);
		this.fill = this.newGroupFill();
		this.stroke = this.newGroupStroke();
		this.text = this.newGroupText();
		this._points = this.newGroupPoints();
	}

	get mode(): EShapeResourceManagerDeserializationMode {
		return this._mode;
	}

	protected newGroupSize(mode: EShapeResourceManagerDeserializationMode): EShapeGroupSize {
		const sizeX = EShapeDefaults.SIZE_X;
		const sizeY = EShapeDefaults.SIZE_Y;
		if (mode !== EShapeResourceManagerDeserializationMode.VIEWER) {
			return new EShapeGroupSizeEditor(this, sizeX, sizeY, this.isGroupSizeFittable());
		} else {
			return new EShapeGroupSizeViewer(this, sizeX, sizeY, sizeX, sizeY);
		}
	}

	protected isGroupSizeFittable(): boolean {
		return true;
	}

	protected newGroupFill(): EShapeFill {
		return new EShapeGroupFillEditor(this);
	}

	protected newGroupStroke(): EShapeStroke {
		return new EShapeGroupStrokeEditor(this);
	}

	protected newGroupText(): EShapeText {
		return new EShapeTextImpl(
			this,
			EShapeDefaults.TEXT_VALUE,
			EShapeDefaults.TEXT_COLOR,
			EShapeDefaults.TEXT_ALPHA,
			EShapeDefaults.TEXT_FAMILY,
			EShapeDefaults.TEXT_SIZE
		);
	}

	protected newGroupPoints(): EShapePoints | undefined {
		return new EShapeGroupPoints(this);
	}

	protected getBoundsSize(): IPoint {
		const size = this.size;
		if (size instanceof EShapeGroupSizeViewer) {
			return size.base;
		} else {
			return size;
		}
	}

	onChildTransformChange(): void {
		super.onChildTransformChange();
		this.size.fit();
	}

	get corner(): EShapeCorner {
		const children = this.children;
		if (0 < children.length) {
			return children[children.length - 1].corner;
		}
		return EShapeCorner.ALL;
	}

	set corner(corner: EShapeCorner) {
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].corner = corner;
		}
	}

	get cursor(): string {
		const children = this.children;
		if (0 < children.length) {
			return children[children.length - 1].cursor;
		}
		return "";
	}

	set cursor(cursor: string) {
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].cursor = cursor;
		}
	}

	get gradient(): EShapeGradientLike | undefined {
		const children = this.children;
		for (let i = children.length - 1; 0 <= i; --i) {
			const gradient = children[i].gradient;
			if (gradient != null) {
				return gradient;
			}
		}
		return undefined;
	}

	set gradient(gradient: EShapeGradientLike | undefined) {
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].gradient = gradient;
		}
	}

	get radius(): number {
		const children = this.children;
		if (0 < children.length) {
			return children[children.length - 1].radius;
		}
		return 0.5;
	}

	set radius(radius: number) {
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].radius = radius;
		}
	}

	get image(): HTMLImageElement | undefined {
		const children = this.children;
		for (let i = children.length - 1; 0 <= i; --i) {
			const image = children[i].image;
			if (image != null) {
				return image;
			}
		}
		return undefined;
	}

	set image(image: HTMLImageElement | undefined) {
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			children[i].image = image;
		}
	}

	get points(): EShapePoints | undefined {
		const children = this.children;
		for (let i = children.length - 1; 0 <= i; --i) {
			const points = children[i].points;
			if (points != null) {
				return this._points;
			}
		}
		return undefined;
	}

	set points(points: EShapePoints | undefined) {
		// DO NOTHING
	}

	clone(): EShapeGroup {
		const result = this.newClone().copy(this);
		const children = this.children;
		for (let i = 0, imax = children.length; i < imax; ++i) {
			const clone = children[i].clone();
			clone.parent = result;
			result.children.push(clone);
		}
		result.onChildTransformChange();
		result.toDirty();
		return result;
	}

	protected newClone(): EShapeGroup {
		const constructor = this.constructor as typeof EShapeGroup;
		return new constructor(this._mode, this.type);
	}

	containsAbs(
		x: number,
		y: number,
		ax: number,
		ay: number,
		sw: number,
		ss: number,
		sa: number
	): boolean {
		return false;
	}
}
