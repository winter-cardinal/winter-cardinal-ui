/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { Point } from "pixi.js";
import { DBase } from "./d-base";
import { DCanvas } from "./d-canvas";
import { DCanvasContainerOptions, DThemeCanvasContainer } from "./d-canvas-container";
import { DCanvasContainerViewDrag } from "./d-canvas-container-view-drag";
import { DCanvasContainerViewTransform } from "./d-canvas-container-view-transform";
import { DMouseModifier } from "./d-mouse-modifier";
import { DMouseModifiers } from "./d-mouse-modifiers";
import { utilIsString } from "./util/util-is-string";
import { UtilPointerEvent } from "./util/util-pointer-event";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";

export interface DCanvasContainerViewParent<CANVAS extends DBase = DCanvas> extends DBase {
	canvas: CANVAS | null;
}

export class DCanvasContainerView<
	CANVAS extends DBase = DCanvas,
	THEME extends DThemeCanvasContainer = DThemeCanvasContainer,
	OPTIONS extends DCanvasContainerOptions<CANVAS, THEME> = DCanvasContainerOptions<CANVAS, THEME>
> {
	protected _parent: DCanvasContainerViewParent<CANVAS>;

	protected _zoomPoint: Point;
	protected _zoomMin: number;
	protected _zoomMax: number;

	protected _isWheelZoomEnabled: boolean;
	protected _wheelZoomSpeed: number;
	protected _wheelZoomModifier: DMouseModifier;

	protected _isDblClickZoomEnabled: boolean;
	protected _dblClickZoomSpeed: number;
	protected _dblClickZoomModifier: DMouseModifier;
	protected _dblclickZoomDuration: number;

	protected _isWheelTranslationEnabled: boolean;
	protected _wheelTranslationSpeed: number;
	protected _wheelTranslationModifier: DMouseModifier;

	protected _transform: DCanvasContainerViewTransform<CANVAS>;
	protected _drag: DCanvasContainerViewDrag<CANVAS, THEME, OPTIONS>;

	constructor( parent: DCanvasContainerViewParent<CANVAS>, theme: THEME, options: OPTIONS | undefined ) {
		this._parent = parent;

		// Zoom
		const zoom = options && options.zoom;
		this._zoomPoint = new Point();
		this._zoomMin = zoom && zoom.min != null ? zoom.min : theme.getZoomMin();
		this._zoomMax = zoom && zoom.max != null ? zoom.max : theme.getZoomMax();

		// Zoom: Wheel
		const wheelZoom = zoom && zoom.wheel;
		this._isWheelZoomEnabled = ( wheelZoom && wheelZoom.enable != null ?
			wheelZoom.enable : theme.isWheelZoomEnabled()
		);
		this._wheelZoomSpeed = ( wheelZoom && wheelZoom.speed != null ?
			wheelZoom.speed : theme.getWheelZoomSpeed()
		);
		this._wheelZoomModifier = ( wheelZoom && wheelZoom.modifier != null ?
			( utilIsString( wheelZoom.modifier ) ?
				DMouseModifier[ wheelZoom.modifier ] : wheelZoom.modifier
			) :
			theme.getWheelZoomModifier()
		);

		// Zoom: Dbl click
		const dblClickZoom = zoom && zoom.dblclick;
		this._isDblClickZoomEnabled = ( dblClickZoom && dblClickZoom.enable != null ?
			dblClickZoom.enable : theme.isDblClickZoomEnabled()
		);
		this._dblClickZoomSpeed = ( dblClickZoom && dblClickZoom.amount != null ?
			dblClickZoom.amount : theme.getDblClickZoomSpeed()
		);
		this._dblClickZoomModifier = ( dblClickZoom && dblClickZoom.modifier != null ?
			( utilIsString( dblClickZoom.modifier ) ?
				DMouseModifier[ dblClickZoom.modifier ] : dblClickZoom.modifier
			) :
			theme.getDblClickZoomModifier()
		);
		this._dblclickZoomDuration = ( dblClickZoom && dblClickZoom.duration != null ?
			dblClickZoom.duration : theme.getDblClickZoomDuration()
		);

		// Translation: Wheel
		const wheelTranslation = options && options.translation && options.translation.wheel;
		this._isWheelTranslationEnabled = ( wheelTranslation && wheelTranslation.enable != null ?
			wheelTranslation.enable : theme.isWheelTranslationEnabled()
		);
		this._wheelTranslationSpeed = ( wheelTranslation && wheelTranslation.speed != null ?
			wheelTranslation.speed : theme.getWheelTranslationSpeed()
		);
		this._wheelTranslationModifier = ( wheelTranslation && wheelTranslation.modifier != null ?
			( utilIsString( wheelTranslation.modifier ) ?
				DMouseModifier[ wheelTranslation.modifier ] : wheelTranslation.modifier
			) :
			theme.getWheelTranslationModifier()
		);

		// Drag
		this._drag = new DCanvasContainerViewDrag<CANVAS, THEME, OPTIONS>( parent, this, theme, options );

		// Transform
		this._transform = new DCanvasContainerViewTransform( parent, this, this._dblclickZoomDuration );
	}

	get drag(): DCanvasContainerViewDrag<CANVAS, THEME, OPTIONS> {
		return this._drag;
	}

	stop(): void {
		this._drag.stop();
		this._transform.stop();
	}

	reset( duration?: number, stop?: boolean ): void {
		const parent = this._parent;
		const canvas = parent.canvas;
		if( canvas != null ) {
			const newCanvasX = (parent.width - canvas.width) * 0.5;
			const newCanvasY = (parent.height - canvas.height) * 0.5;
			this._transform.start( canvas, newCanvasX, newCanvasY, 1, duration, stop );
		}
	}

	fit( duration?: number, stop?: boolean ): void {
		const parent = this._parent;
		const canvas = parent.canvas;
		if( canvas != null ) {
			const padding = parent.padding;
			const width = parent.width;
			const height = parent.height;
			const canvasWidth = canvas.width;
			const canvasHeight = canvas.height;
			const canvasScaleX = (width - padding.getLeft() - padding.getRight()) / canvasWidth;
			const canvasScaleY = (height - padding.getTop() - padding.getBottom()) / canvasHeight;
			const newCanvasScale = this.toNormalizedScale( Math.min( canvasScaleX, canvasScaleY ) );
			const newCanvasWidth = canvasWidth * newCanvasScale;
			const newCanvasHeight = canvasHeight * newCanvasScale;
			const newCanvasX = (width - newCanvasWidth) * 0.5;
			const newCanvasY = (height - newCanvasHeight) * 0.5;
			this._transform.start( canvas, newCanvasX, newCanvasY, newCanvasScale, duration, stop );
		}
	}

	zoomIn( duration?: number, stop?: boolean ): void {
		this.zoom( this.scale * this._dblClickZoomSpeed, duration, stop );
	}

	zoomOut( duration?: number, stop?: boolean ): void {
		this.zoom( this.scale / this._dblClickZoomSpeed, duration, stop );
	}

	/**
	 *
	 * @param x local x coordinate
	 * @param y local y coordinate
	 * @param scale scale
	 */
	zoomAt( x: number, y: number, scale: number, duration?: number, stop?: boolean ): void {
		const parent = this._parent;
		const canvas = parent.canvas;
		if( canvas != null ) {
			// Canvas Scale
			const oldCanvasScale = canvas.scale.y;
			const newCanvasScale = this.toNormalizedScale( scale );
			const canvasScaleRatio = newCanvasScale / oldCanvasScale;

			// Canvas Position
			const newCanvasX = (canvas.x - x) * canvasScaleRatio + x;
			const newCanvasY = (canvas.y - y) * canvasScaleRatio + y;

			// Canvas
			this._transform.start( canvas, newCanvasX, newCanvasY, newCanvasScale, duration, stop );
		}
	}

	zoomAtGlobal( x: number, y: number, scale: number, duration?: number, stop?: boolean ): void {
		const local = this._zoomPoint;
		local.set( x, y );
		this.toLocal( local, local );
		this.zoomAt( local.x, local.y, scale, duration, stop );
	}

	zoom( scale: number, duration?: number, stop?: boolean ): void {
		const parent = this._parent;
		this.zoomAt( parent.width * 0.5, parent.height * 0.5, scale, duration, stop );
	}

	get scale(): number {
		const parent = this._parent;
		const canvas = parent.canvas;
		if( canvas != null ) {
			return canvas.scale.y;
		} else {
			return 1;
		}
	}

	set scale( scale: number ) {
		const parent = this._parent;
		const canvas = parent.canvas;
		if( canvas != null ) {
			const newScale = this.toNormalizedScale( scale );
			canvas.scale.set( newScale, newScale );
		}
	}

	moveTo( x: number, y: number, duration?: number, stop?: boolean ): void {
		const parent = this._parent;
		const canvas = parent.canvas;
		if( canvas != null ) {
			this._transform.start( canvas, x, y, canvas.scale.y, duration, stop );
		}
	}

	get position(): PIXI.IPoint {
		const parent = this._parent;
		const canvas = parent.canvas;
		if( canvas != null ) {
			return canvas.position;
		}
		return new PIXI.Point( 0, 0 );
	}

	set position( position: PIXI.IPoint ) {
		const parent = this._parent;
		const canvas = parent.canvas;
		if( canvas != null ) {
			canvas.position.set( position.x, position.y );
		}
	}

	transform( newX: number, newY: number, newScale: number, duration?: number, stop?: boolean ): void {
		const canvas = this._parent.canvas;
		if( canvas != null ) {
			this._transform.start( canvas, newX, newY, newScale, duration, stop );
		}
	}

	toLocal( global: PIXI.IPoint, local: PIXI.IPoint, skipUpdate?: boolean ): PIXI.IPoint {
		return this._parent.toLocal( global, undefined, local, skipUpdate );
	}

	toGlobal( local: PIXI.IPoint, global: PIXI.IPoint, skipUpdate?: boolean ): PIXI.IPoint {
		return this._parent.toGlobal( local, global, skipUpdate );
	}

	toNormalizedScale( scale: number ): number {
		return Math.min( this._zoomMax, Math.max( this._zoomMin, scale ) );
	}

	onWheel( e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point ): boolean {
		if( this._isWheelZoomEnabled && DMouseModifiers.match( e, this._wheelZoomModifier ) ) {
			if( deltas.deltaY !== 0 ) {
				const speed = deltas.lowest * this._wheelZoomSpeed;
				const scale = this.scale * ( 1 + deltas.deltaY * speed );
				this.zoomAtGlobal( global.x, global.y, scale, 0 );
				return true;
			}
		}

		if( this._isWheelTranslationEnabled && DMouseModifiers.match( e, this._wheelTranslationModifier ) ) {
			const parent = this._parent;
			const canvas = parent.canvas;
			if( canvas != null ) {
				this.stop();
				const speed = deltas.lowest * this._wheelTranslationSpeed;
				canvas.position.set(
					canvas.x - deltas.deltaX * speed,
					canvas.y + deltas.deltaY * speed
				);
				return true;
			}
		}

		return false;
	}

	onDblClick( e: MouseEvent | TouchEvent ): boolean {
		if( this._isDblClickZoomEnabled && DMouseModifiers.match( e, this._dblClickZoomModifier ) ) {
			const global = this._zoomPoint;
			UtilPointerEvent.toGlobal( e, global );
			const scale = this.scale * this._dblClickZoomSpeed;
			this.zoomAtGlobal( global.x, global.y, scale, this._dblclickZoomDuration );
			return true;
		}

		return false;
	}
}
