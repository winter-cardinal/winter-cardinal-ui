/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from "pixi.js";
import { DApplications } from "./d-applications";
import { DDiagramSerializedSnap } from "./d-diagram-serialized";
import { EShapeContainer } from "./shape/e-shape-container";
import { EShapeStrokeStyle } from "./shape/e-shape-stroke-style";
import { EShapeBar } from "./shape/variant/e-shape-bar";
import { EShapeBarPosition } from "./shape/variant/e-shape-bar-position";
import { ESnapper } from "./snapper/e-snapper";
import { ESnapperTargetValueType } from "./snapper/e-snapper-target-value";
import { EShapeLockPart } from "./shape/variant/e-shape-lock-part";

export interface DDiagramCanvasEditorSnapGridMajorOptions {
	interval?: number;
	color?: number;
	alpha?: number;
	width?: number;
	style?: EShapeStrokeStyle;
}

export interface DDiagramCanvasEditorSnapGridMinorOptions {
	color?: number;
	alpha?: number;
	width?: number;
	style?: EShapeStrokeStyle;
}

export type DDiagramCanvasEditorSnapGridSize = (
	given: number,
	width: number,
	height: number
) => number;

export interface DDiagramCanvasEditorSnapGridOptions {
	major?: DDiagramCanvasEditorSnapGridMajorOptions;
	minor?: DDiagramCanvasEditorSnapGridMinorOptions;
	size?: DDiagramCanvasEditorSnapGridSize;
	adaptive?: boolean;
}

export interface DDiagramCanvasEditorSnapTargetOptions {
	color?: number;
	alpha?: number;
	width?: number;
	style?: EShapeStrokeStyle;
}

export interface DDiagramCanvasEditorSnapOptions {
	controller: ESnapper;
	grid?: DDiagramCanvasEditorSnapGridOptions;
	target?: DDiagramCanvasEditorSnapTargetOptions;
}

export interface DThemeDiagramCanvasEditorSnap {
	getSnapGridMajorInterval(): number;
	getSnapGridMajorColor(): number;
	getSnapGridMajorAlpha(): number;
	getSnapGridMajorWidth(): number;
	getSnapGridMajorStyle(): EShapeStrokeStyle;

	getSnapGridMinorColor(): number;
	getSnapGridMinorAlpha(): number;
	getSnapGridMinorWidth(): number;
	getSnapGridMinorStyle(): EShapeStrokeStyle;

	getSnapGridSize(): DDiagramCanvasEditorSnapGridSize;
	isSnapGridAdaptive(): boolean;

	getSnapTargetColor(): number;
	getSnapTargetAlpha(): number;
	getSnapTargetWidth(): number;
	getSnapTargetStyle(): EShapeStrokeStyle;
}

export interface DDiagramCanvasEditorSnapParent extends Container {
	readonly width: number;
	readonly height: number;
	toDirty(): void;
}

export interface DDiagramCanvasEditorSnapGridMajor {
	interval: number;
	color: number;
	alpha: number;
	width: number;
	style: EShapeStrokeStyle;
}

export interface DDiagramCanvasEditorSnapGridMinor {
	color: number;
	alpha: number;
	width: number;
	style: EShapeStrokeStyle;
}

export interface DDiagramCanvasEditorSnapGrid {
	major: DDiagramCanvasEditorSnapGridMajor;
	minor: DDiagramCanvasEditorSnapGridMinor;
	size: DDiagramCanvasEditorSnapGridSize;
	adaptive: boolean;
}

export interface DDiagramCanvasEditorSnapTarget {
	color: number;
	alpha: number;
	width: number;
	style: EShapeStrokeStyle;
}

export class DDiagramCanvasEditorSnap {
	protected _parent: DDiagramCanvasEditorSnapParent;
	protected _controller: ESnapper;
	protected _container: EShapeContainer;

	protected _isDirty: boolean;

	protected _grid: DDiagramCanvasEditorSnapGrid;
	protected _gridScale: number;

	protected _target: DDiagramCanvasEditorSnapTarget;

