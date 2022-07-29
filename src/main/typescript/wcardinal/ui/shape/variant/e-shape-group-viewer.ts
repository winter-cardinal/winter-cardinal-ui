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
import { EShapeGroupFillViewer } from "./e-shape-group-fill-viewer";
import { EShapeGroupSize } from "./e-shape-group-size";
import { EShapeGroupSizeViewer } from "./e-shape-group-size-viewer";
import { EShapeGroupStrokeViewer } from "./e-shape-group-stroke-viewer";
import { EShapeGroupTextViewer } from "./e-shape-group-text-viewer";
import { EShapeDataImpl } from "../e-shape-data-impl";
import { EShapeGroupSizeEditor } from "./e-shape-group-size-editor";

export abstract class EShapeGroupViewer extends EShapeBase {
	size: EShapeGroupSize;
	fill: EShapeFill;
	stroke: EShapeStroke;
	/** @deprecated in favor of {@link data} */
	tag: EShapeData;
	data: EShapeData;
	text: EShapeText;

	protected _isEditMode: boolean;

	constructor(isEditMode: boolean, type: EShapeType) {
		super(type);
		this._isEditMode = isEditMode;
		const data = this.newData();
		this.data = data;
		this.tag = data;
		this.size = this.newGroupSize(isEditMode);
		this.fill = this.newGroupFill();
		this.stroke = this.newGroupStroke();
		this.text = this.newGroupText();
	}

	get isEditMode(): boolean {
		return this._isEditMode;
	}

	protected newGroupSize(isEditMode: boolean): EShapeGroupSize {
		const sizeX = EShapeDefaults.SIZE_X;
		const sizeY = EShapeDefaults.SIZE_Y;
		if (isEditMode) {
			return new EShapeGroupSizeEditor(this, sizeX, sizeY, this.isGroupSizeFittable());
		} else {
			return new EShapeGroupSizeViewer(this, sizeX, sizeY, sizeX, sizeY);
		}
	}

	protected isGroupSizeFittable(): boolean {
		return true;
	}

	protected newData(): EShapeData {
		return new EShapeDataImpl();
	}

	protected newGroupFill(): EShapeFill {
		return new EShapeGroupFillViewer();
	}

	protected newGroupStroke(): EShapeStroke {
		return new EShapeGroupStrokeViewer();
	}

	protected newGroupText(): EShapeText {
		return new EShapeGroupTextViewer();
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
		return EShapeCorner.NONE;
	}

	set corner(corner: EShapeCorner) {
		// DO NOTHING
	}

	get cursor(): string {
		return "";
	}

	set cursor(cursor: string) {
		// DO NOTHING
	}

	get gradient(): EShapeGradientLike | undefined {
		return undefined;
	}

	set gradient(gradient: EShapeGradientLike | undefined) {
		// DO NOTHING
	}

	get radius(): number {
		return 0;
	}

	set radius(radius: number) {
		// DO NOTHING
	}

	get image(): HTMLImageElement | undefined {
		return undefined;
	}

	set image(image: HTMLImageElement | undefined) {
		// DO NOTHING
	}

	get points(): EShapePoints | undefined {
		return undefined;
	}

	set points(points: EShapePoints | undefined) {
		// DO NOTHING
	}

	abstract clone(): EShapeGroupViewer;

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
