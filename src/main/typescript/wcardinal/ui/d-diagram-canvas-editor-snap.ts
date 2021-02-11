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

export interface DDiagramCanvasEditorSnapGridMajorOptions {
	interval?: number;
	color?: number;
	alpha?: number;
	width?: number;
	style?: EShapePointsStyle;
}

export interface DDiagramCanvasEditorSnapGridMinorOptions {
	color?: number;
	alpha?: number;
	width?: number;
	style?: EShapePointsStyle;
}

export interface DDiagramCanvasEditorSnapGridOptions {
	major?: DDiagramCanvasEditorSnapGridMajorOptions;
	minor?: DDiagramCanvasEditorSnapGridMinorOptions;
}

export interface DDiagramCanvasEditorSnapTargetOptions {
	color?: number;
	alpha?: number;
	width?: number;
	style?: EShapePointsStyle;
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
	getSnapGridMajorStyle(): EShapePointsStyle;

	getSnapGridMinorColor(): number;
	getSnapGridMinorAlpha(): number;
	getSnapGridMinorWidth(): number;
	getSnapGridMinorStyle(): EShapePointsStyle;

	getSnapTargetColor(): number;
	getSnapTargetAlpha(): number;
	getSnapTargetWidth(): number;
	getSnapTargetStyle(): EShapePointsStyle;
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
	style: EShapePointsStyle;
}

export interface DDiagramCanvasEditorSnapGridMinor {
	color: number;
	alpha: number;
	width: number;
	style: EShapePointsStyle;
}

export interface DDiagramCanvasEditorSnapGrid {
	major: DDiagramCanvasEditorSnapGridMajor;
	minor: DDiagramCanvasEditorSnapGridMinor;
}

export interface DDiagramCanvasEditorSnapTarget {
	color: number;
	alpha: number;
	width: number;
	style: EShapePointsStyle;
}

export class DDiagramCanvasEditorSnap {
	protected _parent: DDiagramCanvasEditorSnapParent;
	protected _controller: ESnapper;
	protected _container: EShapeContainer;
	protected _grid: DDiagramCanvasEditorSnapGrid;
	protected _target: DDiagramCanvasEditorSnapTarget;

	constructor( parent: DDiagramCanvasEditorSnapParent, theme: DThemeDiagramCanvasEditorSnap, options: DDiagramCanvasEditorSnapOptions ) {
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

	protected toGrid( theme: DThemeDiagramCanvasEditorSnap, options?: DDiagramCanvasEditorSnapGridOptions ): DDiagramCanvasEditorSnapGrid {
		return {
			major: this.toGridMajor( theme, options?.major ),
			minor: this.toGridMinor( theme, options?.minor ),
		};
	}

	protected toGridMajor( theme: DThemeDiagramCanvasEditorSnap, options?: DDiagramCanvasEditorSnapGridMajorOptions ): DDiagramCanvasEditorSnapGridMajor {
		return {
			interval: options?.interval ?? theme.getSnapGridMajorInterval(),
			color: options?.color ?? theme.getSnapGridMajorColor(),
			alpha: options?.alpha ?? theme.getSnapGridMajorAlpha(),
			width: options?.width ?? theme.getSnapGridMajorWidth(),
			style: options?.style ?? theme.getSnapGridMajorStyle(),
		}
	}

	protected toGridMinor( theme: DThemeDiagramCanvasEditorSnap, options?: DDiagramCanvasEditorSnapGridMinorOptions ): DDiagramCanvasEditorSnapGridMinor {
		return {
			color: options?.color ?? theme.getSnapGridMinorColor(),
			alpha: options?.alpha ?? theme.getSnapGridMinorAlpha(),
			width: options?.width ?? theme.getSnapGridMinorWidth(),
			style: options?.style ?? theme.getSnapGridMinorStyle(),
		}
	}

	protected toTarget( theme: DThemeDiagramCanvasEditorSnap, options?: DDiagramCanvasEditorSnapTargetOptions ): DDiagramCanvasEditorSnapTarget {
		return {
			color: options?.color ?? theme.getSnapTargetColor(),
			alpha: options?.alpha ?? theme.getSnapTargetAlpha(),
			width: options?.width ?? theme.getSnapTargetWidth(),
			style: options?.style ?? theme.getSnapTargetStyle(),
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
		style: DDiagramCanvasEditorSnapGridMajor | DDiagramCanvasEditorSnapGridMinor | DDiagramCanvasEditorSnapTarget
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