	constructor(
		parent: DDiagramCanvasEditorSnapParent,
		theme: DThemeDiagramCanvasEditorSnap,
		options: DDiagramCanvasEditorSnapOptions
	) {
		this._parent = parent;
		this._isDirty = true;

		// Controller
		const controller = options.controller;
		this._controller = controller;
		const onChangeBound = (): void => {
			this.onChange();
		};
		controller.grid.on("change", onChangeBound);
		controller.target.on("change", onChangeBound);

		// Container
		const container = new EShapeContainer();
		container.visible = false;
		this._container = container;
		parent.addChildAt(container, parent.children.length - 1);

		// Grid
		this._grid = this.toGrid(theme, options.grid);
		this._gridScale = this.toGridScale(parent.scale.x);

		// Target
		this._target = this.toTarget(theme, options.target);
	}

	protected toGrid(
		theme: DThemeDiagramCanvasEditorSnap,
		options?: DDiagramCanvasEditorSnapGridOptions
	): DDiagramCanvasEditorSnapGrid {
		if (options != null) {
			return {
				major: this.toGridMajor(theme, options.major),
				minor: this.toGridMinor(theme, options.minor),
				size: options.size ?? theme.getSnapGridSize(),
				adaptive: options.adaptive ?? theme.isSnapGridAdaptive()
			};
		}
		return {
			major: this.toGridMajor(theme),
			minor: this.toGridMinor(theme),
			size: theme.getSnapGridSize(),
			adaptive: theme.isSnapGridAdaptive()
		};
	}

	protected toGridMajor(
		theme: DThemeDiagramCanvasEditorSnap,
		options?: DDiagramCanvasEditorSnapGridMajorOptions
	): DDiagramCanvasEditorSnapGridMajor {
		if (options != null) {
			return {
				interval: options.interval ?? theme.getSnapGridMajorInterval(),
				color: options.color ?? theme.getSnapGridMajorColor(),
				alpha: options.alpha ?? theme.getSnapGridMajorAlpha(),
				width: options.width ?? theme.getSnapGridMajorWidth(),
				style: options.style ?? theme.getSnapGridMajorStyle()
			};
		}
		return {
			interval: theme.getSnapGridMajorInterval(),
			color: theme.getSnapGridMajorColor(),
			alpha: theme.getSnapGridMajorAlpha(),
			width: theme.getSnapGridMajorWidth(),
			style: theme.getSnapGridMajorStyle()
		};
	}

	protected toGridMinor(
		theme: DThemeDiagramCanvasEditorSnap,
		options?: DDiagramCanvasEditorSnapGridMinorOptions
	): DDiagramCanvasEditorSnapGridMinor {
		if (options != null) {
			return {
				color: options.color ?? theme.getSnapGridMinorColor(),
				alpha: options.alpha ?? theme.getSnapGridMinorAlpha(),
				width: options.width ?? theme.getSnapGridMinorWidth(),
				style: options.style ?? theme.getSnapGridMinorStyle()
			};
		}
		return {
			color: theme.getSnapGridMinorColor(),
			alpha: theme.getSnapGridMinorAlpha(),
			width: theme.getSnapGridMinorWidth(),
			style: theme.getSnapGridMinorStyle()
		};
	}

	protected toTarget(
		theme: DThemeDiagramCanvasEditorSnap,
		options?: DDiagramCanvasEditorSnapTargetOptions
	): DDiagramCanvasEditorSnapTarget {
		if (options != null) {
			return {
				color: options.color ?? theme.getSnapTargetColor(),
				alpha: options.alpha ?? theme.getSnapTargetAlpha(),
				width: options.width ?? theme.getSnapTargetWidth(),
				style: options.style ?? theme.getSnapTargetStyle()
			};
		}
		return {
			color: theme.getSnapTargetColor(),
			alpha: theme.getSnapTargetAlpha(),
			width: theme.getSnapTargetWidth(),
			style: theme.getSnapTargetStyle()
		};
	}

	protected onChange(): void {
		this._isDirty = true;
		DApplications.update(this._parent);
	}

	get container(): EShapeContainer {
		return this._container;
	}

	serialize(): DDiagramSerializedSnap {
		return this._controller.serialize();
	}

