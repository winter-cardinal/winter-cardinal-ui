/*
 * Copyright (C) 2021 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Container } from "pixi.js";
import { DApplications } from "./d-applications";
import { DDiagramSerializedSnap } from "./d-diagram-serialized";
import { EShapeContainer } from "./shape/e-shape-container";
import { EShapePointsStyle } from "./shape/e-shape-points-style";
import { EShapeBar } from "./shape/variant/e-shape-bar";
import { EShapeBarPosition } from "./shape/variant/e-shape-bar-position";
import { ESnapper } from "./snapper/e-snapper";
import { ESnapperTargetValueType } from "./snapper/e-snapper-target-value";

export interface DDiagramCanvasEditorSnapperGridMajorOptions {
	interval?: number;
	color?: number;
	alpha?: number;
	width?: number;
	style?: EShapePointsStyle;
}

export interface DDiagramCanvasEditorSnapperGridMinorOptions {
	color?: number;
	alpha?: number;
	width?: number;
	style?: EShapePointsStyle;
}

export interface DDiagramCanvasEditorSnapperGridOptions {
	major?: DDiagramCanvasEditorSnapperGridMajorOptions;
	minor?: DDiagramCanvasEditorSnapperGridMinorOptions;
}

export interface DDiagramCanvasEditorSnapperTargetOptions {
	color?: number;
	alpha?: number;
	width?: number;
	style?: EShapePointsStyle;
}

export interface DDiagramCanvasEditorSnapperOptions {
	controller: ESnapper;
	grid?: DDiagramCanvasEditorSnapperGridOptions;
	target?: DDiagramCanvasEditorSnapperTargetOptions;
}

export interface DThemeDiagramCanvasEditorSnapper {
	getSnapperGridMajorInterval(): number;
	getSnapperGridMajorColor(): number;
	getSnapperGridMajorAlpha(): number;
	getSnapperGridMajorWidth(): number;
	getSnapperGridMajorStyle(): EShapePointsStyle;

	getSnapperGridMinorColor(): number;
	getSnapperGridMinorAlpha(): number;
	getSnapperGridMinorWidth(): number;
	getSnapperGridMinorStyle(): EShapePointsStyle;

	getSnapperTargetColor(): number;
	getSnapperTargetAlpha(): number;
	getSnapperTargetWidth(): number;
	getSnapperTargetStyle(): EShapePointsStyle;
}

export interface DDiagramCanvasEditorSnapperParent extends Container {
	readonly width: number;
	readonly height: number;
	toDirty(): void;
}

export interface DDiagramCanvasEditorSnapperGridMajor {
	interval: number;
	color: number;
	alpha: number;
	width: number;
	style: EShapePointsStyle;
}

export interface DDiagramCanvasEditorSnapperGridMinor {
	color: number;
	alpha: number;
	width: number;
	style: EShapePointsStyle;
}

export interface DDiagramCanvasEditorSnapperGrid {
	major: DDiagramCanvasEditorSnapperGridMajor;
	minor: DDiagramCanvasEditorSnapperGridMinor;
}

export interface DDiagramCanvasEditorSnapperTarget {
	color: number;
	alpha: number;
	width: number;
	style: EShapePointsStyle;
}

export class DDiagramCanvasEditorSnapper {
	protected _parent: DDiagramCanvasEditorSnapperParent;
	protected _controller: ESnapper;
	protected _container: EShapeContainer;
	protected _grid: DDiagramCanvasEditorSnapperGrid;
	protected _target: DDiagramCanvasEditorSnapperTarget;

	constructor( parent: DDiagramCanvasEditorSnapperParent, theme: DThemeDiagramCanvasEditorSnapper, options: DDiagramCanvasEditorSnapperOptions ) {
		this._parent = parent;

		// Controller
		const controller = options.controller;
		this._controller = controller;
		const onChangeBound = (): void => {
			this.onChange();
		};
		controller.grid.on( "change", onChangeBound );
		controller.target.on( "change", onChangeBound );

		// Container
		const container = new EShapeContainer();
		container.visible = false;
		this._container = container;
		parent.addChildAt( container, parent.children.length - 1 );

		// Grid
		this._grid = this.toGrid( theme, options.grid );

		// Target
		this._target = this.toTarget( theme, options.target );
	}

	protected toGrid( theme: DThemeDiagramCanvasEditorSnapper, options?: DDiagramCanvasEditorSnapperGridOptions ): DDiagramCanvasEditorSnapperGrid {
		return {
			major: this.toGridMajor( theme, options?.major ),
			minor: this.toGridMinor( theme, options?.minor ),
		};
	}

	protected toGridMajor( theme: DThemeDiagramCanvasEditorSnapper, options?: DDiagramCanvasEditorSnapperGridMajorOptions ): DDiagramCanvasEditorSnapperGridMajor {
		return {
			interval: options?.interval ?? theme.getSnapperGridMajorInterval(),
			color: options?.color ?? theme.getSnapperGridMajorColor(),
			alpha: options?.alpha ?? theme.getSnapperGridMajorAlpha(),
			width: options?.width ?? theme.getSnapperGridMajorWidth(),
			style: options?.style ?? theme.getSnapperGridMajorStyle(),
		}
	}

	protected toGridMinor( theme: DThemeDiagramCanvasEditorSnapper, options?: DDiagramCanvasEditorSnapperGridMinorOptions ): DDiagramCanvasEditorSnapperGridMinor {
		return {
			color: options?.color ?? theme.getSnapperGridMinorColor(),
			alpha: options?.alpha ?? theme.getSnapperGridMinorAlpha(),
			width: options?.width ?? theme.getSnapperGridMinorWidth(),
			style: options?.style ?? theme.getSnapperGridMinorStyle(),
		}
	}

	protected toTarget( theme: DThemeDiagramCanvasEditorSnapper, options?: DDiagramCanvasEditorSnapperTargetOptions ): DDiagramCanvasEditorSnapperTarget {
		return {
			color: options?.color ?? theme.getSnapperTargetColor(),
			alpha: options?.alpha ?? theme.getSnapperTargetAlpha(),
			width: options?.width ?? theme.getSnapperTargetWidth(),
			style: options?.style ?? theme.getSnapperTargetStyle(),
		};
	}

	protected onChange(): void {
		const parent = this._parent;
		parent.toDirty();
		DApplications.update( parent );
	}

	serialize(): DDiagramSerializedSnap {
		return this._controller.serialize();
	}

	onReflow(): void {
		const parent = this._parent;
		const container = this._container;
		const controller = this._controller;

		const isGridVisible = controller.grid.visible;
		const isTargetVisible = controller.target.visible;
		if( isGridVisible || isTargetVisible ) {
			const w = parent.width;
			const h = parent.height;
			const wh = 0.5 * w;
			const hh = 0.5 * h;
			const TOP = EShapeBarPosition.TOP;
			const LEFT = EShapeBarPosition.LEFT;

			const shapes = container.children as EShapeBar[];
			let index = 0;

			// Grid
			if( isGridVisible ) {
				const size = controller.grid.size;
				const grid = this._grid;
				const major = grid.major;
				const minor = grid.minor;
				const interval = major.interval;
				for( let x = size, ix = 1; x < w; x += size, ix += 1, index += 1 ) {
					this.update(
						container, shapes, index,
						x, hh, TOP,
						w, h,
						ix % interval === 0 ? major : minor
					);
				}
				for( let y = size, iy = 1; y < w; y += size, iy += 1, index += 1 ) {
					this.update(
						container, shapes, index,
						wh, y, LEFT,
						w, h,
						iy % interval === 0 ? major : minor
					);
				}
			}

			// Target
			if( isTargetVisible ) {
				const values = controller.target.values;
				const target = this._target;
				for( let i = 0, imax = values.length; i < imax; i += 1, index += 1 ) {
					const value = values[ i ];
					const position = value.position;
					if( value.type === ESnapperTargetValueType.VERTICAL ) {
						this.update(
							container, shapes, index,
							position, hh, TOP,
							w, h,
							target
						);
					} else {
						this.update(
							container, shapes, index,
							wh, position, LEFT,
							w, h,
							target
						);
					}
				}
			}

			for( let i = index, imax = shapes.length; i < imax; ++i ) {
				shapes[ i ].visible = false;
			}

			container.visible = true;
		} else {
			container.visible = false;
		}
	}

	protected update(
		container: EShapeContainer,
		shapes: EShapeBar[], index: number,
		x: number, y: number, position: EShapeBarPosition, w: number, h: number,
		style: DDiagramCanvasEditorSnapperGridMajor | DDiagramCanvasEditorSnapperGridMinor | DDiagramCanvasEditorSnapperTarget
	): void {
		let shape = null;
		if( index < shapes.length ) {
			shape = shapes[ index ];
			shape.points.position = position;
		} else {
			shape = new EShapeBar( position, -1, style.width );
			shape.fill.enable = false;
			shape.points.style = style.style;
			shape.attach( container );
		}
		shape.transform.position.set( x, y );
		shape.stroke.set( true, style.color, style.alpha );
		shape.size.set( w, h );
	}
}
