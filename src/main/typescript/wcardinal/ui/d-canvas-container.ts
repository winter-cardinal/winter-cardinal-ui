/*
 * Copyright (C) 2019 Toshiba Corporation
 * SPDX-License-Identifier: Apache-2.0
 */

import { interaction, Point } from "pixi.js";
import { DApplications } from "./d-applications";
import { DBase, DBaseOptions, DThemeBase } from "./d-base";
import { DBaseOverflowMask } from "./d-base-overflow-mask";
import { DCanvas } from "./d-canvas";
import { DCanvasContainerView, DCanvasContainerViewChecker } from "./d-canvas-container-view";
import { DDragMode } from "./d-drag-mode";
import { DMouseModifier } from "./d-mouse-modifier";
import { UtilDragChecker } from "./util/util-drag";
import { UtilWheelEventDeltas } from "./util/util-wheel-event";

export interface DCanvasContainerOptions<
	CANVAS extends DBase = DCanvas,
	THEME extends DThemeCanvasContainer = DThemeCanvasContainer
> extends DBaseOptions<THEME> {
	mask?: boolean;
	canvas?: CANVAS;
	drag?: {
		mode?: (keyof typeof DDragMode) | DDragMode;
		modifier?: (keyof typeof DMouseModifier) | DMouseModifier;
		checker?: {
			start?: UtilDragChecker,
			move?: UtilDragChecker
		},
		duration?: number | {
			position?: number,
			scale?: number
		};
	};
	zoom?: {
		min?: number;
		max?: number;
		wheel?: {
			enable?: boolean;
			speed?: number;
			modifier?: (keyof typeof DMouseModifier) | DMouseModifier;
			checker?: DCanvasContainerViewChecker;
		},
		dblclick?: {
			enable?: boolean;
			amount?: number;
			modifier?: (keyof typeof DMouseModifier) | DMouseModifier;
			checker?: DCanvasContainerViewChecker;
			duration?: number;
		}
	};
	translation?: {
		wheel?: {
			enable?: boolean;
			speed?: number;
			modifier?: (keyof typeof DMouseModifier) | DMouseModifier;
			checker?: DCanvasContainerViewChecker;
		}
	};
}

export interface DThemeCanvasContainer extends DThemeBase {
	isOverflowMaskEnabled(): boolean;
	isWheelZoomEnabled(): boolean;
	isDblClickZoomEnabled(): boolean;
	isWheelTranslationEnabled(): boolean;
	getWheelZoomSpeed(): number;
	getWheelZoomModifier(): DMouseModifier;
	getDblClickZoomSpeed(): number;
	getDblClickZoomModifier(): DMouseModifier;
	getDblClickZoomDuration(): number;
	getWheelTranslationSpeed(): number;
	getWheelTranslationModifier(): DMouseModifier;
	getDragMode(): DDragMode;
	getDragModifier(): DMouseModifier;
	getDragDurationPosition(): number;
	getDragDurationScale(): number;
	getZoomMin(): number;
	getZoomMax(): number;
}

const isOverflowMaskEnabled = <
	CANVAS extends DBase,
	THEME extends DThemeCanvasContainer
>( theme: THEME, options?: DCanvasContainerOptions<CANVAS, THEME> ): boolean => {
	if( options && options.mask != null ) {
		return options.mask;
	}
	return theme.isOverflowMaskEnabled();
};

export class DCanvasContainer<
	CANVAS extends DBase = DCanvas,
	THEME extends DThemeCanvasContainer = DThemeCanvasContainer,
	OPTIONS extends DCanvasContainerOptions<CANVAS, THEME> = DCanvasContainerOptions<CANVAS, THEME>
> extends DBase<THEME, OPTIONS> {
	protected _canvas!: CANVAS | null;
	protected _overflowMask!: DBaseOverflowMask | null;
	protected _view!: DCanvasContainerView<CANVAS, THEME, OPTIONS>;

	protected init( options?: OPTIONS ) {
		super.init( options );

		this._canvas = null;
		const theme = this.theme;
		this._view = new DCanvasContainerView( this, theme, options );

		// Canvas
		this.canvas = ( options && options.canvas ? options.canvas : null );

		// Overflow mask
		if( isOverflowMaskEnabled( theme, options ) ) {
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

	get view(): DCanvasContainerView<CANVAS, THEME, OPTIONS> {
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
		this.mask = null;

		super.destroy();
	}
}