	onResize(newWidth: number, newHeight: number, oldWidth: number, oldHeight: number): void {
		this._isDirty = true;
	}

	onScale(newX: number, newY: number, oldX: number, oldY: number): void {
		const gridScale = this.toGridScale(newX);
		if (this._gridScale !== gridScale) {
			this._gridScale = gridScale;
			this._isDirty = true;
		}
	}

	protected toGridScale(sx: number): number {
		if (!this._grid.adaptive || sx <= 0 || 1 <= sx) {
			return 1;
		}
		const target = 1 / sx;
		let result = 1;
		while (result < target && result < Number.MAX_SAFE_INTEGER) {
			result <<= 1;
		}
		return result;
	}

	onRender(): void {
		if (this._isDirty) {
			this._isDirty = false;
			this.updateAll();
		}
	}

	protected updateAll(): void {
		const parent = this._parent;
		const container = this._container;
		const controller = this._controller;

		const isGridVisible = controller.grid.visible;
		const isTargetVisible = controller.target.visible;
		if (isGridVisible || isTargetVisible) {
			const w = parent.width;
			const h = parent.height;
			const wh = 0.5 * w;
			const hh = 0.5 * h;
			const TOP = EShapeBarPosition.TOP;
			const LEFT = EShapeBarPosition.LEFT;

			const shapes = container.children as EShapeBar[];
			let index = 0;

			// Grid
			if (isGridVisible) {
				const grid = this._grid;
				const major = grid.major;
				const minor = grid.minor;
				const interval = major.interval;
				const size = grid.size(controller.grid.size * this._gridScale, w, h);
				for (let x = size, ix = 1; x < w; x += size, ix += 1, index += 1) {
					const style = ix % interval === 0 ? major : minor;
					this.update(container, shapes, index, x, hh, TOP, w, h, style);
				}
				for (let y = size, iy = 1; y < h; y += size, iy += 1, index += 1) {
					const style = iy % interval === 0 ? major : minor;
					this.update(container, shapes, index, wh, y, LEFT, w, h, style);
				}
			}

			// Target
			if (isTargetVisible) {
				const values = controller.target.values;
				const target = this._target;
				for (let i = 0, imax = values.length; i < imax; i += 1, index += 1) {
					const value = values[i];
					const position = value.position;
					if (value.type === ESnapperTargetValueType.VERTICAL) {
						this.update(container, shapes, index, position, hh, TOP, w, h, target);
					} else {
						this.update(container, shapes, index, wh, position, LEFT, w, h, target);
					}
				}
			}

			for (let i = index, imax = shapes.length; i < imax; ++i) {
				shapes[i].visible = false;
			}

			container.visible = true;
		} else {
			container.visible = false;
		}
	}

	protected update(
		container: EShapeContainer,
		shapes: EShapeBar[],
		index: number,
		x: number,
		y: number,
		position: EShapeBarPosition,
		w: number,
		h: number,
		style:
			| DDiagramCanvasEditorSnapGridMajor
			| DDiagramCanvasEditorSnapGridMinor
			| DDiagramCanvasEditorSnapTarget
	): void {
		let shape = null;
		if (index < shapes.length) {
			shape = shapes[index];
			shape.lock(EShapeLockPart.UPLOADED);
			shape.points.position = position;
			shape.transform.position.set(x, y);
			shape.stroke.set(
				true,
				style.color,
				style.alpha,
				style.width,
				undefined,
				undefined,
				style.style
			);
			shape.size.set(w, h);
			shape.visible = true;
			shape.unlock(EShapeLockPart.UPLOADED, true);
		} else {
			shape = new EShapeBar();
			shape.lock(EShapeLockPart.UPLOADED);
			shape.points.position = position;
			shape.transform.position.set(x, y);
			shape.stroke.set(
				true,
				style.color,
				style.alpha,
				style.width,
				undefined,
				undefined,
				style.style
			);
			shape.size.set(w, h);
			shape.visible = true;
			shape.unlock(EShapeLockPart.UPLOADED, true);
			shape.attach(container);
		}
	}
}
