/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { IPoint, ObservablePoint } from "pixi.js";
import { EShape } from "../e-shape";
import { EShapeCorner } from "../e-shape-corner";
import { EShapeDefaults } from "../e-shape-defaults";
import { EShapeFill } from "../e-shape-fill";
import { EShapeGradientLike } from "../e-shape-gradient";
import { EShapeStroke } from "../e-shape-stroke";
import { EShapeData } from "../e-shape-data";
import { EShapeText } from "../e-shape-text";
import { EShapeType } from "../e-shape-type";
import { EShapeBase } from "./e-shape-base";
import { EShapeFillImpl } from "./e-shape-fill-impl";
import { EShapeStrokeImpl } from "./e-shape-stroke-impl";
import { EShapeDataImpl } from "../e-shape-data-impl";
import { EShapeTextImpl } from "./e-shape-text-impl";

export abstract class EShapePrimitive extends EShapeBase {
	readonly size: IPoint;
	readonly fill: EShapeFill;
	readonly stroke: EShapeStroke;
	protected _radius: number;
	protected _corner: EShapeCorner;
	protected _image?: HTMLImageElement;
	gradient?: EShapeGradientLike;
	readonly text: EShapeText;
	/** @deprecated in favor of {@link data} */
	readonly tag: EShapeData;
	readonly data: EShapeData;

	constructor(type: EShapeType) {
		super(type);
		this.size = this.newSize();
		this.fill = this.newFill();
		this.stroke = this.newStroke();
		this._radius = EShapeDefaults.RADIUS;
		this._corner = EShapeCorner.ALL;
		const data = new EShapeDataImpl();
		this.data = data;
		this.tag = data;
		this.text = this.newText();
	}

	protected newSize(): IPoint {
		return new ObservablePoint(
			() => {
				this.onSizeChange();
			},
			undefined,
			EShapeDefaults.SIZE_X,
			EShapeDefaults.SIZE_Y
		);
	}

	protected newFill(): EShapeFill {
		return new EShapeFillImpl(this, true, EShapeDefaults.FILL_COLOR, EShapeDefaults.FILL_ALPHA);
	}

	protected newStroke(): EShapeStroke {
		return new EShapeStrokeImpl(
			this,
			true,
			EShapeDefaults.STROKE_COLOR,
			EShapeDefaults.STROKE_ALPHA,
			EShapeDefaults.STROKE_WIDTH,
			EShapeDefaults.STROKE_ALIGN,
			EShapeDefaults.STROKE_SIDE,
			EShapeDefaults.STROKE_STYLE
		);
	}

	protected newText(): EShapeText {
		return new EShapeTextImpl(
			this,
			EShapeDefaults.TEXT_VALUE,
			EShapeDefaults.TEXT_COLOR,
			EShapeDefaults.TEXT_ALPHA,
			EShapeDefaults.TEXT_FAMILY,
			EShapeDefaults.TEXT_SIZE
		);
	}

	abstract clone(): EShape;

	get corner(): number {
		return this._corner;
	}

	set corner(corner: number) {
		if (this._corner !== corner) {
			this._corner = corner;
			this.updateUploaded();
		}
	}

	get radius(): number {
		return this._radius;
	}

	set radius(radius: number) {
		if (this._radius !== radius) {
			this._radius = radius;
			this.updateUploaded();
		}
	}

	get image(): HTMLImageElement | undefined {
		return this._image;
	}

	set image(image: HTMLImageElement | undefined) {
		if (this._image !== image) {
			if (image != null) {
				this._image = image;
				this.imageSrc = image.src;
			} else {
				this._image = undefined;
				this.imageSrc = undefined;
			}
			const parent = this.parent;
			if (parent != null) {
				parent.toDirty();
			}
		}
	}
}
