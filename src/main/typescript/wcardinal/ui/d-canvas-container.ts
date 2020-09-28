/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseEvents, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DCanvas } from "./d-canvas";
import { DView, DViewOptions } from "./d-view";
import { DViewImpl } from "./d-view-impl";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";

/**
 * {@link DCanvasContainer} events.
 */
export interface DCanvasContainerEvents<CANVAS, EMITTER> extends DBaseEvents<EMITTER> {
	/**
	 * Triggered when a canvas is removed.
	 *
	 * @param canvas a removed canvas
	 * @param emitter an emitter
	 */
	unset( canvas: CANVAS, emitter: EMITTER ): void;

	/**
	 * Triggered when a canvas is set.
	 *
	 * @param canvas a new canvas
	 * @param emitter an emitter
	 */
	set( canvas: CANVAS, emitter: EMITTER ): void;
}

/**
 * {@link DCanvasContainer} "on" options.
 */
export interface DCanvasContainerOnOptions<CANVAS, EMITTER> extends Partial<DCanvasContainerEvents<CANVAS, EMITTER>> {
	[ key: string ]: Function | undefined;
}

/**
 * {@link DCanvasContainer} options.
 */
export interface DCanvasContainerOptions<
	CANVAS extends DBase = DCanvas,
	CANVAS_OPTIONS extends DBaseOptions = DBaseOptions,
	THEME extends DThemeCanvasContainer = DThemeCanvasContainer,
	EMITTER = any
> extends DBaseOptions<THEME> {
	mask?: boolean;
	view?: DViewOptions;
	canvas?: CANVAS | CANVAS_OPTIONS;
	on?: DCanvasContainerOnOptions<CANVAS, EMITTER>;
}

/**
 * {@link DCanvasContainer} theme.
 */
export interface DThemeCanvasContainer extends DThemeBase {
	isOverflowMaskEnabled(): boolean;
}

/**
 * A canvas container.
 */
export class DCanvasContainer<
	CANVAS extends DBase = DCanvas,
	CANVAS_OPTIONS extends DBaseOptions = DBaseOptions,
	THEME extends DThemeCanvasContainer = DThemeCanvasContainer,
	OPTIONS extends DCanvasContainerOptions<CANVAS, CANVAS_OPTIONS, THEME>
		= DCanvasContainerOptions<CANVAS, CANVAS_OPTIONS, THEME>
> extends DBase<THEME, OPTIONS> {
	protected _canvas!: CANVAS | null;
	protected _canvasOptions!: CANVAS_OPTIONS | null;
	protected _overflowMask!: DBaseOverflowMask | null;
	protected _view!: DViewImpl;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._canvas = null;
		const theme = this.theme;
		this._view = new DViewImpl( this, () => this._canvas, options && options.view );

		// Canvas
		const canvas = ( options && options.canvas ? options.canvas : null );
		if( canvas instanceof DBase ) {
			this._canvasOptions = null;
			this.canvas = canvas;
		} else {
			this._canvasOptions = canvas;
		}

		// Overflow mask
		this._overflowMask = null;
		if( options && options.mask != null ? options.mask : theme.isOverflowMaskEnabled() ) {
			this.mask = this.getOrCreateOverflowMask();
		}
	}

	protected getType(): string {
		return "DCanvasContainer";
	}

	onResize( newWidth: number, newHeight: number, oldWidth: number, oldHeight: number ): void {
		super.onResize( newWidth, newHeight, oldWidth, oldHeight );
		this.updateContentSize( newWidth, newHeight, oldWidth, oldHeight );
	}

	get canvas(): CANVAS | null {
		return this._canvas;
	}

	set canvas( canvas: CANVAS | null ) {
		const previous = this._canvas;
		if( previous != null ) {
			this._canvas = null;
			this.removeChild( previous );
			this.emit( "unset", previous, this );
			previous.destroy();
		}

		this._canvas = canvas;
		if( canvas != null ) {
			this.addChild( canvas );
			this._view.reset( 0 );
			this.emit( "set", canvas, this );
		} else {
			DApplications.update( this );
		}
	}

	protected getOrCreateOverflowMask(): DBaseOverflowMask {
		if( this._overflowMask == null ) {
			this._overflowMask = new DBaseOverflowMask( this );
			this.addReflowable( this._overflowMask );
			this.toDirty();
		}
		return this._overflowMask;
	}

	protected updateContentSize( newWidth: number, newHeight: number, oldWidth: number, oldHeight: number ): void {
		const canvas = this._canvas;
		if( canvas != null ) {
			const canvasX = canvas.x + (newWidth - oldWidth) * 0.5;
			const canvasY = canvas.y + (newHeight - oldHeight) * 0.5;
			canvas.position.set( canvasX, canvasY );
		}
	}

	get view(): DView {
		return this._view;
	}

	onWheel( e: WheelEvent, deltas: UtilWheelEventDeltas, global: Point ): boolean {
		const vresult = this._view.onWheel( e, deltas, global );
		const sresult = super.onWheel( e, deltas, global );
		return vresult || sresult;
	}

	onDblClick( e: MouseEvent | TouchEvent, interactionManager: interaction.InteractionManager ): boolean {
		const vresult = this._view.onDblClick( e, interactionManager );
		const sresult = super.onDblClick( e, interactionManager );
		return vresult || sresult;
	}

	protected onDown( e: interaction.InteractionEvent ): void {
		this._view.onDown( e );
		super.onDown( e );
	}

	destroy(): void {
		// Overflow mask
		const overflowMask = this._overflowMask;
		if( overflowMask != null ) {
			this._overflowMask = null;
			overflowMask.destroy();
		}
		(this as any).mask = null;

		super.destroy();
	}
}
